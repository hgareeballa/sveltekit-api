<script>
  export let data;
  const { quotes } = data;

</script>

<h1>Quotes Page</h1>
 
{#await quotes}
    <h1>Loading .....</h1>
{:then quotes} 

<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Quote</th>
        <th scope="col">Author</th>
      </tr>
    </thead>
    <tbody> 
      {#each quotes as quote}
      <tr>
      <th scope="row">{quote.id}</th>
       <td>{quote.quote}</td> 
       <td>{quote.author}</td>
      </tr>
      {/each}
    </tbody>
  </table>    
  
{/await}

