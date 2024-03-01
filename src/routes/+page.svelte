<script>
  import Step1 from "./_step-1.svelte";
  import Step2 from "./_step-2.svelte";
  import Step3 from "./_step-3.svelte";
  import Navigator from "./_navigator.svelte";
  import BigButton from "$lib/components/big-button.svelte";
  import TextBlock from "$lib/components/text-block.svelte";

  const page = 'contact';
</script>

<div>
  <Navigator/>
  {#if page === 'info'}
    <TextBlock title={"The Project"}/>
    <TextBlock title={"The Problem"}/>
    <TextBlock title={"The Proposal"}/>
  {:else}
    <Step1/>
    <hr/>
    <Step2/>
    <hr/>
    <Step3/>
  {/if}
  <BigButton {page}/>
</div>


<style>
  div {
    display: grid;
    gap: var(--space);
  }
</style>