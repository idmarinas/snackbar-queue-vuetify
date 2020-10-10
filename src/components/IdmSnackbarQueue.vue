<template>
  <div>
    <IdmSnackbar
      v-for="(item, i) in items"
      :key="item.id"
      v-bind="bindProps(item.props)"
      :value="i == 0"
      @input="eventListening(item.id)"
    >
      {{ item.message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          v-if="items.length > 1"
          text
          v-bind="attrs"
          @click="eventListening(item.id)"
        >
          {{ nextMoreTplText.replace('%s', items.length - 1) }}
        </v-btn>
        <v-btn
          v-else
          icon
          v-bind="attrs"
          @click="eventListening(item.id)"
        >
          <v-icon>{{ closeBtnIcon }}</v-icon>
        </v-btn>
      </template>
    </IdmSnackbar>
  </div>
</template>

<script lang="ts">
//-- Dependencies
import Vue from 'vue'

//-- Components
import { VSnackbar } from 'vuetify/lib'
import IdmSnackbar from './IdmSnackbar.vue'

const props = VSnackbar.options.props

const customProps = {
  billboard: {
    type: Boolean,
    default: false
  },
  nextMoreTplText: {
    type: String,
    default: 'Next (%s more)'
  },
  closeBtnIcon: {
    type: String,
    default: 'mdi-close'
  },
  /**
   * Format for Snackbar
   * {
   *  id: 'unique id string',
   *  message: 'message for snackbar',
   *  props: {
   *    key: 'value of any of props available in VSnackbar including billboard'
   *  }
   * }
   */
  items: {
    type: Array,
    default: () => []
  }
}

Object.assign(props, customProps)

export default Vue.extend({
  name: 'IdmSnackbarQueue',
  components: { IdmSnackbar },
  props,
  methods: {
    eventListening (idSnackbar)
    {
      this.$emit('remove-idm-snackbar-item', idSnackbar)
    },
    bindProps (snackbarProps)
    {
      if (!snackbarProps || typeof snackbarProps !== 'object')
      {
        snackbarProps = {}
      }

      const itemProps = Object.assign({}, this.$props)
      Object.assign(itemProps, snackbarProps)

      itemProps.multiLine = this.billboard || itemProps.billboard
      itemProps.tile = this.billboard || itemProps.billboard

      delete itemProps.items
      delete itemProps.nextMoreTplText
      delete itemProps.closeBtnIcon

      return itemProps
    }
  }
})
</script>
