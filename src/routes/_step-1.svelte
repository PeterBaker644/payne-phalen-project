<script>
    import SearchIcon from "$lib/svgs/search-icon.svelte";
    import {user} from "./stores";
    // Needs access to reps to disable?
    // Needs to have all fields to enable search.
</script>

<h3>Step 1 - Enter Your Info:</h3>

<p class="font-light">No information entered into this website is stored or used for any purpose other than searching for and contacting your representatives</p>

<form action="" method="get">
  <div class="form-box">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" required bind:value={$user.name}/>
  </div>
  <div class="form-box">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" required bind:value={$user.email}/>
  </div>
  <div class="form-box">
    <label for="address">Address</label>
    <input type="address" name="address" id="address" required bind:value={$user.address}/>
  </div>
  <div class="form-box">
    <button class="submit-button" type="submit">
      <SearchIcon dimension={16}/>
      <span>Find My Representatives</span>
    </button>
  </div>
</form>

<style>

  p {
    line-height: 1rem;
  }

  .form-box {
    display: grid;
    outline: none;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: var(--gap)
  }

  input {
    border: 1px solid black;
    padding: .7rem;
    font-family: var(--roboto);
    font-size: 1.4rem;
    margin: 1px 0;
  }

  span {
    padding-top: 3px;
  }

  button {
    margin-top: 1rem;
  }

  input:focus {
    outline: none;
    border: 2px solid blue;
    margin: 0;
  }

  input:-webkit-autofill { 
    -webkit-background-clip: text;
  }
</style>