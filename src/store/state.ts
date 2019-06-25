import ApplicationState from '@/types/ApplicationState'

const state: ApplicationState = {
  genderOptions: [
    { value: '1', text: 'Male' },
    { value: '2', text: 'Female' }
  ],
  subcohortOptions: [
    { value: 'gwas', text: 'GWAS' },
    { value: 'ugli', text: 'UGLI' },
    { value: 'deep', text: 'DEEP' },
    { value: 'dag3', text: 'DAG3' }
  ],
  facetFilter: {
    gender: [],
    subcohort: []
  },
  sectionList: [],
  subSectionList: [],
  treeStructure: [],
  treeSelected: ''
}

export default state
