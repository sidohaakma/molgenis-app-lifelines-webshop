import Variant from './Variant'
export interface Variable {
  id: number
  name: string
  label: string
  subsections: number[]
}

export interface VariableWithVariants extends Variable {
  variants: Variant[]
}
