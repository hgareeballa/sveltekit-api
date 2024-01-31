<script>
    export let data
    let pageSize = 10
    $: totalItems = data.users.total 
    $: totalPages = Math.ceil(totalItems / pageSize)
 
</script>
<h1>Users</h1>
<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">User Email</th>        
      </tr>
    </thead>
    <tbody> 
        {#each data.users.users as  user}
      <tr>
      <th scope="row">{user.id}</th>
       <td>{user.email}</td>        
      </tr>
      {/each}
    </tbody>
  </table>  

  <nav aria-label="Page navigation example">
    <ul class="pagination">
        {#each Array(totalPages) as _, idx}        
       <li class="page-item"><a class="page-link" href="/users?limit={pageSize}&skip={pageSize * idx}">{idx + 1}</a></li>
       {/each}
    </ul>
  </nav>