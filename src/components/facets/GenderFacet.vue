<template>
  <div id="age-facet" class="facet-container">
      <label for="gender-options">{{ label }}</label>
      <ul id="gender-options">
          <li v-for="option in options" :key=option.value>
              <facet-option :text="option.text" />
          </li>
      </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import FacetOption from './components/FacetOption.vue'

export default Vue.extend({
  name: 'GenderFacet',
  components: { FacetOption },
  props: {
    label: {
      type: String,
      required: true
    },
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
