<style lang="scss">
  @import "../scss/App.scss";
</style>

<script>
  import Header from "./Header.svelte"
  import Todo from "./Todo.svelte"

  export let name
</script>

<main>
  <Header />
  <Todo />
</main>
