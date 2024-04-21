import { writable, derived } from "svelte/store";

const userInfo = {
  entry: {
    name: "",
    email: "",
    address: "",
  },
  computedAddress: {
    street: "",
    city: "",
    state: "",
    zip: ""
  },
  coords: {},
}

const mockReps = [
  {
    name: "Atheena Hollins",
    picture: "",
    position: "MN House",
    district: "District 66B"
  },
  {
    name: "Clare Oumou Verbeten",
    picture: "",
    position: "MN Senate",
    district: "District 66"
  },
  {
    name: "Chai Lee",
    picture: "",
    position: "Metropolitan Council",
    district: "District 13"
  },
  {
    name: "HwaJeong Kim",
    picture: "",
    position: "Saint Paul Councilmember",
    district: "Ward 5"
  },
  {
    name: "Mai Chong Xiong",
    picture: "",
    position: "Saint Paul Commissioner",
    district: "District 6"
  },

]
const letterContent = {
  subject: "Reconsider the Rapid Transit Arcade Gully Stop",
  body: ""
}

export const page = writable('event');
export const user = writable(userInfo);
export const reps = writable([]);
export const letter = writable(letterContent);

export const repSelected = derived(reps, ($reps) => $reps.some(r => r.selected));
export const letterComplete = derived(letter, ($letter) => (Object.values($letter)).every(l => l?.length > 0));
export const userComplete = derived(user, ($user) => (Object.values($user.entry)).every(l => l?.length > 0));
