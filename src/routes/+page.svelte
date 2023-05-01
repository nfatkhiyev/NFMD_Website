<svelte:head>
    <title>NF Manufacturing & Design</title>
</svelte:head>
<style>
    .page-container {
        width: 100%;
        height: auto;
    }
    .page-container img {
        max-width: 100%;
        position: relative;
        width: auto;
        height: auto;
        object-fit: cover;
    }
    .headline-container {
        z-index: 1;
        background-color: #F8F8F8;
        box-shadow: 0 0 15px grey;
        border: solid 0.5px grey;
        border-radius: 40px;
        padding: 2.0em;
        padding-left: 3em;
        padding-right: 3em;
        float: left;
        position: absolute;
        top: 9em;
        left: 5em;
        width: 40%;
        height: 40%;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
    }
    h1, h2, a {
        font-family: 'Lato';
    }

    h1 {
        font-size: 2.75em;
        margin-block-start: 0.37em;
        margin-block-end: 0.37em;
    }

    h1:not(:first-child) {
        margin-left: 1.5em;
    }

    h2 {
        font-weight: 300;
        width: 100%;
        text-align: center;
    }

    .button-line {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .headline-button {
        text-decoration: none;
        font-size: 16px;
        font-weight: 400;
        border: 1px solid;
        box-shadow: 0 0 2px 2px lightgrey;
        text-align: center;
        padding: 0.8em;
        padding-left: 1.3em;
        padding-right: 1.3em;
        border-radius: 40px;
        margin: 1em;
    }

    .light-button {
        background: #F8F8F8;
        color: black;
        border-color: lightgrey;
    }

    .light-button:hover {
        background: #FF7F50;
        color: white;
        border-color: white;
    }

    .emph-button {
        background: #FF7F50;
        color: white;
        border-color: #FF7F50;
    }

    .emph-button:hover {
        background: #F8F8F8;
        color: black;
        border-color: black;
    }
</style>

<div class="page-container">
    <div class="headline-container">
        <h1>ITERATE FAST</h1>
        <h1>INNOVATE FAST</h1>
        <h2>A hands on approach to product development</h2>
        <div class="button-line">
            <a class="headline-button light-button" href="/services">LEARN MORE</a>
            <a class="headline-button emph-button" href="/contact">GET IN TOUCH</a>
        </div>
    </div>
    <img src="images/_MG_2864.jpeg" alt="engineering work area">
</div>
