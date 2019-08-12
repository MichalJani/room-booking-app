import React from 'react'
import { shallow } from 'enzyme'
import BottomAppBar from './BottomAppBar'

describe('BottomAppBar', () => {
  it('Should render without crashing',
    () => {
      const wrapper = shallow(<BottomAppBar />)
      expect(wrapper).toBeTruthy()
    })
})
