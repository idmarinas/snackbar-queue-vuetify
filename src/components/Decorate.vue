<template>
  <div v-if="pen">
    <v-expand-transition>
      <div>
        <v-item-group
          v-model="selected"
          class="pa-2"
          mandatory
        >
          <template v-for="(section, i) in sections">
            <v-item
              :key="`item-${i}`"
              :value="section"
            >
              <template v-slot="{ active, toggle }">
                <v-btn
                  :input-value="active"
                  class="mr-2"
                  text
                  @click="toggle"
                >
                  {{ section }}
                </v-btn>
              </template>
            </v-item>
          </template>
        </v-item-group>

        <v-divider />

        <v-window
          v-model="selected"
          class="grey lighten-5"
        >
          <template v-for="(section, i) in sections">
            <v-window-item
              :key="`window-${i}`"
              :value="section"
            >
              <Prism
                :code="pen[section]"
                :rounded="false"
              />
            </v-window-item>
          </template>
        </v-window>

        <v-divider />
      </div>
    </v-expand-transition>
  </div>
</template>

<script lang="ts">
//-- Dependencies
import Vue from 'vue'
import 'markdown-it-prism'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-sass'
import 'prismjs/components/prism-typescript'

//-- Components
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Prism = require('vue-prism-component')

export default Vue.extend({
  name: 'Decorate',
  components: { Prism },
  props: {
    file: {
      type: String,
      default: ''
    }
  },
  data ()
  {
    return {
      pen: {},
      selected: 'template'
    }
  },
  computed: {
    sections ()
    {
      return [
        'template',
        'script',
        'style'
      ].filter(section => this.pen[section])
    }
  },

  async mounted ()
  {
    await this.importTemplate()
  },

  methods: {
    async importTemplate ()
    {
      try
      {
        const template = await import(/* webpackChunkName: "examples-source" */ `!raw-loader!../examples/${this.file}.vue`)

        this.analyze(template.default)
      }
      catch (err)
      {
        // console.log(err)
      }
    },
    analyze (res)
    {
      this.pen = {
        template: this.parseTemplate('template', res),
        style: this.parseTemplate('style', res),
        script: this.parseTemplate('script', res)
      }
    },
    parseTemplate (target, template)
    {
      const string = `(<${target}(?:.*)?>[\\w\\W]*</${target}>)`
      const regex = new RegExp(string, 'g')
      const result = regex.exec(template) || []

      return result[1] || ''
    }
  }
})
</script>
