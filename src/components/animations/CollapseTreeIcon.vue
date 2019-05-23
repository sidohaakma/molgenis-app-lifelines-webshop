<template>
  <font-awesome-icon
    icon="caret-right"
    class="collapse-tree-icon"
    :style="iconStyle"
  />
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'CollapseTreeIcon',
  props: {
    state: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    iconStyle () {
      return {
        transform: `rotate(${this.state ? 90 : 0}deg)`,
        transition: 'transform 0.2s'
      }
    }
  }
})
</script>
