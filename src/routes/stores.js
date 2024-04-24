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
