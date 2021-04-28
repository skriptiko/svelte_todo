<script>
  import Card from './Card.svelte'
  import AddPopup from './AddPopup.svelte'

  let isAddPopupShown = false
  let todos = []

  const handlePopupMessage = (e) => {
    isAddPopupShown = e.detail.isAddPopupShown

    if (e.detail.newTodo) {
      todos = [...todos, e.detail.newTodo]
    }
  }

  const handleCardMessage = (e) => {
    isAddPopupShown = e.detail.isAddPopupShown
  }
</script>

<div class="App">
  <div class="App_TrianglesWrap">
    <div class="App_Triangles">
      <div class="App_TrianglesTop"></div>
      <div class="App_TrianglesBottom"></div>
    </div>
  </div>

  {#if isAddPopupShown}
    <AddPopup on:message={handlePopupMessage} />
  {/if}

  <div class="App_CardWrap">
    <div class="App_Content">
      <img class="Logo" src="./images/logo.png" alt="logo" />

      <Card on:message={handleCardMessage} {todos} />
    </div>
  </div>
</div>

<style lang="scss">
  @import '../scss/App.scss';
</style>
