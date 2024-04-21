<script>
  export let title, content, tilt;
</script>

<section style={`transform: rotate(${tilt && (Math.random() * 2) - 1}deg)`}>
  <h2 class="font-title">{title}</h2>
  <p class="font-light">
    {content}
  </p>
</section>

<style>

section {
  display: grid;
  gap: var(--space);
  background-color: white;
  padding: 1rem;
  ;
}

p {
  font-size: 1.5rem;
}

</style>