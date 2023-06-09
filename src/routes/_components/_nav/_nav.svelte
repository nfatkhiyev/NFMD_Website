<script>
    import {page} from "$app/stores";
    import MenuButton from "../_menu_button/_menu_button.svelte";

    let innerWidth = 0;
    let clicked = false;
</script>
<style>
    header {
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        background: #F8F8F8;
        z-index: 999;
        box-shadow: 0 10px 20px -20px lightgray;
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        margin-top: 0;
        margin-right: 1.1em;
        margin-left: 0.6em;
    }

    .left a{
        display: flex;
    }
    .left img {
        width: 20em;
    }
    a {
        padding: 0.9em;
        color: black;
        align-items: center;
    }

    .right a, a:visited {
        min-width: 1em;
        text-align: center;
        font-family: 'Lato';
        font-weight: 500;
        text-decoration: none;
        font-size: 18px;
        margin: 0.2em;
    }

    .right a:hover:not(:last-child) {
        border-radius: 10px;
        background-color: #FF7F50;
        color: white;
    }

    .pop-out-menu a, a:visited {
        min-width: 5em;
        text-align: center;
        font-family: 'Lato';
        font-weight: 400;
        text-decoration: none;
        font-size: 30px;
        margin: 0.4em;
    }

    .pop-out-menu a:hover:not(:last-child) {
        border-radius: 30px;
        background-color: #FF7F50;
        color: white;
    }

    .pop-out-menu .active {
        border-radius: 30px;
    }

    .active {
        border-radius: 10px;
        background-color: #FF7F50;
        color: white;
    }

    .right{
        display: flex;
        flex-direction: row;
    }

    .linkedin{
        display: flex;
        padding: 0.75em;
        justify-content: center;
    }
    .linkedin img{
        width: 30px;
    }
    .pop-out-menu .linkedin img{
        width: 60px;
    }
    .pop-out-menu {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        min-height: 72vw;
        background: #F8F8F8;
    }
    @media screen and (max-width: 450px){
        .left img {
            width: 90%;
        }
    }
</style>
<svelte:window bind:innerWidth/>
<header>
    <nav>
        <div class="left">
            <a href="/"><img src="/nav_logo.jpeg" alt="NF Manufacturing & Design"></a>
        </div>
        <div class="right">
            {#if innerWidth < 1125}
                <MenuButton bind:clicked={clicked}/>
            {:else}
                <a class:active={$page.route.id === "/"} href="/">Home</a>
                <a class:active={$page.route.id === "/services"} href="/services">Services</a>
                <a class:active={$page.route.id === "/about"} href="/about">About</a>
                <a class:active={$page.route.id === "/newsletter"} href="/newsletter">Newsletter</a>
                <a class:active={$page.route.id === "/contact"} href="/contact">Contact</a>
                <a class="linkedin" target="_blank" href="https://www.linkedin.com/company/nf-maufacturing-design/"><img src="/linkedin.png" alt="linkedin icon"></a>
            {/if}
        </div>
    </nav>
    {#if innerWidth < 1125 && clicked}
        <div class="pop-out-menu">
            <a class:active={$page.route.id === "/"} href="/" on:click="{() => clicked = !clicked}">Home</a>
            <a class:active={$page.route.id === "/services"} href="/services" on:click="{() => clicked = !clicked}">Services</a>
            <a class:active={$page.route.id === "/about"} href="/about" on:click="{() => clicked = !clicked}">About</a>
            <a class:active={$page.route.id === "/newsletter"} href="/newsletter" on:click="{() => clicked = !clicked}">Newsletter</a>
            <a class:active={$page.route.id === "/contact"} href="/contact" on:click="{() => clicked = !clicked}">Contact</a>
            <a class="linkedin" target="_blank" href="https://www.linkedin.com/company/nf-maufacturing-design/" on:click="{() => clicked = !clicked}"><img src="/linkedin.png" alt="linkedin icon"></a>
        </div>
    {/if}
</header>
