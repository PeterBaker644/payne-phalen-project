<script>
	import Arrow from '$lib/svgs/arrow-icon.svelte';
  import { page } from './stores';
  $: selected = (p) => p === $page ? 'selected' : ''; 

</script>

<div class="navigator">
  <button on:click={() => $page = "info"} class={selected('info')}>The Info</button>
    <div class="center">
      <p class="font-small">You Are Here</p>
      <Arrow dimension={20} rotate={$page === "info" ? 0 : 180}/>
    </div>
  <button on:click={() => $page = "contact"} class={selected('contact')}>Contact Reps</button>
</div>

<style>
  :root {
    --size: 3.5rem;
  }

  .navigator {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1.5rem;
  }

  button {
    display: flex;
    justify-content: center;
    width: 13rem;
    line-height: var(--size);
    height: calc(var(--size) - 3px);
    border-radius: var(--size);
    background-color: var(--secondary);
    font-family: var(--bebas);
    font-weight: 400;
    font-size: 2rem;
    
    &.selected {
      background-color: var(--primary);
    }
  }

</style>