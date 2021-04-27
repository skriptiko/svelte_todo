<script>
  import { createEventDispatcher } from 'svelte'
  import { fly } from 'svelte/transition'

  export let id
  export let title
  export let completed

  const dispatch = createEventDispatcher()

  const deleteTodo = () => {
    dispatch('deleteTodo', {
      id: id,
    })
  }
  const toggleComplete = () => {
    dispatch('toggleComplete', {
      id: id,
    })
  }
</script>

<style lang="scss">
  @import '../scss/TodoListItem.scss';
</style>

<div class="TodoListItem">
  <div class="TodoListItem_Left" transition:fly={{ y: 20, duration: 300 }}>
    <input
      type="checkbox"
      bind:checked={completed}
      on:change={toggleComplete} />
    <span class="TodoListItem_Label" class:completed>{title}</span>
  </div>
  <div class="TodoListItem_Remove" on:click={deleteTodo}>N</div>
</div>
