<script>
    export let data;
    const { products } = data    
    
</script>
<h1>Shop Page</h1>
{#await products}
    <h1>Loading ....</h1>
{:then products} 
    

{#each products as product}
<h2> <b>{product.title} </b></h2>
<p>{product.description}</p>
{/each}

{/await}