import React from 'react'
import { shallow } from 'enzyme'
import { CalendarSideBar } from './CalendarSideBar'

const setup = (props = {}) => {
  const wrapper = shallow(<CalendarSideBar {...props} />)
  return wrapper
}

describe('CalendarSideBar', () => {
  let wrapper
  beforeEach(() => {
    const props = {
      drawerOpen: 'open',
      onClick: jest.fn(),
      events: [{}] }
    wrapper = setup(props)
  })

  it('Should render without crashing',
    () => {
      expect(wrapper).toBeTruthy()
    })
})
