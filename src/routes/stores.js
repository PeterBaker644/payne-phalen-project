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

const subjects = [
  "Urgent Appeal: Move the Arcade Street BRT Station back up to Arcade Street!",
  "Connectivity matters: Move our BRT station back to Arcade!",
  "No one wants to stand alone in a field to wait for the bus. Move it back to Arcade!",
  "Locate the Arcade Station for Everybody. Every! Body!",
  "Well-connected = Generative: Move our BRT station back to Arcade!",
  "We’re sick of pollution. Move our BRT station back to Arcade!",
  "My urgent plea for the Arcade Station!",
  "Please help us move the Arcade Street BRT Station back up to Arcade Street!",
  "Get Outta the Gully! Move the Arcade Street BRT Station back up to Arcade Street!",
]

const letterContent = {
  subject: subjects[Math.floor(Math.random() * 9)],
  body: 
`I am writing to express my deep concern and frustration regarding the location where MetroTransit is intending to locate the Arcade Street Station on the Purple Line Bus Rapid Transit Line. They are planning to put our new transit station far away from Arcade Street – in the middle of a field, behind a retaining wall, down in a gully! The location that project staff insist on is far away from our businesses, far away from residential neighborhoods, and far away from community centers. For eighteen months, community members have voiced our concern, alarm, and outrage to no avail. Project staff remain entrenched, and they repeatedly disrespect us by insisting that ridership is not their top priority for the Purple Line. It’s really unbelievable! The intransigence of the Project staff raises serious concerns about the transparency and inclusivity of the decision-making process. And their tin ear raises serious concerns about missed opportunities for this $400 million investment of public money.

Here’s why it matters. We need better transit. We want better transit. Our neighborhoods deserve it.
 - Convenience: We expect transit to meet us where we are, not far away. Connectivity matters.
 - Safety: No one wants to go off in a field to stand alone and wait. There’s safety up on the street where we can all see and be seen.
 - Accessibility: Not everyone has an easy time walking. It needs to be in a place where everybody can get there easily, not just young and able-bodied people. Everybody. Every! Body!
 - Well-connected = Generative: If the station is up on the street, integrated into the neighborhood fabric, it will generate business improvements and spur development of affordable housing in our community. If the station is out in a field, developers won’t hit the opportunity. And we’ll miss out.
 - Clean Air: We’re sick of pollution. Pollution is making us sick. We’re excited about electric buses, but the community knows the proposed location is inaccessible, unsafe, and won’t be used. So, the environmental benefits will be undermined, tailpipe pollution will continue to rise, and our residents will continue to bear the unjust and inequitable effects of air pollution.
  
I respectfully request your immediate intervention in helping me and all of your constituents to ensure that all public investments in the Purple Line serve the best interests of our residents, and our community organizations, and that they reflect the higher vision for a just, robust, and thriving St. Paul. The community’s unwavering opposition to the current plan demands immediate attention and I beg you to use your voice to elevate our voices by ensuring that MetroTransit will make ridership their top priority and move this station back to Arcade Street, back to where it was originally planned for in Ramsey County’s Environmental Assessment Worksheet (EAW).
  
Thank you for your respect and attention to this matter. I look forward to hearing about the steps you and your colleagues will take to rectify this matter and to ensure a fair and inclusive decision-making process for our communities going forward.`
}

export const page = writable('event');
export const user = writable(userInfo);
export const reps = writable([]);
export const letter = writable(letterContent);

export const repSelected = derived(reps, ($reps) => $reps.some(r => r.selected));
export const letterComplete = derived(letter, ($letter) => (Object.values($letter)).every(l => l?.length > 0));
export const userComplete = derived(user, ($user) => (Object.values($user.entry)).every(l => l?.length > 0));
