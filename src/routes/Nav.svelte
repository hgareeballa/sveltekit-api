<script>
	import { page } from '$app/stores';
    let navs = [
        {
        url:'/',
        name: 'Home'
    },
    {
        url:'/quotes',
        name: 'Quotes'
    },
    {
        url:'/shop',
        name: 'Shops'
    },
    {
        url:'/movies',
        name: 'Movies'
    },
    {
        url:'/users',
        name: 'Users'
    }]
</script>
<div class="center" id="navbarNav">
<ul class="nav nav-pills justify-content-center">
    {#each navs as nav}
    <li class="nav-item" aria-current={$page.url.pathname === nav.url ? 'page' : undefined}>
        <a class="nav-link {$page.url.pathname === nav.url ? 'active' : undefined}" href="{nav.url}">{nav.name}</a>
      </li>
    {/each}   
</ul>
</div>

