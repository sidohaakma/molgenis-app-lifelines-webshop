<template>
  <toggle-facet facetId="gender" label="Gender facet" :options="options" :value="value" />
</template>

<script>
import Vue from 'vue'
import ToggleFacet from './components/ToggleFacet.vue'

export default Vue.extend({
  name: 'GenderFacet',
  components: { ToggleFacet },
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: Array,
      default: () => []
    }
  }
})
</script>
