import { Section } from './Section'
import { Variable } from './Variable'

interface CartVariable extends Variable {
  subsection: number
}

interface CartSubsection {
  name: string
  variables: CartVariable[]
}

export default interface CartSection extends Section {
  subsections: CartSubsection[]
}
