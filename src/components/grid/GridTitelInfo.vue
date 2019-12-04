<template>
  <div class="grid-titel">
    <span class="variable-title" :id="`variable-${name}`" tabindex="0">
      {{variableName}}
    </span>
    <b-popover
      :target="`variable-${name}`"
      triggers="click focus blur"
      :title="name">
      <dl>
        <template v-if="label">
          <dt>Label</dt>
          <dd>{{label}}</dd>
        </template>
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

<style lang="scss" scoped>
  @import "node_modules/bootstrap/scss/functions";
  @import "node_modules/bootstrap/scss/variables";

  .variable-title {
    cursor: pointer;
    display: block;
    overflow: hidden;
    padding-left: 1rem;
    padding-right: 1rem;
    text-overflow: ellipsis;
  }

  .popover {
    z-index: $zindex-dropdown;
  }
</style>
