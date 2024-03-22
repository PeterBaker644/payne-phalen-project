<script>
  import Person from "$lib/components/person.svelte";
  import { reps } from "./stores";
</script>

<h3 style={`${!$reps?.length && "color: var(--secondary)"}`}>Step 2 - Pick Your Representatives:</h3>
<p class="font-light">Check all representatives you would like to contact. If you do not live in Saint Paul, only a few representatives may be available.</p>

{#if $reps?.length}
  {#each $reps as person}
    <Person bind:person/>
  {/each}
{/if}
