<svelte:head>
    <title>NFMD | About</title>
</svelte:head>

<script>
    import Banner from "../_components/_banner/_banner.svelte";
    import LeftSplit from "../_components/_left_split/_left_split.svelte";
    import RightSplit from "../_components/_right_split/_right_split.svelte";
    import MobileSplit from "../_components/_mobile_split/_mobile_split.svelte";

    let innerWidth;
</script>

<style>
    .page-overview{
        text-align: center;
        margin: auto;
        margin-bottom: 4em;
        width: 70%;
        padding: 20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius: 10px;
    }
    .page-overview p{
        font-family: 'Lato';
        font-weight: 400;
        font-size: 25px;
        white-space: pre-wrap;
    }
</style>

<svelte:window bind:innerWidth/>

<div class="page-container">
    <Banner title={"About"}/>
    <div class="page-overview">
        <p>
            NF Manufacturing & Design is focused on iterating quickly. In the early stages of product development, ideas are often discarded too easily and too quickly. We know that this prematurely constrains your design and can even lengthen your project's development time since you will spend more time solving unnecessary problems or revisiting those "wild" ideas at a later point in time.
        </p>
        <hr>
        <p>
            We have found great success in our careers by trying out as many concepts as possible in the simplest ways possible. By pairing some "crafty" techniques, equipment and technologies, like 3D printing, silicone molding, and modifying off-the-shelf components, with computer modeling and simulation, we are able to quickly generate and evaluate multiple design concepts to make sure that projects get the best start possible.
        </p>
    </div>
    {#if innerWidth<1140}
        <MobileSplit title={"Nate Fatkhiyev"} textSrc={"page_content/about/nate_fatkhiyev_overview.txt"} imgSrc={"/images/nate_headshot_orig.jpeg"} imgAlt={"Nate Fatkhiyev"} />
    {:else}
        <LeftSplit title={"Nate Fatkhiyev"} textSrc={"/page_content/about/nate_fatkhiyev_overview.txt"} imgSrc={"/images/nate_headshot_orig.jpeg"} imgAlt={"Nate Fatkhiyev"} />
    {/if}
</div>
