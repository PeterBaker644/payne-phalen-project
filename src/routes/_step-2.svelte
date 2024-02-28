<script>
  import Person from "$lib/components/person.svelte";
  import { reps } from "./stores";
</script>

<h3 style={`${!$reps?.length && "color: var(--secondary)"}`}>Step 2 - Pick Your Representatives:</h3>

{#if $reps?.length}
  {#each $reps as person}
    <Person bind:person/>
  {/each}
{/if}
