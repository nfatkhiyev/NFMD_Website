<svelte:head>
    <title>NFMD | Services</title>
</svelte:head>

<script>
    import Banner from "../_components/_banner/_banner.svelte";
    import LeftSplit from "../_components/_left_split/_left_split.svelte";
    import RightSplit from "../_components/_right_split/_right_split.svelte";
</script>

<div class="page-container">
    <Banner title={"Engineering Exellence"} />
    <RightSplit title={'Proof of Concept'} textSrc={'page_content/services/rapid_prototyping.txt'} imgSrc={'images/EXAMPLE - 13.jpeg'} imgAlt={'Molded Silicone Suture Sleeve'}/>
    <LeftSplit title={'Proof of Concept'} textSrc={'page_content/about/about_overview.txt'} imgSrc={'images/_MG_2784.jpeg'} imgAlt={'3D Printed Prototype'}/>
    <RightSplit title={'Proof of Concept'} textSrc={'page_content/services/rapid_prototyping.txt'} imgSrc={'images/EXAMPLE - 4.jpeg'} imgAlt={'Telescopic Catheter with custom High Torque Transfer Tip'}/>
</div>
