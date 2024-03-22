export async function getGeocode(address) {
  const encodedAddress = encodeURI(address);
  const url = `https://arcgis.metc.state.mn.us/arcgis/rest/services/composite/GeocodeServer/findAddressCandidates?SingleLine=${encodedAddress}&f=json&outSR=4326`

  try {
    const res = await fetch(url);

    if (!res.ok) {
      switch (res.status) {
        case 400: /* Handle */ break;
        case 401: /* Handle */ break;
        case 404: /* Handle */ break;
        case 500: /* Handle */ break;
      }
      throw new Error("Network response was not OK");
    }

    const type = await res.headers.get("content-type");
    if (!type || !type.includes("application/json")) {
      throw new TypeError("Oops, we haven't got JSON!");
    }

    const data = await res.json()

    if (data?.candidates && data.candidates[0]) {
      console.log("geoCode response: ", data)
      // returns best match
      return data.candidates[0];
    } else {
      throw new Error("No candidates found");
    }
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

export async function getState(crds){
  const url = `https://www.gis.lcc.mn.gov/iMaps/districts/php/getPointData.php?lat=${crds.y}&lng=${crds.x}`
  try {
    const res = await fetch(url, {
      mode: 'cors',
      headers: new Headers({
        'Access-Control-Allow-Origin': 'http://localhost:5173/',
        'Access-Control-Allow-Credentials': 'true'
      })
    });

    if (!res.ok) {
      switch (res.status) {
        case 400: /* Handle */ break;
        case 401: /* Handle */ break;
        case 404: /* Handle */ break;
        case 500: /* Handle */ break;
      }
      throw new Error("Network response was not OK");
    }

    const type = await res.headers.get("content-type");
    if (!type || !type.includes("application/json")) {
      throw new TypeError("Oops, we haven't got JSON!");
    }

    const data = await res.json()

    if (data?.features && data?.features[0]) {
      // return the two candidates with info populated.
      const repDetail = (rep, position) => { return {
        name: rep.name,
        position: "MN " + position,
        district: "District " + rep.district,
        image: `https://www.gis.lcc.mn.gov/iMaps/districts/images/${position}/${rep.district}`,
        url: `https://www.house.mn.gov/members/profile/${rep.memid}`
      }}
      const stateReps = {
        stateHouse: repDetail(data?.features[0].properties, "House"),
        stateSenate: repDetail(data?.features[1].properties, "Senate"),
      }
      console.log("State Reps: ", stateReps);
      return stateReps;
    }
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}


async function getCounty(location){
  
}

async function getCity(location){

}

async function getMetro(location){
  
}

const baseAddress3 = `https://maps.co.ramsey.mn.us/arcgis/rest/services/Elections/ElectionsAndPoliticalBoundaries/MapServer/11/query?f=json&returnGeometry=false&spatialRel=esriSpatialRelIntersects&geometry=%7B%22x%22%3A${-93.068459038089088}%2C%22y%22%3A${44.987262045778905}%2C%22spatialReference%22%3A%7B%22wkid%22%3A4326%7D%7D&geometryType=esriGeometryPoint&inSR=4326&outFields=*&outSR=4326`