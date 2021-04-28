<script>
  import Card from './Card.svelte'
  import AddPopup from './AddPopup.svelte'

  let isAddPopupShown = false
  let todos = []

  const handleAddPopupSubmit = (e) => {
    if (e.detail.newTodo) {
      todos = [...todos, e.detail.newTodo]
    }
  }

  const handleAddPopupClose = (e) => {
    isAddPopupShown = e.detail.isAddPopupShown
  }

  const handleDeleteTodo = (e) => {
    todos = todos.filter((todo) => todo.id !== e.detail.id)
  }

  const handleToggleTodoComplete = (e) => {
    todos = todos.map((todo) => {
      if (todo.id === e.detail.id) {
        return {...todo, completed: e.detail.completed}
      }
      return todo;
    })
  }
</script>

<div class="App">
  <div class="App_TrianglesWrap">
    <div class="App_Triangles">
      <div class="App_TrianglesTop" />
      <div class="App_TrianglesBottom" />
    </div>
  </div>

  {#if isAddPopupShown}
    <AddPopup
      on:popupClose={handleAddPopupClose}
      on:submit={handleAddPopupSubmit}
    />
  {/if}

  <div class="App_CardWrap">
    <div class="App_Content">
      <img class="Logo" src="./images/logo.png" alt="logo" />

      <Card
        on:popupClose={handleAddPopupClose}
        on:deleteTodo={handleDeleteTodo}
        on:toggleTodoComplete={handleToggleTodoComplete}
        {todos}
      />
    </div>
  </div>
</div>

<style lang="scss">
  @import '../scss/App.scss';
</style>
