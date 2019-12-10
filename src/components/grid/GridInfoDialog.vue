<template>
  <div>
    <div class="info-overlay"></div>
    <div class="info-dialog">
      <div class="info-dialog-container rounded-sm overflow-hidden box-shadow">
        <div class="info-dialog-header d-flex align-items-center"> <h4>Title</h4> <span class="close ml-auto"><font-awesome-icon color="white" size="md" icon="times" @click="$emit('close')" /></span></div>
        <div class="info-dialog-content">
          <slot></slot>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at eleifend orci, vitae maximus felis. Aenean justo mauris, ullamcorper sed nulla id, tincidunt semper turpis. Aliquam ultrices elit non vehicula rhoncus. Cras porttitor justo magna, in mollis odio vulputate sit amet. Sed vitae lorem non felis semper vehicula a commodo ex. Aenean id ante eget nunc commodo viverra lobortis vel nulla. Pellentesque vestibulum porttitor neque, sit amet condimentum massa maximus a. Aenean eleifend velit ut arcu ullamcorper elementum. Phasellus elementum eu augue vel malesuada. Vestibulum ut dui sed nulla dictum fermentum in in tellus. Duis porttitor sed turpis in tempor. Pellentesque vitae vestibulum felis. Proin porta, arcu at efficitur hendrerit, neque orci bibendum felis, eu pharetra ipsum enim at mauris. Integer porttitor, diam quis varius egestas, augue diam venenatis turpis, ac auctor nisl dui eu erat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at eleifend orci, vitae maximus felis. Aenean justo mauris, ullamcorper sed nulla id, tincidunt semper turpis. Aliquam ultrices elit non vehicula rhoncus. Cras porttitor justo magna, in mollis odio vulputate sit amet. Sed vitae lorem non felis semper vehicula a commodo ex. Aenean id ante eget nunc commodo viverra lobortis vel nulla. Pellentesque vestibulum porttitor neque, sit amet condimentum massa maximus a. Aenean eleifend velit ut arcu ullamcorper elementum. Phasellus elementum eu augue vel malesuada. Vestibulum ut dui sed nulla dictum fermentum in in tellus. Duis porttitor sed turpis in tempor. Pellentesque vitae vestibulum felis. Proin porta, arcu at efficitur hendrerit, neque orci bibendum felis, eu pharetra ipsum enim at mauris. Integer porttitor, diam quis varius egestas, augue diam venenatis turpis, ac auctor nisl dui eu erat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at eleifend orci, vitae maximus felis. Aenean justo mauris, ullamcorper sed nulla id, tincidunt semper turpis. Aliquam ultrices elit non vehicula rhoncus. Cras porttitor justo magna, in mollis odio vulputate sit amet. Sed vitae lorem non felis semper vehicula a commodo ex. Aenean id ante eget nunc commodo viverra lobortis vel nulla. Pellentesque vestibulum porttitor neque, sit amet condimentum massa maximus a. Aenean eleifend velit ut arcu ullamcorper elementum. Phasellus elementum eu augue vel malesuada. Vestibulum ut dui sed nulla dictum fermentum in in tellus. Duis porttitor sed turpis in tempor. Pellentesque vitae vestibulum felis. Proin porta, arcu at efficitur hendrerit, neque orci bibendum felis, eu pharetra ipsum enim at mauris. Integer porttitor, diam quis varius egestas, augue diam venenatis turpis, ac auctor nisl dui eu erat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at eleifend orci, vitae maximus felis. Aenean justo mauris, ullamcorper sed nulla id, tincidunt semper turpis. Aliquam ultrices elit non vehicula rhoncus. Cras porttitor justo magna, in mollis odio vulputate sit amet. Sed vitae lorem non felis semper vehicula a commodo ex. Aenean id ante eget nunc commodo viverra lobortis vel nulla. Pellentesque vestibulum porttitor neque, sit amet condimentum massa maximus a. Aenean eleifend velit ut arcu ullamcorper elementum. Phasellus elementum eu augue vel malesuada. Vestibulum ut dui sed nulla dictum fermentum in in tellus. Duis porttitor sed turpis in tempor. Pellentesque vitae vestibulum felis. Proin porta, arcu at efficitur hendrerit, neque orci bibendum felis, eu pharetra ipsum enim at mauris. Integer porttitor, diam quis varius egestas, augue diam venenatis turpis, ac auctor nisl dui eu erat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at eleifend orci, vitae maximus felis. Aenean justo mauris, ullamcorper sed nulla id, tincidunt semper turpis. Aliquam ultrices elit non vehicula rhoncus. Cras porttitor justo magna, in mollis odio vulputate sit amet. Sed vitae lorem non felis semper vehicula a commodo ex. Aenean id ante eget nunc commodo viverra lobortis vel nulla. Pellentesque vestibulum porttitor neque, sit amet condimentum massa maximus a. Aenean eleifend velit ut arcu ullamcorper elementum. Phasellus elementum eu augue vel malesuada. Vestibulum ut dui sed nulla dictum fermentum in in tellus. Duis porttitor sed turpis in tempor. Pellentesque vitae vestibulum felis. Proin porta, arcu at efficitur hendrerit, neque orci bibendum felis, eu pharetra ipsum enim at mauris. Integer porttitor, diam quis varius egestas, augue diam venenatis turpis, ac auctor nisl dui eu erat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at eleifend orci, vitae maximus felis. Aenean justo mauris, ullamcorper sed nulla id, tincidunt semper turpis. Aliquam ultrices elit non vehicula rhoncus. Cras porttitor justo magna, in mollis odio vulputate sit amet. Sed vitae lorem non felis semper vehicula a commodo ex. Aenean id ante eget nunc commodo viverra lobortis vel nulla. Pellentesque vestibulum porttitor neque, sit amet condimentum massa maximus a. Aenean eleifend velit ut arcu ullamcorper elementum. Phasellus elementum eu augue vel malesuada. Vestibulum ut dui sed nulla dictum fermentum in in tellus. Duis porttitor sed turpis in tempor. Pellentesque vitae vestibulum felis. Proin porta, arcu at efficitur hendrerit, neque orci bibendum felis, eu pharetra ipsum enim at mauris. Integer porttitor, diam quis varius egestas, augue diam venenatis turpis, ac auctor nisl dui eu erat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at eleifend orci, vitae maximus felis. Aenean justo mauris, ullamcorper sed nulla id, tincidunt semper turpis. Aliquam ultrices elit non vehicula rhoncus. Cras porttitor justo magna, in mollis odio vulputate sit amet. Sed vitae lorem non felis semper vehicula a commodo ex. Aenean id ante eget nunc commodo viverra lobortis vel nulla. Pellentesque vestibulum porttitor neque, sit amet condimentum massa maximus a. Aenean eleifend velit ut arcu ullamcorper elementum. Phasellus elementum eu augue vel malesuada. Vestibulum ut dui sed nulla dictum fermentum in in tellus. Duis porttitor sed turpis in tempor. Pellentesque vitae vestibulum felis. Proin porta, arcu at efficitur hendrerit, neque orci bibendum felis, eu pharetra ipsum enim at mauris. Integer porttitor, diam quis varius egestas, augue diam venenatis turpis, ac auctor nisl dui eu erat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at eleifend orci, vitae maximus felis. Aenean justo mauris, ullamcorper sed nulla id, tincidunt semper turpis. Aliquam ultrices elit non vehicula rhoncus. Cras porttitor justo magna, in mollis odio vulputate sit amet. Sed vitae lorem non felis semper vehicula a commodo ex. Aenean id ante eget nunc commodo viverra lobortis vel nulla. Pellentesque vestibulum porttitor neque, sit amet condimentum massa maximus a. Aenean eleifend velit ut arcu ullamcorper elementum. Phasellus elementum eu augue vel malesuada. Vestibulum ut dui sed nulla dictum fermentum in in tellus. Duis porttitor sed turpis in tempor. Pellentesque vitae vestibulum felis. Proin porta, arcu at efficitur hendrerit, neque orci bibendum felis, eu pharetra ipsum enim at mauris. Integer porttitor, diam quis varius egestas, augue diam venenatis turpis, ac auctor nisl dui eu erat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at eleifend orci, vitae maximus felis. Aenean justo mauris, ullamcorper sed nulla id, tincidunt semper turpis. Aliquam ultrices elit non vehicula rhoncus. Cras porttitor justo magna, in mollis odio vulputate sit amet. Sed vitae lorem non felis semper vehicula a commodo ex. Aenean id ante eget nunc commodo viverra lobortis vel nulla. Pellentesque vestibulum porttitor neque, sit amet condimentum massa maximus a. Aenean eleifend velit ut arcu ullamcorper elementum. Phasellus elementum eu augue vel malesuada. Vestibulum ut dui sed nulla dictum fermentum in in tellus. Duis porttitor sed turpis in tempor. Pellentesque vitae vestibulum felis. Proin porta, arcu at efficitur hendrerit, neque orci bibendum felis, eu pharetra ipsum enim at mauris. Integer porttitor, diam quis varius egestas, augue diam venenatis turpis, ac auctor nisl dui eu erat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at eleifend orci, vitae maximus felis. Aenean justo mauris, ullamcorper sed nulla id, tincidunt semper turpis. Aliquam ultrices elit non vehicula rhoncus. Cras porttitor justo magna, in mollis odio vulputate sit amet. Sed vitae lorem non felis semper vehicula a commodo ex. Aenean id ante eget nunc commodo viverra lobortis vel nulla. Pellentesque vestibulum porttitor neque, sit amet condimentum massa maximus a. Aenean eleifend velit ut arcu ullamcorper elementum. Phasellus elementum eu augue vel malesuada. Vestibulum ut dui sed nulla dictum fermentum in in tellus. Duis porttitor sed turpis in tempor. Pellentesque vitae vestibulum felis. Proin porta, arcu at efficitur hendrerit, neque orci bibendum felis, eu pharetra ipsum enim at mauris. Integer porttitor, diam quis varius egestas, augue diam venenatis turpis, ac auctor nisl dui eu erat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at eleifend orci, vitae maximus felis. Aenean justo mauris, ullamcorper sed nulla id, tincidunt semper turpis. Aliquam ultrices elit non vehicula rhoncus. Cras porttitor justo magna, in mollis odio vulputate sit amet. Sed vitae lorem non felis semper vehicula a commodo ex. Aenean id ante eget nunc commodo viverra lobortis vel nulla. Pellentesque vestibulum porttitor neque, sit amet condimentum massa maximus a. Aenean eleifend velit ut arcu ullamcorper elementum. Phasellus elementum eu augue vel malesuada. Vestibulum ut dui sed nulla dictum fermentum in in tellus. Duis porttitor sed turpis in tempor. Pellentesque vitae vestibulum felis. Proin porta, arcu at efficitur hendrerit, neque orci bibendum felis, eu pharetra ipsum enim at mauris. Integer porttitor, diam quis varius egestas, augue diam venenatis turpis, ac auctor nisl dui eu erat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at eleifend orci, vitae maximus felis. Aenean justo mauris, ullamcorper sed nulla id, tincidunt semper turpis. Aliquam ultrices elit non vehicula rhoncus. Cras porttitor justo magna, in mollis odio vulputate sit amet. Sed vitae lorem non felis semper vehicula a commodo ex. Aenean id ante eget nunc commodo viverra lobortis vel nulla. Pellentesque vestibulum porttitor neque, sit amet condimentum massa maximus a. Aenean eleifend velit ut arcu ullamcorper elementum. Phasellus elementum eu augue vel malesuada. Vestibulum ut dui sed nulla dictum fermentum in in tellus. Duis porttitor sed turpis in tempor. Pellentesque vitae vestibulum felis. Proin porta, arcu at efficitur hendrerit, neque orci bibendum felis, eu pharetra ipsum enim at mauris. Integer porttitor, diam quis varius egestas, augue diam venenatis turpis, ac auctor nisl dui eu erat.</p>
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
    background-color: rgba(0,0,0,0.7);
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
      }
      background-color: $primary;
      margin-bottom: 0.5rem;
      padding: 0.5rem 1rem;
    }
    .info-dialog-content{
      padding: 1rem;
      padding-top: 0.5rem;
      overflow-y:scroll;
      max-height: calc(100vh - 18rem);
    }
  }
  position: absolute;
  left:15rem;
  top:0;
  bottom:0;
}
</style>
