<script>
  //import { page } from '$app/stores';
  import Nav from "./Nav.svelte";
  import logo from "$lib/images/svelte-logo.svg";
  import github from "$lib/images/github.svg";
</script>

<header>
	<nav class="navbar navbar-light bg-light center">
		<a class="navbar-brand" href="/">
		  <img src={logo} width="30" height="30" alt="">
		</a>
		<Nav />
		<span class="navbar-text">
			<a class="navbar-brand" href="https://github.com/hgareeballa">
				<img src={github} width="30" height="30" alt="">
			  </a>
		  </span>
	  </nav>
	 
</header>
