<script>
  import TodoItem from './TodoListItem.svelte'

  let data = [
    { id: 1, title: 'One', completed: false },
    { id: 2, title: 'Second', completed: false },
    { id: 3, title: 'Thirst', completed: false },
  ]

  let title = ''
  let filter = 'all'

  const handleKeydown = (e) => {
    if (e.key !== 'Enter') return

    data = [
      ...data,
      {
        id: data.length + 1,
        completed: false,
        title,
      },
    ]

    title = ''
  }

  const handleDeleteTodo = (e) => {
    data = data.filter((todo) => todo.id !== e.detail.id)
  }
  const handleToggleComplete = (e) => {
    data.forEach((item) => {
      if (item.id === e.detail.id) {
        item.completed = !item.completed
      }
    });
    data = data;
  }
  const handleAll = (e) => {
    data.forEach((item) => {
      item.completed = e.target.checked
    });
    data = data;
  }

  const updateFilter = (type) => {
    filter = type
  }
  const clearCompleted = () => {
    data = data.filter((todo) => !todo.completed)
  }

  $: todoRemaining = filteredData.filter((todo) => !todo.completed).length
  $: filteredData =
    filter === 'all'
      ? data
      : filter === 'completed'
      ? data.filter((todo) => todo.completed)
      : data.filter((todo) => !todo.completed)
</script>

<style lang="scss">
  @import '../scss/Todo.scss';
</style>

<div class="container">
  <input
    type="text"
    placeholder="Add new item..."
    bind:value={title}
    on:keydown={handleKeydown} />



  <div class="inner-container">
    <div>
      <label for="all">
        <input type="checkbox" id="all" on:change={handleAll} />
        Check All
      </label>
    </div>
    <div>{todoRemaining} items left</div>
  </div>
  <div class="inner-container">
    <div>
      <button
        on:click={() => updateFilter('all')}
        class:active={filter === 'all'}>
        All
      </button>
      <button
        on:click={() => updateFilter('active')}
        class:active={filter === 'active'}>
        Active
      </button>
      <button
        on:click={() => updateFilter('completed')}
        class:active={filter === 'completed'}>
        Completed
      </button>
    </div>
    <div>
      <button on:click={clearCompleted}>Clear completed</button>
    </div>
  </div>
</div>
