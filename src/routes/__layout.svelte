<script>
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "../lib/components/Footer.svelte";

    import { supabase } from "$lib/supabase.js";
    import { TodoStore, loadTodos } from "$lib/stores/TodoStore.js";
    import { UserStore } from "$lib/stores/UserStore.js";

    UserStore.set(supabase.auth.user());

    supabase.auth.onAuthStateChange((_, session) => {
        UserStore.set(session?.user)

        if (session?.user){
            loadTodos();
        }
    })

    loadTodos();
</script>

<Navbar />
<slot />
<!-- <Footer /> -->