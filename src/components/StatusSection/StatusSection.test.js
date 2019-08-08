import React from 'react'
import { shallow } from 'enzyme'
import { StatusSection } from './StatusSection'

const setup = (props = {}) => {
  const wrapper = shallow(<StatusSection {...props} />)
  return wrapper
}

describe('StatusSection', () => {
  let wrapper
  beforeEach(() => {
    const props = {
      state: 'string',
      name: 'string'
    }
    wrapper = setup(props)
  })

  it('Should render without crashing',
    () => {
      expect(wrapper).toBeTruthy()
    })
})
