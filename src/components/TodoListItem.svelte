<script>
  import { createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition';
  import MdDelete from 'svelte-icons/md/MdDelete.svelte';

  export let id;
  export let text;
  export let completed;

  const dispatch = createEventDispatcher()

  const handleDelete = () => {
    dispatch('deleteTodo', {
      id: id,
    })
  }
  const handleComplete = () => {
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
      on:change={handleComplete} />
    <span class="TodoListItem_Label" class:completed>{text}</span>
  </div>
  <div class="TodoListItem_Remove" on:click={handleDelete}>
    <MdDelete />
  </div>
</div>
