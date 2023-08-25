import { render } from '@redwoodjs/testing/web'

import CategoryNav from './CategoryNav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CategoryNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CategoryNav />)
    }).not.toThrow()
  })
})
