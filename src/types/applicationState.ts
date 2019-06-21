import ToggleFacetOption from '@/types/toggleFacetOption'

export default interface ApplicationState {
  genderOptions: ToggleFacetOption[],
  cohortOptions: ToggleFacetOption[],
  facetFilter: {
    gender: String[],
    cohort: String[]
  },
  sectionList: String[],
  subSectionList: String[],
  treeStructure: Object[]
  treeSelected: String | null
}
