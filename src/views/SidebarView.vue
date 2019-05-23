<template>
  <div id="Sidebar-view">
    <h3>{{ 'lifelines-webshop-sidebar-header' | i18n }}</h3>
    <ul class="list-unstyled">
      <li>
        <toggle-facet facetId="gender" label="Gender facet" :options="genderOptions" v-model="selectedGenderOptions" />
      </li>
      <li>
        <toggle-facet facetId="cohort" label="Cohort facet" :options="cohortOptions" :value="selectedCohortOptions" />
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import ToggleFacet from '../components/facets/ToggleFacet.vue'

export default Vue.extend({
  name: 'SidebarView',
  components: { ToggleFacet },
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
