<template>
  <div class="facet-container">
      <label
        v-if="label"
        @click="handleFacetToggle"
         >
        {{ label }}
        <font-awesome-icon
          icon="chevron-up"
          v-if="collapsable"
          :class="{ 'fa-rotate-180': collapsed}"
        />
      </label>
      <div v-show="!collapsed" class="facet-container-content">
       <slot></slot>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faChevronUp)

export default Vue.extend({
  name: 'FacetContainer',
  props: {
    facetId: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false
    },
    collapsable: {
      type: Boolean,
      required: false,
      default: () => false
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  methods: {
    handleFacetToggle () {
      if (!this.collapsable) {
        return
      }
      this.$emit('facetToggle', {
        facetId: this.facetId,
        collapsed: this.collapsed
      }
      )
    }
  },
  components: {
    FontAwesomeIcon
  }
})
</script>

<style scoped>
  .facet-container {
    margin-bottom: 1rem;
  }

  label {
    cursor: grab;
  }
</style>
