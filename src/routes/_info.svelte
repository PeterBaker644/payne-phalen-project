<script>
  import { copy } from "$lib/copy";
  import TextBlock from "../lib/components/text-block.svelte";
</script>

<div class="clipped-background">
  <TextBlock title={"The Project"} tilt={true} content={copy.project} />
</div>
<div class="edge">
<TextBlock title={"The Problem"} content={copy.problem} />
</div>
<div class="clipped-background">
  <TextBlock title={"The Proposal"} tilt={true} content={copy.solution} />
</div>
<div class="edge font-light spaced">
  <h2 class="font-title">WHY IT MATTERS…</h2>
  <p>We need better transit. Our neighborhoods deserve it.</p>
  <li><b>CONVENIENCE: </b>We need transit. We want transit. We expect transit to
  meet us where we are, not way far away, somewhere else. Connectivity
  matters.
  </li>
  <li><b>SAFETY: </b>No one wants to go off in a field to stand alone and wait. There’s
  safety up on the street where we can all see and be seen.</li>
  <li><b>ACCESSIBILITY: </b>Not everyone has an easy time walking. Arcade Station
  needs to be in a place where everybody can there easily, not just young
  and able-bodied people. Everybody. Every Body!</li>
  <li><b>CLEAN AIR: </b>We’re sick of pollution. Pollution is making us sick. We’re
  excited about electric buses, but if Arcade Station is inaccessible or unsafe,
  it discourages using transit and it encourages people to keep driving (and
  keep polluting)</li>
  <li><b>WELL-CONNECTED = GENERATIVE: </b>Arcade Station can generate business
  improvements and spur new housing too – but only if it’s integrated into
  the neighborhood fabric.</li>
</div>
<div class="clipped-background">
  <TextBlock title={'LOOKING AT LONG TERM'} content={copy.more}/>
</div>
<div class="edge font-light spaced" style="text-align: center">
  <b>Help us make our voices heard, contact your reps today!</b>
</div>

<style>
 .spaced {
  display: grid;
  gap: 1rem;
  margin: 2rem 0rem;
 }
</style>