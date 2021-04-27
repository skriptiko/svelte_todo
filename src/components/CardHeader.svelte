<script>
  import { format } from 'date-fns'

  export let countOfTasks

  const now = new Date()

  $: day = format(now, `EEEE, do`)
  $: month = format(now, `LLLL`)
</script>

<div class="CardHeader">
  <div class="CardHeader_Date">
    <h3 class="CardHeader_Day">{day}</h3>
    <span class="CardHeader_Month">{month}</span>
  </div>

  {#if countOfTasks}
    <div class="CardHeader_Count">
      <span>{`${countOfTasks} ${countOfTasks === 1 ? 'task' : 'tasks'}`}</span>
    </div>
  {/if}
</div>

<style lang="scss">
  @import '../scss/CardHeader.scss';
</style>
