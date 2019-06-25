import ToggleFacetOption from '@/types/toggleFacetOption'
import Assesment from './Assesment'

export default interface ApplicationState {
    genderOptions: ToggleFacetOption[],
    subcohortOptions: ToggleFacetOption[],
    facetFilter: {
      gender: String[],
      subcohort: String[]
    },
    assesments: Assesment[]
  }
