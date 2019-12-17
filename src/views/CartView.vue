<template>
  <div id="cart-view" class="row">
    <div class="col">
      <h3>{{$t('lifelines-webshop-cart-header')}}</h3>
      <template v-if="selectedVariableIds.length">
        <div class="mb-3" v-if="selectedVariableIds.length > 0">
          <button type="button" class="btn btn-primary save" @click="onSave">{{$t('lifelines-webshop-save-btn-label')}}</button>
          <router-link
                class="btn btn-warning ml-2"
                type="button"
                to="/order"
                tag="button">
            Order
          </router-link>
        </div>
        <h5>{{$t('lifelines-webshop-cart-selected-list-header')}}</h5>
        <spinner-animation v-if="loading" />
        <div v-else v-for="section in cartTree" :key="section.id">
          <h2>{{section.name}}</h2>
          <div v-for="subsection in section.subsections" :key="subsection.id">
              <h3>{{subsection.name}}</h3>
            <ul>
              <li v-for="variable in subsection.variables" :key="variable.id">
                <span>{{variable.label||variable.name}} {{ variableAssesments[variable.id] }}</span></li>
            </ul>
          </div>
        </div>

        <div class="mb-3" v-if="selectedVariableIds.length > 10">
          <button type="button" class="btn btn-primary save" @click="onSave">{{$t('lifelines-webshop-save-btn-label')}}</button>
          <router-link
                class="btn btn-warning ml-2"
                type="button"
                to="/order"
                tag="button">
            {{$t('lifelines-webshop-order-btn-label')}}
          </router-link>
        </div>
      </template>
      <template v-else>
        <h5>No variables selected</h5>
        <p v-if="isSignedIn">{{$t('lifelines-webshop-cart-info-msg')}}</p>
        <p v-else>{{$t('lifelines-webshop-cart-not-signedin-msg')}}</p>
      </template>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import SpinnerAnimation from '../components/animations/SpinnerAnimation.vue'
import { mapActions, mapGetters, mapState } from 'vuex'

export default Vue.extend({
  name: 'CartView',
  components: { SpinnerAnimation },
  methods: {
    ...mapActions(['save']),
    async onSave () {
      const orderNumber = await this.save()
      this.$router.push({ name: 'load', params: { orderNumber } })
    }
  },
  computed: {
    ...mapGetters(['cartTree', 'isSignedIn']),
    ...mapState(['gridSelection', 'variables', 'assessments']),
    selectedVariableIds () {
      return Object.keys(this.gridSelection)
    },
    variableAssesments () {
      let variableAssesmentsStings = {}
      for (const [variableId, assessmentIds] of Object.entries(
        this.gridSelection
      )) {
        const assessmentNames = assessmentIds.map(
          assessmentId => this.assessments[assessmentId].name
        )
        variableAssesmentsStings[variableId] =
          '( ' + assessmentNames.join(', ') + ' )'
      }

      return variableAssesmentsStings
    },
    loading () {
      return !(Object.keys(this.assessments).length && Object.keys(this.variables).length)
    }
  }
})
</script>
