<script>
  export let data;
  let pageSize = 10;
  let currentPage = 1;  
  $: totalItems = data.users.total;
  $: totalPages = Math.ceil(totalItems / pageSize);
  function itemSelected(value) {
    alert(value.email);
  }
</script>

<h1>Users</h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">User Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {#each data.users.users as user}
      <tr>
        <th scope="row">{user.id}</th>
        <td>{user.email}</td>
        <td class="center">
          <button
            type="button"
            class="btn btn-primary btn-sm"
            on:click={() => itemSelected(user)}>Select</button
          >
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<nav aria-label="Page navigation example">
  <ul class="pagination">
    {#each Array(totalPages) as _, idx}        
      <li class="page-item" >
        <a
          on:click={() => (currentPage = idx + 1)}
          class="page-link {currentPage == idx + 1 ? 'active' : undefined}" 
          href="/users?limit={pageSize}&skip={pageSize * idx}">{idx + 1}</a
        >
      </li>
    {/each}
  </ul>
</nav>
