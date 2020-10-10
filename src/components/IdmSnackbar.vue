<script lang="ts">
//-- Dependencies
import Vue from 'vue'
import { VSnackbar } from 'vuetify/lib'

export default Vue.extend({
  name: 'IdmSnackbar',
  extends: VSnackbar,
  props: {
    billboard: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    genWrapper ()
    {
      const wrapper = VSnackbar.options.methods.genWrapper.call(this)

      wrapper.data.staticClass = `${wrapper.data.staticClass}${this.billboard ? ' v-snack__billboard' : ''}`

      return wrapper
    }
  }
})
</script>

<style lang="sass">
  .v-snack__wrapper.v-snack__billboard
    min-width: 100%
</style>
