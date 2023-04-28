<script>
    import Banner from "../_components/_banner.svelte/_banner.svelte";
    import LeftSplit from "../_components/_left_split/_left_split.svelte";
    import PageOverview from "../_components/_page_overview/_page_overview.svelte";

</script>

<div class="page-container">
    <Banner title="About"/>
    <PageOverview textSrc={"page_content/about/about_overview.txt"} />
    <LeftSplit title={"Nate Fatkhiyev"} textSrc={"page_content/about/about_overview.txt"} imgSrc={"favicon.png"} />
</div>
