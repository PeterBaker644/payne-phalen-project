import { json } from '@sveltejs/kit'

export async function GET({ url: clientUrl }){

  console.log(clientUrl.searchParams)
  const y = clientUrl.searchParams.get('y');
  const x = clientUrl.searchParams.get('x');
  const serverUrl = `https://www.gis.lcc.mn.gov/iMaps/districts/php/getPointData.php?lat=${y}&lng=${x}`

  try {
    const res = await fetch(serverUrl);

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

