<script>
  import TodoListItem from './TodoListItem.svelte'
  import MdNewReleases from 'svelte-icons/md/MdNewReleases.svelte'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let todos
</script>

<div class="TodoList">
  {#if todos.length}
    {#each todos as item}
      <TodoListItem
        {...item}
        on:deleteTodo={(e) => dispatch('deleteTodo', e.detail)}
        on:toggleTodoComplete={(e) => dispatch('toggleTodoComplete', e.detail)}
      />
    {/each}
  {:else}
    <div class="TodoList_Empty">
      <MdNewReleases />
      no tasks for today...
    </div>
  {/if}
</div>

<style lang="scss">
  @import '../scss/TodoList.scss';
</style>
