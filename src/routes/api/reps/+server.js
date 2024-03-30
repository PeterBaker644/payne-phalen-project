import { json } from '@sveltejs/kit'

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
  const repDetail = (rep, position) => ({
    name: rep.name,
    position: "MN " + position,
    district: "District " + rep.district,
    image: `https://www.gis.lcc.mn.gov/iMaps/districts/images/${position}/${rep.district}`,
    url: `https://www.house.mn.gov/members/profile/${rep.memid}`,
    selected: false
  })
  return [
    repDetail(res?.features[0].properties, "House"),
    repDetail(res?.features[1].properties, "Senate")
  ]
}

const configureMetroReps = (res) => {
  const rep = res.features[0].attributes;
  return ({
    name: rep.MEMBER,
    position: "Metropolitan Councilmember",
    district: rep.MCDIST,
    email: rep.MC_EMAIL,
    image: "",
    selected: false
  })
};

const configureWardReps = (res) => {
  const rep = res.features[0].attributes;
  return ({
    name: rep.name.replace("Councilmember ", ""),
    position: "Saint Paul Councilmember",
    district: rep.ward,
    email: rep.email,
    image: rep.imgpath,
    selected: false
  })
};

const configureCommissionerReps = (res) => {
  const rep = res.features[0].attributes;
  return ({
    name: rep.Name,
    position: "Saint Paul Commissioner",
    district: rep.District,
    email: rep.Email,
    url: rep.Web,
    image: "",
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

