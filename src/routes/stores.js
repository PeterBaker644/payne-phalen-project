import { writable, derived } from "svelte/store";

const userInfo = {
  name:"",
  email:"",
  address:""
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

const selectReps = mockReps.map(rep => {return {selected: false, ...rep}});

export const user = writable(userInfo);
export const reps = writable(selectReps);
export const selected = derived(reps, ($reps) => $reps.some(r => r.selected));
