<script>
  import { selected } from './stores'
  $: console.log($selected)
  import {user} from "./stores";
  const title = "Reconsider the Rapid Transit Arcade Gully Stop"
</script>

<h3 style={$selected || "color: var(--secondary)"}>Step 3 - Make Your Voice Heard:</h3>

{#if $selected}
  <form action="" method="get">
    <div class="form-box">
      <label for="subject">Subject:</label>
      <input type="text" name="subject" id="subject" required value={title}/>
    </div>
    <div class="form-box">
      <label for="body">Dear [Chosen Representative],</label>
      <textarea name="body" id="body" rows="6" required value=""/> <!-- Need to save to local storage-->
    </div>
    <p>Sincerely,</p>
    <p>{$user.name || "[Your Name Here]"}</p>
  </form>
{/if}

<style>
  p {
    font-family: var(--oswald);
    font-size: 1.4rem;
    line-height: 1.4rem;
  }
</style>