import React from 'react'
import { shallow } from 'enzyme'
import { QuickReservationButtonGroup } from './QuickReservationButtonGroup'

const setup = (props = {}) => {
  const wrapper = shallow(<QuickReservationButtonGroup {...props} />)
  return wrapper
}

describe('QuickReservationButtonGroup', () => {
  let wrapper
  beforeEach(() => {
    const props = {
      buttonVariants: [],
      addEventRequest: jest.fn()
    }
    wrapper = setup(props)
  })

  it('Should render without crashing',
    () => {
      expect(wrapper).toBeTruthy()
    })
})
