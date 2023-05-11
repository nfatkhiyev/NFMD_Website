<svelte:head>
    <title>NFMD | Services</title>
</svelte:head>

<script>
    import Banner from "../_components/_banner/_banner.svelte";
    import LeftSplit from "../_components/_left_split/_left_split.svelte";
    import MobileSplit from "../_components/_mobile_split/_mobile_split.svelte";
    import RightSplit from "../_components/_right_split/_right_split.svelte";

    let innerWidth;
</script>

<svelte:window bind:innerWidth/>

<div class="page-container">
    <Banner title={"Engineering Exellence"} />
    {#if innerWidth<1140}
        <MobileSplit title={'Concept Generation'} textSrc={'/page_content/services/concept_generation.txt'} imgSrc={'/images/_MG_2784.jpeg'} imgAlt={'3D Printed Prototype'}/>
        <MobileSplit title={'Design Development'} textSrc={'/page_content/services/design_development.txt'} imgSrc={'/images/EXAMPLE - 13.jpeg'} imgAlt={'Molded Silicone Suture Sleeve'}/>
        <MobileSplit title={'Process Development'} textSrc={'/page_content/services/process_development.txt'} imgSrc={'/images/_MG_2803.jpeg'} imgAlt={'Prototype Mold'}/>
        <MobileSplit title={'Minimum Viable Product, (MVP)'} textSrc={'/page_content/services/mvp.txt'} imgSrc={'/images/EXAMPLE - 4.jpeg'} imgAlt={'Telescopic Catheter with custom High Torque Transfer Tip'}/>
    {:else}
        <RightSplit title={'Concept Generation'} textSrc={'/page_content/services/concept_generation.txt'} imgSrc={'/images/_MG_2784.jpeg'} imgAlt={'3D Printed Prototype'}/>
        <LeftSplit title={'Design Development'} textSrc={'/page_content/services/design_development.txt'} imgSrc={'/images/EXAMPLE - 13.jpeg'} imgAlt={'Molded Silicone Suture Sleeve'}/>
        <RightSplit title={'Process Development'} textSrc={'/page_content/services/process_development.txt'} imgSrc={'/images/_MG_2803.jpeg'} imgAlt={'Prototype Mold'}/>
        <LeftSplit title={'Minimum Viable Product, (MVP)'} textSrc={'/page_content/services/mvp.txt'} imgSrc={'/images/EXAMPLE - 4.jpeg'} imgAlt={'Telescopic Catheter with custom High Torque Transfer Tip'}/>
    {/if}
</div>
