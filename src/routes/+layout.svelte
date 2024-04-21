<script>
  export const prerender = true;
  import { browser } from "$app/environment";

  // const theme = {
  //   text: '#000000',
  //   background: '#FFFFFF',
  //   primary: '#ffe923',
  //   secondary: '#D9D9D9',
  //   focus: 'blue',
  // }

  let rootElement;

  // if (browser) {
  //   const root = document.querySelector(':root');
  //   console.log(getComputedStyle(root).getPropertyValue("--background"));
  //   root.style.setProperty('--background', '#04724D');
  // }

  // $: rootElement && rootElement.style.setProperty('--text', theme.text);
  // $: rootElement && rootElement.style.setProperty('--background', theme.background);
  // $: rootElement && rootElement.style.setProperty('--primary', theme.primary);
  // $: rootElement && rootElement.style.setProperty('--secondary', theme.secondary);
  // $: rootElement && rootElement.style.setProperty('--focus', theme.focus);
  // const letter = () => {
  //   return (
  //     <text>text</text>
  //   )
  // }
</script>

<svelte:head>
  <link rel="stylesheet" href="/reset.css" />
  <link rel="stylesheet" href="/global.css" />
</svelte:head>

<div bind:this={rootElement}>
  <div class="decorator">
    <div class="title">
      <h1>“Get Outta the Gully!”</h1>
      <!-- <h1 >Get Outta the Gully</h1> -->
    </div>
    <div class="arrow" />
  </div>
  <slot />
</div>

<style>
  h1 {
    font-family: var(--libre);
    font-weight: 800;
    font-size: 8rem;
    line-height: 7rem;
    color: var(--text);
    background-color: white;
    text-shadow: -4px 4px 0 var(--purple);
    text-transform: uppercase;
    transform: rotate(-2deg);
    padding: 0rem 6rem;
  }

  .title {
    padding-bottom: 1rem;
    display: flex;
    justify-content: center;
  }

  .decorator {
    width: 100%;
    padding: 2rem;
    padding-bottom: 1.8rem;
    overflow-x: clip;
    /* background-color: var(--purple); */
  }

  /* Special Shape */

  .arrow {
    position: relative;
    right: -1.25rem;
    width: calc(100vw - var(--edge));
    height: 0;
    border-bottom: 6px solid var(--purple);
    margin: 1rem 0;
    transform: rotate(-2deg);
  }

  .arrow::before {
    content: "";
    width: 0;
    height: 0;
    border-top: 1.8rem solid transparent;
    border-bottom: 1.8rem solid transparent;
    border-right: 30px solid var(--purple);
    position: absolute;
    left: -10px;
    top: -1.5rem;
  }

  @media (min-width: 600px) {
    h1{
      text-align: center;
      padding: 0rem;
    }
  }
  @media (min-width: 500px) {
    h1{
      padding: 0rem;
    }
  }
  @media (max-width: 400px) {
    h1{
      padding: 0rem;
      font-size: 7rem;
      line-height: 6rem;
    }
  }

</style>
