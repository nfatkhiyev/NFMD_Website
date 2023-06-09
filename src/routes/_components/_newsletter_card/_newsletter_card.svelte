<script>
    export let postData;
</script>
<style>
    .span-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .card {
        width: 80%;
        display: flex;
        justify-content: space-between;
        border-radius: 20px;
        box-shadow: 0 0 15px lightgrey;
    }
    .thumbnail {
        width: 35%;
        padding: 1.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        aspect-ratio: 1/1;
    }
    .thumbnail img {
        width: 100%;
    }
    .text-area {
        display: flex;
        flex-direction: column;
        justify-content: top;
        padding: 1em;
        align-items: left;
        font-family: 'Lato';
    }
    .text-area h3 {
        color: grey;
        font-weight: 300;
        margin: 0;
    }
</style>
<div class="span-container">
    <div class="card">
        <div class="thumbnail">
            <img src={postData.thumbnail} alt={postData.thumbnailAlt}>
        </div>
        <div class="text-area">
            <h1>{postData.title}</h1>
            <h3>{postData.date}</h3>
            <p>{postData.description}</p>
        </div>
    </div>
</div>
