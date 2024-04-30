import { json } from '@sveltejs/kit'
import { localData, stateHouse, stateSenate } from './rep-data.js';

const fetchUrl = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    switch (res.status) {
      case 400: /* Handle */ break;
      case 401: /* Handle */ break;
      case 404: /* Handle */ break;
      case 500: /* Handle */ break;
    }
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
};

const configureStateReps = (res) => {
  const houseRep = res?.features[0].properties;
  const senateRep = res?.features[1].properties
  return ([{
    name: houseRep.name,
    position: "MN House",
    district: "District " + houseRep.district,
    email: stateHouse?.[houseRep.district].email,
    url: `https://www.house.mn.gov/members/profile/${houseRep.memid}`,
    image: `https://www.gis.lcc.mn.gov/iMaps/districts/images/house/${houseRep.district}`,
    selected: false
  },
  {
    name: senateRep.name,
    position: "MN Senate",
    district: "District " + senateRep.district,
    email: stateSenate?.[senateRep.district].email,
    url: `https://www.senate.mn/members/member_bio.html?leg_id=${senateRep.memid}`,
    image: `https://www.gis.lcc.mn.gov/iMaps/districts/images/senate/${senateRep.district}`,
    selected: false
  }
  ])
}

const configureMetroReps = (res) => {
  const rep = res.features[0].attributes;
  console.log('metroRep: ', rep)
  return ({
    name: rep.MEMBER,
    position: "Metropolitan Councilmember",
    district: "District " + rep.MCDIST,
    email: rep.MC_EMAIL,
    url: localData.metro?.[rep.MCDIST].url || '',
    image: localData.metro?.[rep.MCDIST].image || '',
    selected: false
  })
};

const configureWardReps = (res) => {
  const rep = res.features[0].attributes;
  const ward = rep.ward.replace("Ward ", '');
  return ({
    name: rep.name.replace("Councilmember ", ""),
    position: "Saint Paul Councilmember",
    district: rep.ward,
    email: rep.email,
    url: localData.ward?.[ward].url || '',
    image: rep.imgpath,
    selected: false
  })
};

const configureCommissionerReps = (res) => {
  const rep = res.features[0].attributes;
  return ({
    name: rep.Name,
    position: "Saint Paul Commissioner",
    district: "District " + rep.District,
    email: rep.Email,
    url: rep.Web,
    image: localData.commissioner?.[rep.District]?.image || '',
    selected: false
  })
}

export async function GET({ url: clientUrl }) {

  const y = clientUrl.searchParams.get('y');
  const x = clientUrl.searchParams.get('x');
  const arcGisSharedQuery = `query?f=json&returnGeometry=false&spatialRel=esriSpatialRelIntersects&geometry=%7B%22x%22%3A${x}%2C%22y%22%3A${y}%2C%22spatialReference%22%3A%7B%22wkid%22%3A4326%7D%7D&geometryType=esriGeometryPoint&inSR=4326&outFields=*&outSR=4326`
  const urls = [`https://www.gis.lcc.mn.gov/iMaps/districts/php/getPointData.php?lat=${y}&lng=${x}`,
  `https://arcgis.metc.state.mn.us/arcgis/rest/services/cd/metroDistricts/MapServer/7/${arcGisSharedQuery}`,
  `https://services1.arcgis.com/9meaaHE3uiba0zr8/arcgis/rest/services/Council_Ward_/FeatureServer/0/${arcGisSharedQuery}`,
  `https://maps.co.ramsey.mn.us/arcgis/rest/services/Elections/ElectionsAndPoliticalBoundaries/MapServer/11/${arcGisSharedQuery}`];

  try {
    return Promise.all(urls.map((url) => fetchUrl(url)))
      .then((res) => {
        const [stateRes, metroRes, wardRes, commissionerRes] = res;

        const stateReps = stateRes?.features && stateRes?.features[0] && configureStateReps(stateRes);
        const metroRep = metroRes?.features && metroRes?.features[0] && configureMetroReps(metroRes);
        const wardRep = wardRes?.features && wardRes?.features[0] && configureWardReps(wardRes);
        const commissionerRep = commissionerRes?.features && commissionerRes?.features[0] && configureCommissionerReps(commissionerRes);

        const allReps = [...stateReps, metroRep, wardRep, commissionerRep]
        console.log(allReps);
        return json(allReps.filter(r => r));
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.error("There has been a server problem with your fetch operation:", error);
  }
}

