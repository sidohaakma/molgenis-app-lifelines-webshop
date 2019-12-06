<template>
  <span class="mg-info-icon">
    <font-awesome-icon
      class="ml-1"
      :icon="faInfoCircle"
      aria-label="info"
      focusable="true"
      tabindex="0"
      :id="id"/>
    <b-popover
        :target="id"
        triggers="hover click focus blur"
        placement="right"
        :title="title">
        <slot></slot>
        <div v-if="href"><a :href="href" target="_blank" rel="noopener noreferrer">{{linkTitle || href}}</a></div>
      </b-popover>
  </span>
</template>

<script>
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  components: { FontAwesomeIcon },
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    href: {
      type: String,
      required: false
    },
    linkTitle: {
      type: String,
      required: false
    }
  },
  data: function () {
    return {
      faInfoCircle
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "node_modules/bootstrap/scss/functions";
  @import "node_modules/bootstrap/scss/variables";

  .mg-info-icon {
    cursor: pointer;
  }

  .popover {
    z-index: $zindex-sticky;
  }
</style>
