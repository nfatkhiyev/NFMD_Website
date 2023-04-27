<script>
    export let title;
    export let textSrc;
    export let imgSrc;
</script>

<style>
    .rs-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .right {
        width: 60%;
        padding: 2em;
        padding-right: 14%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .left {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        height: 30em;
        margin-left: 7%;
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
    }
    h1 {
        font-family: 'Lato';
    }
</style>

<div class="rs-container">
    <div class="left">
        <div class="circle">
            <img src={imgSrc} alt="engineering">
        </div>
    </div>
    <div class="right">
        <h1>{title}</h1>
        <p><embed src={textSrc}></p>
    </div>
</div>
