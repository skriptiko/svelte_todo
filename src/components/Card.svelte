<script>
  import CardHeader from './CardHeader.svelte'
  import Filter from './Filter.svelte'
  import TodoList from './TodoList.svelte'
  import MdAdd from 'svelte-icons/md/MdAdd.svelte'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let filter = 'all'

  export let todos

  const handleFilterClick = (type) => {
    filter = type
  }

  const handleAddClick = () => {
    dispatch('popupClose', {
      isAddPopupShown: true,
    })
  }

  $: filteredTodos =
    filter === 'all'
      ? todos
      : filter === 'completed'
      ? todos.filter((todo) => todo.completed)
      : todos.filter((todo) => !todo.completed)
</script>

<div class="Card">
  <CardHeader countOfTasks={filteredTodos.length} />

  <div class="Card_Add" on:click={handleAddClick}>
    <MdAdd />
  </div>

  <Filter selected={filter} onClick={handleFilterClick} />

  <TodoList
    todos={filteredTodos}
    on:deleteTodo={(e) => dispatch('deleteTodo', e.detail)}
    on:toggleTodoComplete={(e) => dispatch('toggleTodoComplete', e.detail)}
  />
</div>

<style lang="scss">
  @import '../scss/Card.scss';
</style>
