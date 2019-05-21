<template>
    <button class="ll-facet-option">{{ text }}</button>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'GenderFacet',
  props: {
    text: {
      type: String,
      required: true
    },
    isSelected: {
      type: Boolean,
      default: () => false
    }
  }
})
</script>
