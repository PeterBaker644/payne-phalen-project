<script>
    import SearchIcon from "$lib/svgs/search-icon.svelte";
    import Modal from "../lib/components/modal.svelte";
    import { user, userComplete, reps } from "./stores";
    import { getGeocode, getReps } from "../lib/api";
    // Needs access to reps to disable?
    // Needs to have all fields to enable search.
    $: console.log($userComplete)

    let showModal = false;
    let isError = false;

    const onSubmit = (e) => {
      //validation here
      getGeocode($user.entry.address).then(({location, address}) => {
        $user = { ...$user,
          coords: location,
          entry: { ...$user.entry, address},
          computedAddress: computeAddress(address)
        };
        showModal = true;
      }).catch((error) => {
        isError = true;
        showModal = true
      });
    }

    const onConfirm = (coords) => {
      // either make the load element here, or set step 2 to show.
      showModal = false;
      getReps(coords).then(res => {
        reps.update(() => res);
        console.log(res);
      })
      // console.log("Test is a test");
    }

    const computeAddress = (address) => {
      const cA = address.split(",");
      if (cA.length !== 4) {
        throw Error
      } else {
        return {
          street: cA[0],
          city: cA[1],
          state: cA[2],
          zip: cA[3]
        }
      }
    }

</script>

<h3>Step 1 - Enter Your Info:</h3>

<p class="font-light">No information entered into this website is stored or used for any purpose other than searching for and contacting your representatives.</p>

<form action="" method="get" on:submit|preventDefault={onSubmit}>
  <div class="form-box">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" required bind:value={$user.entry.name}/>
  </div>
  <div class="form-box">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" required bind:value={$user.entry.email}/>
  </div>
  <div class="form-box">
    <label for="address">Address</label>
    <input type="address" name="address" id="address" required bind:value={$user.entry.address}/>
  </div>
  <div class="form-box">
    <button class="small-button" type="submit" disabled={!$userComplete}>
      <SearchIcon dimension={16}/>
      <span>Find My Representatives</span>
    </button>
  </div>
</form>

<Modal headerText={"Confirm Your Address"} exitText={isError ? "Go Back" : "Cancel"} bind:showModal>
  <div class='modal-text' slot='content'>
    <!-- We need to throw and handle and error if the user isn't submitting a MN address -->
    {#if isError} 
      <p>A matching Minnesota address could not be found at this time.</p>
    {:else}
      <p>The following address will be used to retrieve a list of your representatives:</p>
      <div class='address'>
          <p>{$user.entry.address}</p>
      </div>
    {/if}
  </div>
  {#if !isError}
    <button on:click={() => {onConfirm($user.coords)}} class="small-button">Confirm</button>
  {/if}
</Modal>

<style>
  .modal-text {
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .address {
    width: fit-content;
    font-family: var(--oswald);
    font-size: 1.6rem;
    padding: var(--gap);
    background-color: #ECECEC;
    border-radius: 1.25rem;
    margin: var(--space);
    & p {
      width: auto;
    }
  }
  
  span {
    padding-top: 4px;
  }

  form { & button {
    margin-top: 1rem;
  }}
</style>