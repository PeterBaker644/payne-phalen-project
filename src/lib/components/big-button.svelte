<script>
  import ArrowIcon from "$lib/svgs/arrow-icon.svelte";
  export let page, enable, onPress, message;
</script>

<button type="button" disabled={!enable} on:click={() => {
    if (onPress) {
      onPress()
      console.log("test");
    } 
    document.getElementById('navigator').scrollIntoView()
  }}>
  <span>{message}</span>
  <ArrowIcon dimension={24} rotate={180}/>
</button>

<style>
  button {
    --size: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: calc(var(--size) - 10px);
    border-radius: var(--size);
    margin: 0rem 2rem 2rem 2rem;
    
    
    & span{
      line-height: calc(var(--size) - 10px);
      font-family: var(--bebas);
      font-weight: 400;
      font-size: 2.4rem;
      padding-top: 3px;
    }
  }
  
</style>