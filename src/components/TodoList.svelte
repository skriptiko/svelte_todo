<script>
  import TodoListItem from './TodoListItem.svelte'

  export let list
</script>

<style lang="scss">
  @import '../scss/TodoList.scss';
</style>

<div class="TodoList">
  {#if list.length}
    {#each list as item}
      <TodoListItem {...item} />
    {/each}
  {:else}'Empty list...'{/if}

</div>
