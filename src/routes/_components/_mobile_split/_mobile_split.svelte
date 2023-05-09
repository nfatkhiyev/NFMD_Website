<script>
    import { onMount } from 'svelte';
    export let title;
    export let textSrc;
    export let imgSrc;
    export let imgAlt;

    let content;

    onMount(async () => {
        const res = await fetch(textSrc);
        content = await res.text();
    });
</script>

<style>
    .ms-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-left: 10%;
        padding-right: 10%;
    }
    .top {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30em;
    }
    .bottom {
        width: 100%;
        padding: 2em;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .circle {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: solid 0.05px grey;
        box-shadow: 0 0 15px grey;
        max-height: 90%;
        position: relative;
        overflow: hidden;
        aspect-ratio: 1/1;
    }
    .circle img {
        width: 100%;
        height: 100%;
    }
    p {
        font-family: 'Lato';
        font-weight: 300;
        font-size: 20px;
        text-align: justify;
        white-space: pre-wrap;
        word-wrap: break-word;
        width: 100%;
    }
    h1 {
        font-family: 'Lato';
        margin-bottom: 1.5em;
    }
    @media screen and (max-width: 575px){
        .top {
            height: unset;
            max-height: 30em;
        }
    }
</style>

<div class="ms-container">
    <div class="title">
        <h1>{title}</h1>
    </div>
    <div class="top">
        <div class="circle">
            <img src={imgSrc} alt={imgAlt}>
        </div>
    </div>
    <div class="bottom">
        <p>{content}</p>
    </div>
</div>
