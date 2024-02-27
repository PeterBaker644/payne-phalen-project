<script>
  import BigButton from "./big-button.svelte";
  import Navigator from "./navigator.svelte";
  import TextBlock from "./text-block.svelte";
</script>

<div>
  <Navigator/>
  <TextBlock title={"The Project"}/>
  <TextBlock title={"The Problem"}/>
  <TextBlock title={"The Proposal"}/>
  <BigButton/>
</div>

<style>
  div {
    display: grid;
    gap: var(--space);
  }
</style>