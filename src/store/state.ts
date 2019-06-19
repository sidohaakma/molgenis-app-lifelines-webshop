import ApplicationState from '@/types/ApplicationState'

const state: ApplicationState = {
  genderOptions: [{ value: '1', text: 'Male' }, { value: '2', text: 'Female' }],
  cohortOptions: [{ value: '101', text: 'baseline' }, { value: '102', text: 'next' }, { value: '103', text: 'gwas' }],
  facetFilter: {
    gender: [],
    cohort: []
  },
  treeStructure: [ // FIXME test data, fill with something more useful later
    {
      name: 'foo',
      count: 44,
      open: true,
      children: [
        {
          name: 'test-child 1',
          count: 12
        },
        {
          name: 'test-child 2'
        },
        {
          name: 'test-child 3',
          count: 0
        },
        {
          name: 'test-child 4'
        }
      ]
    },
    {
      name: 'bar'
    },
    {
      name: 'baz',
      children: [
        {
          name: 'Hello world',
          count: 25
        }
      ]
    },
    {
      name: 'a long text to fill the line',
      count: 25,
      children: [
        {
          name: 'test-child with a very long line of text',
          count: 25
        }
      ]
    }
  ], // FIXME END
  treeSelected: null
}

export default state
