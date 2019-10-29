<template>
    <div class="container">
        <h1>Order varibles</h1>
        <div class="row">
          <div class="col-md-6">
            <form-component
            id="order-form"
            :options="options"
            :formFields="formFields"
            :initialFormData="initialFormData"
            :formState="formState">
            </form-component>
            <div>
              <router-link
                class="btn btn-secondary btn-outline"
                type="button"
                to="/"
                tag="button">Cancel</router-link>
              <button class="btn btn-primary ml-1" type="button">Submit</button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { FormComponent } from '@molgenis/molgenis-ui-form'

export default Vue.extend({
  name: 'OrderView',
  components: {
    FormComponent
  },
  data () {
    return {
      options: {
        showEyeButton: false,
        allowAddingOptions: false
      },
      formFields: [
        {
          type: 'text',
          id: 'project-number',
          label: 'Project number',
          description: 'The OV number.',
          required: () => true,
          disabled: false,
          readOnly: false,
          visible: () => true,
          validate: () => true
        },
        {
          type: 'text',
          id: 'name',
          label: 'Name',
          description: 'Optional name',
          required: () => false,
          disabled: false,
          readOnly: false,
          visible: () => true,
          validate: () => true
        },
        {
          type: 'file',
          id: 'application-form ',
          label: 'Application form ',
          description: 'Word or text file to describe the request.',
          required: () => false,
          disabled: false,
          readOnly: false,
          visible: () => true,
          validate: () => true
        }
      ],
      initialFormData: {},
      formState: {}
    }
  }
})
</script>
