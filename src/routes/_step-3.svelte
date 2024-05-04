<script>
  import { repSelected as selected, user, letter } from './stores'
</script>

<h3 style={$selected || "color: var(--secondary)"}>Step 3 - Make Your Voice Heard:</h3>

{#if $selected}
  <form action="" method="get">
    <div class="form-box">
      <label for="subject">Subject:</label>
      <input type="text" name="subject" id="subject" required bind:value={$letter.subject}/>
    </div>
    <div class="form-box">
      <label for="body">Dear Elected Official,</label>
      <textarea name="body" id="body" rows="60" required bind:value={$letter.body}/> <!-- Need to save to local storage-->
    </div>
    <p>Sincerely,</p>
    <p>{$user.entry.name || "[Your Name Here]"}</p>
    <p>{$user.entry.address || ""}</p>
    <p>{$user.entry.email || ""}</p>
  </form>
{/if}

<style>
  p {
    font-family: var(--oswald);
    font-size: 1.4rem;
    line-height: 1.4rem;
  }
</style>