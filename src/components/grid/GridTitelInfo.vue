<template>
  <div class="grid-titel">
      <font-awesome-icon
        v-if="subvariables && !subvariables.length>0"
        class="ml-1 grid-variable-info"
        icon="info-circle"
        aria-label="info"
        focusable="true"
      />
    <span class="variable-title" :title="variableName" :id="`variable-${name}`" tabindex="0">
      {{variableName}}
    </span>
  </div>
</template>

<script>
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faInfoCircle)

export default Vue.extend({
  name: 'GridTitelInfo',
  components: { FontAwesomeIcon },
  props: {
    subvariables: {
      type: Array,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false
    }
  },
  computed: {
    variableName () {
      return this.label ? this.label : this.name
    }
  }
})
</script>

<style lang="scss" scoped>
.grid-titel:hover {
  cursor: pointer;

  .grid-variable-info {
    opacity: 0.7;
  }
}

.variable-title {
  display: block;
  margin-right: 1rem;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
}

.grid-variable-info {
  color: $primary;
  left: -2.7rem;
  opacity: 0;
  position: absolute;
  top: 0.55rem;
  transition: opacity 0.2s;
}
</style>
