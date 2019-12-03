<template>
  <div class="grid-titel">
    <span class="variable-title" :id="`variable-${name}`">
      {{variableName}}
    </span>
    <b-popover
      :target="`variable-${name}`"
      triggers="hover click"
      :title="name">
      <dl>
        <dt>Question (in English)</dt>
        <dd>N/A</dd>
        <dt>Question (in Dutch)</dt>
        <dd>N/A</dd>
        <dt>Datatype</dt>
        <dd>N/A</dd>
      </dl>
    </b-popover>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'GridTitelInfo',
  props: {
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
