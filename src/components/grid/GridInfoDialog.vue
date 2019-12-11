<template>
  <div>
    <div class="info-overlay"></div>
    <div class="info-dialog">
      <div class="info-dialog-container rounded-sm overflow-hidden box-shadow">
        <div class="info-dialog-header d-flex align-items-center"> <h4>Smoking habits <span>SMKDRVHABIT</span></h4> <span class="close ml-auto"><font-awesome-icon color="white" size="md" icon="times" @click="$emit('close')" /></span></div>
        <div class="info-dialog-content">
          <slot></slot>
          <p><strong>Found in set:</strong><br />Smoking/tobacco use, Exposure to smoking</p>
          <p><strong>Description (en):</strong><br />Smoking habits (excl. recent starters, exsmokers who smoked less than a year, current/exsmokers without info on duration)</p>
          <p><strong>Description (nl):</strong><br />Rookgewoonten (excl. recente starters, exsmokers die minder dan een jaar rookten, huidige / exsmokers zonder info over duur)</p>
          <p><strong>Categorical values:</strong><br />Never smoker, Exsmoker, Current smoker</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTimes)

export default Vue.extend({
  name: 'GridInfoDialog',
  components: { FontAwesomeIcon }
})
</script>

<style lang="scss" scoped>
  svg{
    cursor: pointer;
    &:hover path{
      fill: rgba(255,255,255,0.6);
    }
  }
  .info-overlay{
    position: fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    z-index: 1031;
    background-color: rgba(0,0,0,0.3);
  }
.info-dialog{
  .info-dialog-container{
    position: fixed;
    z-index: 1032;
    background-color: white;
    margin-right: 2rem;
    .info-dialog-header{
      h4{
        color:white;
        margin: 0;
        span{
          font-size: 0.8rem;
          font-style: italic;
        }
      }
      background-color: $primary;
      margin-bottom: 0.5rem;
      padding: 0.5rem 1rem;
    }
    .info-dialog-content{
      padding: 1rem;
      padding-top: 0.5rem;
      overflow-y: auto;
      max-height: calc(100vh - 18rem);
    }
  }
  position: absolute;
  left:15rem;
  top:0;
  bottom:0;
}
</style>
