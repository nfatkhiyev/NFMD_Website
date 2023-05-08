<script>
    import Nav from './_components/_nav/_nav.svelte';
    import Footer from './_components/_footer/_footer.svelte';
</script>
<style>
    .buffer {
        width: 100%;
        background: #F8F8F8;
        height: 92.14px;
    }
    .full-page-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100%;
        position: absolute;
    }
    @media screen and (max-width: 450px){
        .buffer {
            height: 21vw;
        }
    }
</style>
<Nav/>
<div class="full-page-container">
<div class="buffer"></div>
<slot />
<Footer/>
</div>
