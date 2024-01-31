<h1> Movies list</h1>

<script>
    export let data;
    const { movies } = data            
</script>
{#await movies}
<h1>Loading .....</h1>    
{:then movies} 
    

{movies.overview}

<img src="https://image.tmdb.org/t/p/original/{movies.poster_path}" 
alt="Girl in a jacket" width="200" height="200">

{/await}