<script>
    let innerWidth;
</script>
<style>
    footer {
        display: flex;
        width: 100%;
        height: 8em;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    p {
        font-family: 'Lato';
        color: lightgray;
        width: 33.33%;
        padding:1em;
    }
    .contact {
        text-align: left;
        padding-left: 3em;
    }
    @media screen and (max-width: 1125px){
        footer {
            flex-direction: column;
            justify-content: space-evenly;
        }
        p {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            height: 50%;
            width: 80%;
            margin: 0;
            padding: 0;
        }
        .contact {
            text-align: center;
            padding: 0;
        }
    }
</style>
<svelte:window bind:innerWidth/>
<footer>
    <p class="contact">
        Tel: (651) 368-6309 <br>
        E-mail: quote@nfmanufacturing.com
    </p>
    <p>&copy; <em id="date">2023</em> &nbsp NF Manufacturing & Design, LLC</p>
    {#if innerWidth >= 1215}
    <p></p>
    {/if}
</footer>