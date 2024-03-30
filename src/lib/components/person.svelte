<script>
  export let {name, position, district, selected} = person;
</script>

<div class="person">
  <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" x="0" y="0" fill={!selected ? "var(--secondary)" : "var(--primary)" } />
  </svg>
  <div class="text">
    <p class="name">{name}</p>
    <p>{position} - {district}</p>
  </div>
  <!-- <hr/> -->
  <input type="checkbox" name="include" bind:checked={selected}>
</div>

<style>

.person {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space);
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
  box-shadow: inset 0 0 0 1px var(--text);
}

[type=checkbox]:checked {
  background-color: currentcolor;
}

[type=checkbox]:checked::before {
  box-shadow: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E %3Cpath d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z' fill='%23ffffff' /%3E %3C/svg%3E");
}


</style>