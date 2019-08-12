import React from 'react'
import { shallow } from 'enzyme'
import { MainPage } from './MainPage'

describe('MainPage', () => {
  // let wrapper
  // beforeEach(() => {
  //   const props = {
  //     roomState: 'occupied'
  //   }
  //   wrapper = setup(props)
  // })

  it('Should render without crashing',
    () => {
      const wrapper = shallow(<MainPage />)
      expect(wrapper).toBeTruthy()
    })
})
