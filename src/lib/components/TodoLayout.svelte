<script>
    import Todo from "./TodoLayout/Todo.svelte";
    import { TodoStore, addTodo } from "$lib/stores/TodoStore.js";
    import { UserStore } from "$lib/stores/UserStore.js";

    let todoText = "";

    const handleAddTodo = () => {
        if (!todoText) return;
        
        addTodo(todoText, $UserStore.id);
        todoText = "";
    }
</script>

<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-lg w-full">
        <textarea bind:value={todoText} class="textarea textarea-bordered w-full items-start" placeholder="Enter a todo..."></textarea>
        <button on:click={ handleAddTodo } class="btn normal-case mt-2" type="submit">
            <span>+ Add todo item</span>
        </button>
        <div class="divider" />
        <div class="space-y-2">
            {#each $TodoStore as todo}
                <Todo todo={todo} />
            {/each}
        </div>
    </div>
</div>