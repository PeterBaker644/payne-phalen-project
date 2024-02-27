<script>
  import ArrowIcon from "../lib/svgs/arrow-icon.svelte";
  export let text = 'contact my representatives';
</script>

<button>
  <span>{text}</span>
  <ArrowIcon dimension={24} rotate={0.5}/>
</button>

<style>
  button {
    --size: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: calc(var(--size) - 10px);
    background-color: var(--primary);
    border-radius: var(--size);
    margin-top: 0.5rem;
    
    & span{
      line-height: calc(var(--size) - 10px);
      font-family: var(--bebas);
      font-weight: 400;
      font-size: 2.4rem;
      padding-top: 3px;
    }
  }
</style>