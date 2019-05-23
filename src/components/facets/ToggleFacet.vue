<template>
  <div class="ll-facet-container">
      <label :for="facetOptionsId">{{ label }}</label>
      <ul :id="facetOptionsId" class="list-unstyled list-inline">
          <li class="list-inline-item" v-for="option in options" :key=option.value>
              <facet-option :text="option.text" :isSelected="value.includes(option.value)" @facetToggled="handleFacetToggle(option)"/>
          </li>
      </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import FacetOption from './FacetOption.vue'

export default Vue.extend({
  name: 'ToggleFacet',
  components: { FacetOption },
  props: {
    facetId: {
      type: String,
      required: true
    },
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
  },
  computed: {
    facetOptionsId () {
      return this.facetId + '-options'
    }
  },
  methods: {
    handleFacetToggle (option) {
      if (this.value.includes(option.value)) {
        this.value.splice(this.value.indexOf(option.value), 1)
      } else {
        this.value.push(option.value)
      }
      this.$emit('change', this.value)
    }
  }
})
</script>
