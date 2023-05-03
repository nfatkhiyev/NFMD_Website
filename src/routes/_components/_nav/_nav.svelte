<script>
    import {page} from "$app/stores";

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
    }
    .linkedin img{
        width: 30px;
    }

</style>
<header>
    <nav>
        <div class="left">
            <a href="/"><img src="/nav_logo.jpeg" alt="NF Manufacturing & Design"></a>
        </div>
        <div class="right">
            <a class:active={$page.route.id === "/"} href="/">Home</a>
            <a class:active={$page.route.id === "/services"} href="/services">Services</a>
            <a class:active={$page.route.id === "/about"} href="/about">About</a>
            <a class:active={$page.route.id === "/contact"} href="/contact">Contact</a>
            <a class="linkedin" target="_blank" href="https://www.linkedin.com/company/nf-maufacturing-design/"><img src="linkedin.png" alt="linkedin icon"></a>
        </div>
    </nav>
</header>
