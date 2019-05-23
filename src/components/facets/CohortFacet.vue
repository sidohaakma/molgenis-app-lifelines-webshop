<template>
  <toggle-facet facetId="cohort" label="Cohort facet" :options="options" :value="value" />
</template>

<script>
import Vue from 'vue'
import ToggleFacet from './components/ToggleFacet.vue'

export default Vue.extend({
  name: 'CohortFacet',
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
