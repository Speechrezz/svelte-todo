<script>
	import { supabase } from "$lib/supabase.js";
    import TodoLayout from "$lib/components/TodoLayout.svelte";
	import { UserStore } from "$lib/stores/UserStore.js";

	const handleSignout = () => supabase.auth.signOut();
</script>


<main>
	<div class="hero h-[30rem] bg-base-200">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<h1 class="text-5xl font-bold">
					{#if (!$UserStore)}
						Hello there
					{:else}
						Welcome, {$UserStore.email}
					{/if}
				</h1>
				<p class="py-6">
					Welcome to this very basic todo-list app! 
					{#if (!$UserStore)}
                    	In order to get started please either sign in or sign up.
					{:else}
						Add a todo by typing in the text box below!
					{/if}
				</p>
                <div>
					{#if (!$UserStore)}
						<a href="user/signin"><button class="btn btn-primary">Sign in</button></a>
						<a href="user/signup"><button class="btn btn-outline">Sign up</button></a>
					{:else}
						<button on:click={handleSignout} class="btn btn-outline">Sign out</button>
					{/if}
                </div>
			</div>
		</div>
	</div>
	{#if ($UserStore)}
    	<TodoLayout />
	{/if}
</main>