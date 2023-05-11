<svelte:head>
    <title>NFMD | About</title>
</svelte:head>

<script>
    import Banner from "../_components/_banner/_banner.svelte";
    import LeftSplit from "../_components/_left_split/_left_split.svelte";
    import RightSplit from "../_components/_right_split/_right_split.svelte";
    import MobileSplit from "../_components/_mobile_split/_mobile_split.svelte";
    import PageOverview from "../_components/_page_overview/_page_overview.svelte";

    let innerWidth;
</script>

<svelte:window bind:innerWidth/>

<div class="page-container">
    <Banner title={"About"}/>
    <PageOverview textSrc={"/page_content/about/about_overview.txt"} />
    {#if innerWidth<1140}
        <MobileSplit title={"Nate Fatkhiyev"} textSrc={"/page_content/about/nate_fatkhiyev_overview.txt"} imgSrc={"/images/nate_headshot_orig.jpeg"} imgAlt={"Nate Fatkhiyev"} />
        <MobileSplit title={"Doro Guizar"} textSrc={"/page_content/about/about_overview.txt"} imgSrc={"/images/doro_guizar_headshot.jpeg"} imgAlt={"Doro Guizar"} />
    {:else}
        <RightSplit title={"Doro Guizar"} textSrc={"/page_content/about/doro_guizar_overview.txt"} imgSrc={"/images/doro_guizar_headshot.jpeg"} imgAlt={"Doro Guizar"} />
        <LeftSplit title={"Nate Fatkhiyev"} textSrc={"/page_content/about/nate_fatkhiyev_overview.txt"} imgSrc={"/images/nate_headshot_orig.jpeg"} imgAlt={"Nate Fatkhiyev"} />
    {/if}
</div>
