<script>
  import { repSelected as selected, user, letter, reps } from './stores'

const copy = async (reps) => {
    const repEmails = reps.filter(r=>r.email && r.email.length > 0).reverse().map(r => `${r.email}`);
    console.log("Copying Emails")
    try {
        await navigator.clipboard.writeText(repEmails);
    } catch (error) {
        console.error(error.message);
    }
}

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

  <button class="small-button" type="button" on:click={() => copy($reps)}>
    <span>Copy Emails To Clipboard</span>
  </button>
{/if}

<style>
  p {
    font-family: var(--oswald);
    font-size: 1.4rem;
    line-height: 1.4rem;
  }
</style>