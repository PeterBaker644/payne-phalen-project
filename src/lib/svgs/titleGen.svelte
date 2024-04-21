<script>

  export let word;

  const letters = word.split('')
  console.log(letters)

</script>

{#each letters as letter, i} 
<svg viewbox="0 0 2.2 2.5" height='10rem' width='9rem'> 
  <text font-family="var(--libre)" font-weight="800" font-size="3" x="0" y="2.5" dx="0" dy="0" fill="#fcd2a2">{letter}</text>
  <text font-family="var(--libre)" font-weight="800" font-size="3.1" x="0" y="2.5" dx="-0.1" dy="-0.05" fill="transparent" stroke="#F9AA45" stroke-width="0.08">{letter}</text>
</svg>
{/each}