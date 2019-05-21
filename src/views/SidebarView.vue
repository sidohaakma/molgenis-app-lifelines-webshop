<template>
  <div id="Sidebar-view">
    <h3>1. Select cohorts</h3>
    <ul>
      <li>
        <gender-facet
        label="gender facet"
        :options="genderOptions"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import GenderFacet from '../components/facets/GenderFacet.vue'

export default Vue.extend({
  name: 'SidebarView',
  components: { GenderFacet },
  data () {
    return {
      genderOptions: [
        { value: '1', text: 'Male' }, { value: '2', text: 'Female' }
      ]
    }
  }
})
</script>
