<script>
  export let title, content;
</script>

<section>
  <h2 class="font-title">{title}</h2>
  <p class="font-light">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
  </p>
</section>

<style>
section {
  display: grid;
  gap: var(--space);
}

h2 {
  font-weight: 400;
  font-size: 4rem;
  line-height: 4rem;
  height: calc(4rem - 4px);
}

p {
  font-size: 1.4rem;
  line-height: 1.4rem;
}

</style>