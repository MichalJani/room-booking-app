import React from 'react'
import { shallow } from 'enzyme'
import { CalendarSideBar } from './CalendarSideBar'

describe('CalendarSideBar', () => {
  it('Should render without crashing',
    () => {
      const props = {
        drawerOpen: 'open',
        onClick: jest.fn(),
        events: [{}] }
      const wrapper = shallow(<CalendarSideBar {...props} />)
      expect(wrapper).toBeTruthy()
    })
})
