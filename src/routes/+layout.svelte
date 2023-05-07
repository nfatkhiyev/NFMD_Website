<script>
    import Nav from './_components/_nav/_nav.svelte';
    import Footer from './_components/_footer/_footer.svelte';
</script>
<style>
    .buffer {
        width: 100%;
        background: #F8F8F8;
        height: 146.5px;
    }
</style>
<Nav/>
<div class="buffer"></div>
<slot />
<Footer/>
