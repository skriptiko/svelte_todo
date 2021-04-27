<script>
  import Card from './Card.svelte'
  import AddPopup from './AddPopup.svelte'

  let isAddPopupShown = false;
  let todos = [];

  const handlePopupMessage = (e) => {
    isAddPopupShown = e.detail.isAddPopupShown;

    if (e.detail.newTodo) {
      todos = [...todos, e.detail.newTodo];
    }
  }

  const handleCardMessage = (e) => {
    isAddPopupShown = e.detail.isAddPopupShown;
  }
</script>

<div class="App">
  {#if isAddPopupShown}
    <AddPopup on:message={handlePopupMessage} />
  {/if}

  <div class="App_Content">
    <img class="Logo" src="./images/logo.png" alt="logo" />

    <Card on:message={handleCardMessage} todos={todos}/>
  </div>
</div>

<style lang="scss">
  @import '../scss/App.scss';
</style>
