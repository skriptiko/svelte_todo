<script>
  import CardHeader from "./CardHeader.svelte";
  import Filter from "./Filter.svelte";
  import TodoList from "./TodoList.svelte";

  let data = [
    { id: 1, title: "One", completed: false },
    { id: 2, title: "Second", completed: false },
    { id: 3, title: "Thirst", completed: false }
  ];

  let filter = "all";

  const handleFilterClick = (type) => {
    filter = type;
  };

  $: filteredData =
    filter === "all"
      ? data
      : filter === "completed"
      ? data.filter((todo) => todo.completed)
      : data.filter((todo) => !todo.completed);
</script>

<style lang="scss">
  @import '../scss/Card.scss';
</style>

<div class="Card">
  <CardHeader countOfTasks={filteredData.length} />

  <div class="Card_Add">
    +
  </div>

  <Filter selected={filter} onClick={handleFilterClick} />

  <TodoList list={filteredData} />
</div>
