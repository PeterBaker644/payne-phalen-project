<script>
  import Arrow from "$lib/svgs/arrow-icon.svelte";
    import Microphone from "../lib/components/microphone.svelte";
  import { page } from "./stores";
  $: selected = (p) => (p === $page ? "selected" : "");

  const setAngle = (p) => (p === "info" ? 270 : p === "event" ? 0 : 180);
</script>

<div class="navigator" id="navigator">
  <div class="section">
    <button on:click={() => ($page = "event")} class={selected("event")}
      >The Event</button
    >
    <div class="center">
      <p class="font-small">You Are Here</p>
      <Arrow dimension={20} rotate={setAngle($page)} />
    </div>
    <button on:click={() => ($page = "contact")} class={selected("contact")}
      >Contact Reps</button
    >
  </div>
  <div class="section centered">
    <button on:click={() => ($page = "info")} class={`${selected("info")}`}
      >The Info</button
    >
  </div>
  <Microphone/>
</div>


<style>
  .navigator {
    position: relative;
    padding-top: 2rem;
    overflow-x: clip;
  }
  .section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;

    &.centered {
      padding-bottom: 1rem;
    }
  }

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 0.5rem;
  }

  button {
    display: flex;
    justify-content: center;
    width: 13rem;
    line-height: var(--size);
    height: calc(var(--size) - 2px);
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
