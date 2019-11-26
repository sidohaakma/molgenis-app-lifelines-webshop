<template>
    <transition name="slide">
        <div id="alert-message fade" v-if="message" :class="'alert alert-' + type" role="alert">
          <button @click="$emit('toastCloseBtnClicked')" type="button" class="close">
            <span aria-hidden="true">&times;</span>
          </button>
          <span id="message-span">{{ message }}</span>
        </div>
    </transition>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ToastComponent',
  props: {
    type: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    autoHideOnType: {
      type: Array,
      required: false,
      default: () => []
    },
    autoHideTime: {
      type: Number,
      required: false,
      default: () => 10000
    }
  },
  mounted () {
    if (this.autoHideOnType.includes(this.type)) {
      setTimeout(() => {
        this.$emit('toastCloseBtnClicked')
      }, this.autoHideTime)
    }
  }
})
</script>

<style lang="scss">
  .slide-enter-active,
  .slide-leave-active {
    opacity: 1;
    transition: transform 500ms ease-in-out, opacity 500ms ease-in-out;
  }

  .slide-enter,
  .slide-leave-to {
    opacity: 0;
    transform: translateY(-100%);
  }

  .slide-enter-to,
  .slide-leave {
    opacity: 1;
    transform: translateY(0);
  }
</style>
