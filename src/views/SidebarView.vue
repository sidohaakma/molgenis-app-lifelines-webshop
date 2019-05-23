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
      selectedGenderOptions: ['2'],
      selectedCohortOptions: []
    }
  },
  computed: {
    genderOptions () {
      return this.$store.state.genderOptions
    },
    cohortOptions () {
      return this.$store.state.cohortOptions
    }
  }
})
</script>
