<script>
  import { selected } from './stores'
  $: console.log($selected)
</script>

<h3 style={$selected || "color: var(--secondary)"}>Step 3 - Make Your Voice Heard:</h3>

