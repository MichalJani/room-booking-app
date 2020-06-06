import React from 'react'
import { shallow } from 'enzyme'
import { MainPage } from './MainPage'

describe('MainPage', () => {
  it('Should render without crashing',
    () => {
      const props = {
        roomState: 'OCCUPIED'
      }
      const wrapper = shallow(<MainPage {...props} />)
      expect(wrapper).toBeTruthy()
    })
})
