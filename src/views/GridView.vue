<template>
  <div id="grid-view" class="row">
    <div class="col-sm-12">
      <grid-layout
              :layout.sync="layout"
              :col-num="12"
              :row-height="1"
              :is-draggable="false"
              :is-resizable="false"
              :is-mirrored="false"
              :vertical-compact="false"
              :margin="[10, 10]"

              :use-css-transforms="true"
      >

          <grid-item v-for="item in layout" :key="item" style="{ border: 1 solid }"
                    :x="item.x"
                    :y="item.y"
                    :w="1"
                    :h="1"
                    :i="item.value">
              {{item.i}}
          </grid-item>
      </grid-layout>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { GridLayout, GridItem } from 'vue-grid-layout'

export default Vue.extend({
  name: 'GridView',
  data: function () {
    return {
      layout: [
        { 'x': 0, 'y': 0, 'w': 2, 'h': 2, 'value': '0' },
	      { 'x': 2, 'y': 0, 'w': 2, 'h': 2, 'value': '1' },
	      { 'x': 4, 'y': 0, 'w': 2, 'h': 2, 'value': '2' },
	      { 'x': 6, 'y': 0, 'w': 2, 'h': 2, 'value': '3' },
	      { 'x': 8, 'y': 0, 'w': 2, 'h': 2, 'value': '4' },
	      { 'x': 10, 'y': 0, 'w': 2, 'h': 2, 'value': '5' },
	      { 'x': 0, 'y': 1, 'w': 2, 'h': 2, 'value': '0' },
	      { 'x': 2, 'y': 1, 'w': 2, 'h': 2, 'value': '1' },
	      { 'x': 4, 'y': 1, 'w': 2, 'h': 2, 'value': '2' },
	      { 'x': 6, 'y': 1, 'w': 2, 'h': 2, 'value': '3' },
	      { 'x': 8, 'y': 1, 'w': 2, 'h': 2, 'value': '4' },
	      { 'x': 10, 'y': 1, 'w': 2, 'h': 2, 'value': '5' }
      ]
    }
  },
  components: { GridLayout, GridItem }
})
</script>
