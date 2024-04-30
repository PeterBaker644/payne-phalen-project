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

export async function getReps(crds){
  const url = `/api/reps?y=${crds.y}&x=${crds.x}`;

  try {
    return await fetch(url).then(res => res.json()).then(reps => {
      console.log("These are the reps: ", reps);
      return reps
    });
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}