<script lang="ts">
  import { SubgraphClient, DripsClient, formatSplits } from 'drips-sdk';
  import type { ContractReceipt, ContractTransaction } from 'ethers';
  import { createEventDispatcher } from 'svelte';

  export let dripsClient: DripsClient;
  export let subgraphClient: SubgraphClient;

  const dispatch = createEventDispatcher<{updated: void}>();

  const splitsInputs = [
    {address: '', percent: null as number},
    {address: '', percent: null as number},
    {address: '', percent: null as number},  
  ];

  let started = false;
  let transaction: ContractTransaction;
  let txReceipt: ContractReceipt;
  
  async function updateSplitsWithInputs () {
    started = false;
    transaction = null;
    txReceipt = null;
  
    const formattedReceivers = formatSplits(splitsInputs)
    const currentReceivers = await subgraphClient.getSplitsBySender(dripsClient.address)
    
    started = true;
    transaction = await dripsClient.updateUserSplits(currentReceivers, formattedReceivers)
    txReceipt = await transaction.wait()

    dispatch('updated');
  }

</script>

<h3>Splits Entries (address / percent):</h3>

<div class="inputs">
  {#each splitsInputs as splitsInput, i}
    <div class="input-row">
      <span>{i+1}.</span>
      <input size="46" type="text" bind:value={splitsInput.address}/>
      <input type="number" bind:value={splitsInput.percent}/>
    </div>
  {/each}
</div>

<div class="button-container">
  <button on:click={updateSplitsWithInputs} disabled={!dripsClient?.connected}>Update Splits</button>
  <div class="status">
    {#if txReceipt}
      Updated!
    {:else if transaction}
      Awaiting confirmations
    {:else if started}
      Confirm the transaction
    {/if}
  </div>
</div>

<style>
  .status {
    color: #333;
  }
  .inputs {
    display: grid;
    grid-template-columns: 15px auto 100px;
    grid-gap: 10px;
    margin: 10px 0;
  }
  .input-row {
    display: contents;
  }
  .input-row > * {
    display: flex;
    align-items: center;
    margin: 0;
  }
  .button-container {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
</style>
