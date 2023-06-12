<script>
    import { onMount } from 'svelte';
    export let textSrc;
    let content;

    onMount(async () => {
        const res = await fetch(textSrc);
        content = await res.text();
    });

</script>

<style>
    .page-overview h3 {
        display: flex;
        width: 70%;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0;
        font-family: 'Lato';
        font-weight: 300;
        font-size: 25px;
        white-space: pre-wrap;
    }
    .page-overview{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 4em;
    }
</style>

<div class="page-overview">
    {#if content}
        <h3>{content}</h3>
    {:else}
        <h3>Loading...</h3>
    {/if}
</div>
