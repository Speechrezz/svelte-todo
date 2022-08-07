import { writable } from "svelte/store";
import { supabase } from "$lib/supabase.js";

export const TodoStore = writable([]);

export const loadTodos = async () => {
    const {data, error} = await supabase.from("todos").select().order("created_at");

    if (error) {
        console.error(error);
    }

    TodoStore.set(data);
}

export const addTodo = async (text, user_id=null) => {
    const {data, error} = await supabase.from("todos").insert([{text, user_id, completed: false}]);

    if (error) {
        console.error(error);
    }

    TodoStore.update((current) => [...current, data[0]]);
}

export const deleteTodo = async (id) => {
    const {error} = await supabase.from("todos").delete().match({id});

    if (error) {
        console.error(error);
    }

    TodoStore.update((current) => current.filter(
        (todo) => (todo.id !== id)
    ));
}

export const toggleTodoCompleted = async (id, currentState) => {

    const {error} = await supabase.from("todos").update({completed: currentState}).match({id});

    if (error) {
        console.error(error);
    }
}