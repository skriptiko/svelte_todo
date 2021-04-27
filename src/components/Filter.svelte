<script>
  export let onClick
  export let selected
</script>

<style lang="scss">
  @import '../scss/Filter.scss';
</style>

<div class="Filter">
  <button
    class="Filter_Button"
    on:click={() => onClick('all')}
    class:active={selected === 'all'}>
    All
  </button>
  <button
    class="Filter_Button"
    on:click={() => onClick('active')}
    class:active={selected === 'active'}>
    Active
  </button>
  <button
    class="Filter_Button"
    on:click={() => onClick('completed')}
    class:active={selected === 'completed'}>
    Completed
  </button>
</div>
