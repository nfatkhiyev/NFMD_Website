<svelte:head>
    <title>NFMD | Contact</title>
</svelte:head>

<script>
    import Banner from "../_components/_banner/_banner.svelte";
    import ContactForm from "../_components/_contact_form/_contact_form.svelte";
    
    export let form;
    export let innerWidth;
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
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin-left: 1.5em;
    }
    .left img {
        width: 100%;
    }
    .right {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form-message-banner{
        width: 100%;
        background: lightgreen;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .form-message {
        font-family: 'Lato';
        color: green;
        text-align: center;
        margin: 0.75em;
    }
    @media screen and (max-width: 1140px){
        .right{
            padding-left: 10%;
            padding-right: 10%;
            width: 90%
        }
        .left {
            display: hidden;
        }
        .span-container{
            flex-direction: column;
        }
    }
</style>

<svelte:window bind:innerWidth/>

<div class="page-container">
    <Banner title="Contact Us"/>
    {#if form?.success}
    <div class="form-message-banner">
        <p class="form-message">{form?.message}</p>
    </div>
    {/if}
    <div class="span-container">
        <div class="right">
            <ContactForm form={form} />
        </div>
        {#if innerWidth>1140}
            <div class="left">
                <img src="images/EXAMPLE - 2.jpeg" alt="assorted catheter and injection molding samples">
            </div>
        {/if}
    </div>
</div>
