import { writable, derived } from "svelte/store";
import { getGeocode, getState } from "../lib/api";

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
    email: "",
    phone: "",
    picture: "",
    position: "MN House - 66B",
  },
  {
    name: "Clare Oumou Verbeten",
    email: "",
    phone: "",
    picture: "",
    position: "MN House - 66",
  },
  {
    name: "Chai Lee",
    email: "",
    phone: "",
    picture: "",
    position: "Metropolitan Council - District 13",
  },
  {
    name: "HwaJeong Kim",
    email: "",
    phone: "",
    picture: "",
    position: "Saint Paul Councilmember - Ward 5",
  },
  {
    name: "Mai Chong Xiong",
    email: "",
    phone: "",
    picture: "",
    position: "Saint Paul Commissioner - District 6",
  },
]
const letterContent = {
  subject: "Reconsider the Rapid Transit Arcade Gully Stop",
  body:""
}
const selectReps = mockReps.map(rep => {return {selected: false, ...rep}});
export const page = writable('info');
export const user = writable(userInfo);
export const reps = writable(selectReps);
export const letter = writable(letterContent);
export const repSelected = derived(reps, ($reps) => $reps.some(r => r.selected));
export const letterComplete = derived(letter, ($letter) => (Object.values($letter)).every(l => l?.length > 0));
export const userComplete = derived(user, ($user) => (Object.values($user.entry)).every(l => l?.length > 0));

const repStore = () => {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    getLocation: address => {
      return getGeocode(address);
    },
    getReps: (coords) => {
      const res = getState(coords)
      //make calls to other apis here
      console.log(res);
      //transform objects
      //create list
      update(reps => res
        // write list to store
      )
    },
    clearReps: () => set([])
  }
}

export const rStore = repStore();
