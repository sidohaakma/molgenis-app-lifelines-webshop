import ToggleFacetOption from '@/types/toggleFacetOption'

export default interface ApplicationState {
    genderOptions: ToggleFacetOption[],
    subcohortOptions: ToggleFacetOption[],
    facetFilter: {
      gender: String[],
      subcohort: String[]
    }
  }
