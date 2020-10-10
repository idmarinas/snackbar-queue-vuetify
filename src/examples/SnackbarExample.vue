<template>
  <IdmSnackbarQueue
    :items="items"
    @remove-idm-snackbar-item="removeItem"
  />
</template>

<script lang="ts">
//-- Dependencies
import Vue from 'vue'

//-- Components
import IdmSnackbarQueue from '../components/IdmSnackbarQueue.vue'

export default Vue.extend({
  components: { IdmSnackbarQueue },
  data ()
  {
    return {
      items: [
        {
          id: 'unique-id',
          message: 'Message of snackbar',
          //-- Props to pass to Snackbar
          props: {
            billboard: true, //-- This is a special snackbar, that take 100% of width.
            color: 'info'
          }
        },
        {
          id: 'unique-id-2',
          message: 'Message of snackbar, other more.'
        }
      ]
    }
  },
  methods: {
    //-- Remove message from queue
    removeItem (idOfMessage)
    {
      const index = this.items.findIndex(val => val.id === idOfMessage)

      if (index !== -1)
      {
        this.items.splice(index, 1)
      }
    }
  }
})
</script>
