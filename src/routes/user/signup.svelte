<script>
    import { supabase } from "$lib/supabase.js";

    let loading = false;
    let email;
    let password;

    const handleSignup = async () => {

        try {
            loading = true;
            const {user, error} = await supabase.auth.signUp({email, password});

            if (error) throw error;

            window.location.href = "/";

        } catch (error) {
            console.error(error);
            alert(error.error_desciption || error.message);
        } finally {
            loading = false;
        }
    }
</script>


<main class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
        <h1 class="text-3xl font-bold text-center">
            Create your account
        </h1>
        <div class="bg-base-200 rounded shadow-md space-y-8 pt-6 pb-10 px-12 flex items-center justify-center">
            <form on:submit|preventDefault={handleSignup} class="w-full space-y-4">
                <div class="form-control">
                    <label class="label w-full" for="email">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="email" name="email" class="input h-11 input-bordered w-full" bind:value={email} />
                </div>
                <div class="form-control">
                    <label class="label w-full" for="password">
                        <span class="label-text">Password</span>
                    </label>
                    <input type="password" name="password" class="input h-11 input-bordered w-full" bind:value={password} />
                </div>
                
                <div class="">
                    <button type="submit" class="btn btn-active btn-primary w-full mt-4">
                        Sign up
                    </button>
                </div>
                <div class="w-full divider"></div>
                <div class="form-control pt-2 items-center">
                    <p class="text-center"> Already have an account? <a href="signin" class="link">Sign in</a> instead.</p>
                </div>
            </form>
        </div>
    </div>
</main>