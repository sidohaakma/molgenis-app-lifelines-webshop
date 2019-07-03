import FacetOption from '@/types/FacetOption'
import { Variable, VariableWithVariants } from '@/types/Variable'
import Count from '@/types/Count'
import Assessment from '@/types/Assessment'
import GridSelection from '@/types/GridSelection'
import Filter from './Filter';

export type Toast = {
  type: 'danger' | 'success',
  message: string
}

export default interface ApplicationState {
  toast: Toast | null,
  genderOptions: FacetOption[],
  subcohortOptions: FacetOption[],
  ageGroupOptions: FacetOption[],
  ageAtOptions: FacetOption[],
  facetFilter: Filter,
  sectionList: string[],
  subSectionList: string[],
  variables: { [key:number]: Variable }
  gridVariables: VariableWithVariants[]
  variantCounts: Count[]
  assessments: Assessment[]
  treeStructure: Object[]
  treeSelected: number
  gridSelection: GridSelection
}
