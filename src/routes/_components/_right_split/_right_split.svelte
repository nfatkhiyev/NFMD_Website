<script>
    import { onMount } from 'svelte';

    export let title;
    export let textSrc;
    export let imgSrc;

    let content;

    onMount(async () => {
        const res = await fetch(textSrc);
        content = await res.text();
    });    
</script>

<style>
    .rs-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .left {
        width: 50%;
        padding: 2em;
        padding-left: 14%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .right {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        height: 30em;
        margin-right: 7%;
    }
    .circle {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        box-shadow: 0 0 20px #FF7F50;
        /*
        border-width: 6px;
        border-style: solid;
        border-color: transparent;
        background: linear-gradient(#F8F8F8, #F8F8F8) padding-box, linear-gradient(45deg, #FF7F50, #F8F8F8) border-box;
        */
        height: 90%;
        position: relative;
        overflow: hidden;
        aspect-ratio: 1/1;
    }
    .circle img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* to fit the image inside the circle */
  }
    p {
        font-family: 'Lato';
        font-weight: 300;
        font-size: 20px;
        text-align: justify;
        word-wrap: break-word;
        width: 100%;
    }
    h1 {
        font-family: 'Lato';
    }
</style>

<div class="rs-container">
    <div class="left">
        <h1>{title}</h1>
        <p>{content}</p>
    </div>
    <div class="right">
        <div class="circle">
            <img src={imgSrc} alt="engineering">
        </div>
    </div>
</div>
