<script>
  import MdClose from 'svelte-icons/md/MdClose.svelte';
  import { createEventDispatcher } from 'svelte';
  import { uuid } from '../utils';

  const dispatch = createEventDispatcher();

  let text = ''

  const handlePopupClose = () => {
    dispatch('message', {
      isAddPopupShown: false
    });
  }

  const handleSubmit = () => {
    dispatch('message', {
      isAddPopupShown: false,
      newTodo: {
        id: uuid(),
        completed: false,
        text,
      }
    });

    text = '';
  }
</script>

<div class="AddPopup">
  <div class="AddPopup_Content">
    <div class="AddPopup_Close" on:click={handlePopupClose}><MdClose /></div>

    <textarea
      class="AddPopup_Textarea"
      placeholder="Add new item..."
      bind:value={text}
    ></textarea>

    <div class="AddPopup_Add" on:click={handleSubmit}>Add</div>
  </div>
</div>

<style lang="scss">
  @import '../scss/AddPopup.scss';
</style>
