<svelte:head>
  <link rel="stylesheet" href="/reset.css">
  <link rel="stylesheet" href="/global.css">
</svelte:head>

<script>
  
</script>

<div class="container">
  <div class="title">
    <h1>Get Outta the Gully</h1>
    <div class="arrow"/>
  </div>
  <slot/>
</div>

<style>
  h1 {
    font-family: var(--bebas);
    font-weight: 400;
    font-size: 11rem;
    line-height: 9rem;
  }
  
  /* Special Shape */

  .arrow {
    position: relative;
    right: -1.2s5rem;
    width: calc(100vw - var(--edge));
    height: 0;
    border-bottom: 6px solid var(--text);
    margin: 2rem 0;
  }

  .arrow::before {	
    content: '';
    width: 0; 
    height: 0; 
    border-top: 1.8rem solid transparent;
    border-bottom: 1.8rem solid transparent;
    border-right: 30px solid var(--text);
    position: absolute;
    left: -10px;
    top: -1.5rem;
  }


</style>