<svelte:head>
    <title>NFMD | {data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<script>
    import Banner from '../_components/_banner/_banner.svelte';

    export let data;
    let postDate = new Date(data.meta.date);
</script>

<style>
    .container {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    article {
        width: 80%;
        text-align: justify;
        font-family: 'Lato';
    }
    .tags {
		display: flex;
		gap: 1em;
		margin-top: 1em;
        margin-bottom: 2em;
	}

	.tags > * {
		padding: 0.5em 1em;
		border-radius: 2em;
        background: white;
        border: solid lightgrey;
	}
</style>

<Banner title={data.meta.title} />

<div class='container'>
<article>
    <!-- Title -->
      <hgroup>
          <p>Published on {postDate.toLocaleDateString('en-uk', {day: 'numeric', month: 'long', year: 'numeric'})}</p>
      </hgroup>
  
    <!-- Tags -->
      <div class="tags">
          {#each data.meta.categories as category}
              <span class="surface-4">&num;{category}</span>
          {/each}
      </div>
  
    <!-- Post -->
      <div class="prose">
          <svelte:component this={data.content} />
      </div>
  </article>
  </div>
