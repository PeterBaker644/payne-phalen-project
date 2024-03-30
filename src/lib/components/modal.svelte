<script>
	export let showModal; // boolean
  export let exitText = "Close Modal";
  export let headerText;
	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) {
    dialog.showModal()
  } else if (dialog && !showModal) {
    dialog.close();
  }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
    <div>
      <h3>{headerText}</h3>
      <hr/>
    </div>
		<slot name="content"/>
    <div class='buttons'>		
      <!-- svelte-ignore a11y-autofocus -->
      <slot/>
      <button class="small-button" autofocus on:click={() => dialog.close()}>{exitText}</button>
    </div>
	</div>
</dialog>

<style>
  h3 {
    padding-bottom: var(--space);
  }
	dialog {
    margin: auto;
		border-radius: 3.5rem;
		border: none;
		padding: var(--edge);
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
	}
	dialog > div {
    display: grid;
    gap: var(--space);
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--gap);

    & :nth-child(2) {
      background: none;
      outline: 1px black solid;
      color: black;
      height: calc(var(--size) - 2px);
    }
    & button {
    padding-top: 4px;
  }
  }
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
