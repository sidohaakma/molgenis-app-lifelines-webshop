import ToggleFacetOption from '@/types/toggleFacetOption'

export default interface ApplicationState {
    genderOptions: ToggleFacetOption[],
    cohortOptions: ToggleFacetOption[],
    facetFilter: {
      gender: String[],
      cohort: String[]
    }
  }
