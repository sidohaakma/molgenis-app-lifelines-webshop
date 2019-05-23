<template>
  <div id="Sidebar-view">
    <h3>1. Select cohorts</h3>
    <ul class="list-unstyled">
      <li>
        <gender-facet
        :options="genderOptions"
        :value="selectedGenderOptions"
        />
      </li>
      <li>
        <cohort-facet
        :options="cohortOptions"
        :value="selectedCohortOptions"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import GenderFacet from '../components/facets/GenderFacet.vue'
import CohortFacet from '../components/facets/CohortFacet.vue'

export default Vue.extend({
  name: 'SidebarView',
  components: { GenderFacet, CohortFacet },
  data () {
    return {
      genderOptions: [
        { value: '1', text: 'Male' }, { value: '2', text: 'Female' }
      ],
      selectedGenderOptions: ['2'],
      cohortOptions: [
        { value: '101', text: 'baseline' }, { value: '102', text: 'next' }, { value: '103', text: 'gwas' }
      ],
      selectedCohortOptions: []
    }
  }
})
</script>
