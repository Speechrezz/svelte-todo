<script>
    import { toggleTodoCompleted, deleteTodo } from "$lib/stores/TodoStore.js";

    export let todo;

    const toggleCallback = () => {
        todo.completed = !todo.completed;
        toggleTodoCompleted(todo.id, todo.completed);
    }

</script>

<div class="bg-base-300 px-4 py-4 rounded-lg flex">
    <input type="checkbox" checked={todo.completed} 
        on:change={ toggleCallback }
        class="checkbox checkbox-s mr-4" />
    <span class={`w-full ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
    <button on:click={() => deleteTodo(todo.id)}>x</button>
</div>