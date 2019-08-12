import React from 'react'
import { shallow } from 'enzyme'
import { QuickReservationButtonGroup } from './QuickReservationButtonGroup'

describe('QuickReservationButtonGroup', () => {
  // let wrapper
  // beforeEach(() => {
  //   const props = {
  //     buttonVariants: [],
  //     addEventRequest: jest.fn()
  //   }
  //   wrapper = setup(props)
  // })

  it('Should render without crashing',
    () => {
      const wrapper = shallow(<QuickReservationButtonGroup />)
      expect(wrapper).toBeTruthy()
    })
})
