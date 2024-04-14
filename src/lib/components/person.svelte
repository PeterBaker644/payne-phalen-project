<script>
  import LinkIcon from "../svgs/link-icon.svelte";
  export let person;
</script>

<div class="person">

  {#if person?.image}
    <img src={person.image} alt={`Portrait of ${person.name}`}>
  {:else}
    <svg width="8rem" height="8rem" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" x="0" y="0" fill={!person.selected ? "var(--secondary)" : "var(--primary)" } />
    </svg>
  {/if}
  <div class="text">
    <div class="title">
      <p class="name" style="padding: 4px 0px">{person.name}<b>{!person.email ? "*" : ""}</b></p>
      <a href={person.url} target="_blank"><LinkIcon dimension={24} color={"var(--focus)"}/></a>
    </div>
    <p>{person.position} - {person.district}</p>
  </div>
  <!-- <hr/> -->
  {#if person.email}
    <input type="checkbox" name="include" bind:checked={person.selected}>
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--tertiary)" class="bi bi-slash-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.646-2.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708z"/>
    </svg>
  {/if}
</div>

<style>

.person {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space);
  & img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
  }
}

.text {
  flex-grow: 1;
  display: grid;
  font-family: var(--roboto);
  font-size: 1.2rem;
  font-weight: 300;
  & .name {
    font-family: var(--oswald);
    font-size: 1.8rem;
    font-weight: 400;
  }

  & .title {
    display: flex;
    align-items: center;
    gap: 0.5rem
  }
}

/* hr {
  flex-grow: 1;
  margin:  2rem;
} */

input[type=checkbox] {
  border-radius: 0;
  width: 3.2rem;
  height: 3.2rem;
  outline: 0;
  border: 0;
  border-radius: 50%;
  -webkit-appearance: none;
  background: none;
}

[type=checkbox]::before {
  content: "";
  color: transparent;
  display: block;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  border: 0;
  background-color: transparent;
  background-size: contain;
  box-shadow: inset 0 0 0 1px var(--tertiary);
}

[type=checkbox]:checked {
  background-color: var(--focus);
}

[type=checkbox]:checked::before {
  box-shadow: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E %3Cpath d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z' fill='%23ffffff' /%3E %3C/svg%3E");
}



</style>