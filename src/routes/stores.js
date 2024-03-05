import { writable, derived } from "svelte/store";
import { getGeocode } from "../lib/api";

const userInfo = {
  name:"",
  email:"",
  address:""
}
const userLocation = {};
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

export const location = writable({});
export const page = writable('info');
export const user = writable(userInfo);
export const reps = writable(selectReps);
export const letter = writable(letterContent);
export const repSelected = derived(reps, ($reps) => $reps.some(r => r.selected));
export const letterComplete = derived(letter, ($letter) => (Object.values($letter)).every(l => l?.length > 0));
export const userComplete = derived(user, ($user) => (Object.values($user)).every(l => l?.length > 0));


  const { subscribe, set, update } = writable([]);
  
  export const repStore = {
    subscribe,
     getLocation: address => {
      getGeocode(address).then(({candidates}) => {
        if (candidates.length > 0) {
          $user.address = candidates[0];
          $location = candidates[0].location;
          console.log($location)
        } 
      })
    },
    getReps: () => {
      //make calls to other apis here
      //transform objects
      //create list
      update(reps =>
        // write list to store
        {}
      )
    },
    clearReps: () => set([])
  }


