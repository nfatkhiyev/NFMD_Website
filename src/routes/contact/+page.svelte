<svelte:head>
    <title>NFMD | Contact</title>
</svelte:head>

<script>
    import Banner from "../_components/_banner/_banner.svelte";
    import ContactForm from "../_components/_contact_form/_contact_form.svelte";
</script>

<style>
    .span-container {
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    .left {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin: 1.5em;
    }
    .left img {
        height: 538px;
        object-fit: cover;
    }
    .right {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<div calss="page-container">
    <Banner title="Contact Us"/>
    <div class="span-container">
        <div class="right">
            <ContactForm />
        </div>
        <div class="left">
            <img src="images/EXAMPLE - 2.jpeg">
        </div>
    </div>
</div>
