import React from 'react'
import { shallow } from 'enzyme'
import { QuickReservationButtonGroup } from './QuickReservationButtonGroup'

describe('QuickReservationButtonGroup', () => {
  it('Should render without crashing',
    () => {
      const props = {
        buttonVariants: [],
        addEventRequest: jest.fn()
      }
      const wrapper = shallow(<QuickReservationButtonGroup {...props} />)
      expect(wrapper).toBeTruthy()
    })
})
