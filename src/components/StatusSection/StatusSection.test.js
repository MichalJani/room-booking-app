import React from 'react'
import { shallow } from 'enzyme'
import { StatusSection } from './StatusSection'

describe('StatusSection', () => {
  // let wrapper
  // beforeEach(() => {
  //   const props = {
  //     state: 'string',
  //     name: 'string'
  //   }
  //   wrapper = setup(props)
  // })

  it('Should render without crashing',
    () => {
      const wrapper = shallow(<StatusSection />)
      expect(wrapper).toBeTruthy()
    })
})
