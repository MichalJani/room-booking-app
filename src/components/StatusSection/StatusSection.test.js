import React from 'react'
import { shallow } from 'enzyme'
import { StatusSection } from './StatusSection'

describe('StatusSection', () => {
  it('Should render without crashing',
    () => {
      const props = {
        state: 'string',
        name: 'string'
      }
      const wrapper = shallow(<StatusSection {...props} />)
      expect(wrapper).toBeTruthy()
    })
})
