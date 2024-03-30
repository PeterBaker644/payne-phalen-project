import { json } from '@sveltejs/kit'

export async function GET({ url: clientUrl }){

  const y = clientUrl.searchParams.get('y');
  const x = clientUrl.searchParams.get('x');
  const arcGisSharedQuery = `query?f=json&returnGeometry=false&spatialRel=esriSpatialRelIntersects&geometry=%7B%22x%22%3A${x}%2C%22y%22%3A${y}%2C%22spatialReference%22%3A%7B%22wkid%22%3A4326%7D%7D&geometryType=esriGeometryPoint&inSR=4326&outFields=*&outSR=4326`
  const stateUrl = `https://www.gis.lcc.mn.gov/iMaps/districts/php/getPointData.php?lat=${y}&lng=${x}`
  const metroUrl = `https://arcgis.metc.state.mn.us/arcgis/rest/services/cd/metroDistricts/MapServer/7/${arcGisSharedQuery}`;
  const wardsUrl = `https://services1.arcgis.com/9meaaHE3uiba0zr8/arcgis/rest/services/Council_Ward_/FeatureServer/0/${arcGisSharedQuery}`;
  const commissionerUrl = `https://maps.co.ramsey.mn.us/arcgis/rest/services/Elections/ElectionsAndPoliticalBoundaries/MapServer/11/${arcGisSharedQuery}`;

  try {
    const res = await fetch(stateUrl);

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
        url: `https://www.house.mn.gov/members/profile/${rep.memid}`,
        selected: false
      }}
      const stateReps = [
        repDetail(data?.features[0].properties, "House"),
        repDetail(data?.features[1].properties, "Senate")
      ]
      console.log("State Reps: ", stateReps);
      return json(stateReps);
    }
  } catch (error) {
    console.error("There has been a server problem with your fetch operation:", error);
  }
}

