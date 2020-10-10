<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        Snackbar Queue for Vuetify
      </div>

      <v-spacer />
    </v-app-bar>

    <v-main app class="text-center">
      <v-container>
        <v-btn color="primary" @click.stop="addSnackbar">
          Add new Snackbar
        </v-btn>

        <Decorate file="SnackbarExample" />
      </v-container>
    </v-main>

    <IdmSnackbarQueue
      :items="items"
      @remove-idm-snackbar-item="removeItem"
    />

    <v-footer app>
      2020 - {{ new Date().getFullYear() }}
    </v-footer>
  </v-app>
</template>

<script lang="ts">
//-- Dependencies
import Vue from 'vue'
import { loremIpsum } from 'lorem-ipsum'

//-- Components
import IdmSnackbarQueue from './components/IdmSnackbarQueue.vue'
import Decorate from './components/Decorate.vue'

//-- Tools
import { sample } from 'lodash'

//-- Interfaces
import { SnackbarQueueItem } from '../types'

export default Vue.extend({
  components: { Decorate, IdmSnackbarQueue },
  data ()
  {
    return {
      items: [],
      colors: ['primary', 'warning', 'success', 'info', '']
    }
  },
  methods: {
    addSnackbar ()
    {
      const item: SnackbarQueueItem = {
        id: loremIpsum().replace(/ /g, '-'),
        message: loremIpsum(),
        props: {
          billboard: Math.random() >= 0.5,
          color: sample(this.colors)
        }
      }

      this.items.push(item)
    },

    removeItem (arg0: string | number)
    {
      const index = this.items.findIndex((val: SnackbarQueueItem) => val.id === arg0)

      if (index !== -1)
      {
        this.items.splice(index, 1)
      }
    },

    random (min: number, max: number)
    {
      return min + Math.random() * (max - min)
    }
  }
})
</script>
