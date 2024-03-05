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
      <label for="body">Dear [Chosen Representative],</label>
      <textarea name="body" id="body" rows="6" required bind:value={$letter.body}/> <!-- Need to save to local storage-->
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