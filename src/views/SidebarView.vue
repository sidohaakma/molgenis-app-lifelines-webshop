<template>
  <div id="Sidebar-view">
    <h3>{{ 'lifelines-webshop-sidebar-header' | i18n }}</h3>
    <ul class="list-unstyled">
      <li>
        <toggle-facet facetId="gender" label="Gender" :options="genderOptions" v-model="selectedGenderOptions" />
      </li>
      <li>
        <toggle-facet facetId="cohort" label="Subcohorts" :options="subcohortOptions" v-model="selectedSubcohortOptions" />
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import ToggleFacet from '../components/facets/ToggleFacet.vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  name: 'SidebarView',
  components: { ToggleFacet },
  computed: {
    genderOptions () {
      return this.$store.state.genderOptions
    },
    subcohortOptions () {
      return this.$store.state.subcohortOptions
    },
    selectedGenderOptions: {
      get () {
        return this.$store.state.facetFilter.gender
      },
      set (value) {
        this.$store.commit('updateGenderFilter', value)
      }
    },
    selectedSubcohortOptions: {
      get () {
        return this.$store.state.facetFilter.cohort
      },
      set (value) {
        this.$store.commit('updateSubcohortfilter', value)
      }
    }

  }
})
</script>
