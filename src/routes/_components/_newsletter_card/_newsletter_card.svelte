<script>
    export let postData;

    let postDate = new Date(postData.date);
</script>
<style>
    .span-container {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 4vh;
    }
    .card{
        width: 80%;
        display: flex;
        justify-content: space-between;
        border-radius: 20px;
        box-shadow: 0 0 15px lightgrey;
    }
    a, a:visited {
        display: flex;
        justify-content: space-between;
        width: 100%;
        border-radius: 20px;
        text-decoration: none;
        color: black;
    }
    a:hover {
        background-color: #F2F2F2;
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
        width: 60%;
        flex-direction: column;
        justify-content: center;
        padding: 1em;
        align-items: left;
        font-family: 'Lato';
    }
    .text-area h1{
        margin-bottom: 0.30em;
    }
    .text-area h3 {
        color: grey;
        font-weight: 300;
        margin: 0;
        font-size: 1.5vw;
    }
    .text-area p {
        font-weight: 300;
        font-size: 1.5vw;
        color: #666666
    }
    .tags {
        display: flex;
        gap: 0.75em;
        margin-bottom: 0.75em;
    }
    .tag-values {
        font-weight: 600;
        color: #ff7f50;
        font-variant: small-caps;
        
    }
    @media screen and (max-width: 1125px){
        a{
            flex-direction: column;
            align-items: center;
        }
        .card {
            width: 80%;
        }
        .thumbnail{
            width: 40%;
        }
        .tags {
            justify-self: center;
            margin-bottom: 3vw;
        }
        .tag-values {
            font-size: 2.9vw;
        }
        .text-area{
            width: 80%;
        }
        .text-area h1 {
            font-size: 7vw;
        }
        .text-area h3 {
            font-size: 3vw;
        }
        .text-area p {
            font-size: 3vw;
        }
    }
</style>
<div class="span-container">
    <div class="card">
    <a href={postData.slug}>
        <div class="thumbnail">
            <img src={postData.thumbnail} alt={postData.thumbnailAlt}>
        </div>
        <div class="text-area">
            <h3>{postDate.toLocaleDateString('en-us', {day: 'numeric', month: 'short', year: 'numeric'})}</h3>
            <h1>{postData.title}</h1>
            <div class="tags">
                
                {#each postData.categories as category}
                <span class="tag-values">{category}</span>
                {/each}
                
            </div>
            <p>{postData.description}</p>
        </div>
    </a>
    </div>
</div>
<!-- &num; -->