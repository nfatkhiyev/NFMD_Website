<svelte:head>
    <title>NFMD | Newsletter</title>
</svelte:head>

<script>
    import { construct_svelte_component_dev } from "svelte/internal";
    /** @type {import('./$types').PageData} */
    export let data;
    import Banner from "../_components/_banner/_banner.svelte";
    import NewsletterCard from "../_components/_newsletter_card/_newsletter_card.svelte";
</script>

<div class="page-container">
    <Banner title="Newsletter" />
    {#each data.posts as post}
        <NewsletterCard postData={post} />
    {/each}
</div>
