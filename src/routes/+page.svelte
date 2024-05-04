<script>
  import Step1 from "./_step-1.svelte";
  import Step2 from "./_step-2.svelte";
  import Step3 from "./_step-3.svelte";
  import Navigator from "./_navigator.svelte";
  import BigButton from "$lib/components/big-button.svelte";
  import { page, repSelected, letterComplete, reps, letter, user} from './stores';
  import Event from "./_event.svelte";
  import Footer from "../lib/components/footer.svelte";
  import Info from "./_info.svelte";

  $: navToContact = () => $page = 'contact';
  $: navToInfo = () => $page = 'info';

  const composeMessage = (reps, letter, user) => {
    const repEmailsCommas = reps.filter(r=>r.email && r.email.length > 0).reverse().map(r => ` <${r.email}>`) + `; <district5@paynephalen.org>`;
    const repEmails = repEmailsCommas.toString().replace(',',';');
    const href = `mailto:?to=${encodeURIComponent(repEmails)}&subject=${encodeURIComponent(letter.subject)}&body=Dear%20Elected%20Official%2C%0A%0A${encodeURIComponent(letter.body)}%0A%0ASincerely%2C%0A%0A${encodeURIComponent(user.entry.name)}%0A${encodeURIComponent(user.entry.address)}%0A${encodeURIComponent(user.entry.email)}`
    console.log(repEmails.toString());
    console.log(href);
    window.open(href);
  }

</script>

<div class="box">
  <Navigator/>
  {#if $page === 'event'}
    <Event/>
    <BigButton message={"Learn about the issues"} bind:page={$page} enable bind:onPress={navToInfo}/>
  {:else if $page === 'info'}
    <Info/>
    <BigButton message={"Contact my representatives"} bind:page={$page} enable bind:onPress={navToContact}/>
  {:else}
  <div class="spaced">
    <Step1/>
    <hr/>
    <Step2/>
    <hr/>
    <Step3/>
  </div>
    <BigButton message={"Send my message"} bind:page={$page} enable={$repSelected && $letterComplete} onPress={() => composeMessage($reps, $letter, $user)}/>
  {/if}
  </div>
 <Footer/>

<style>
  div {
    display: grid;
  }
  .box {
    display: flex;
    flex-direction: column;
    background-color: white;
  }

  .spaced {
    display: grid;
    gap: 2rem;
    padding: 2rem
  }

</style>