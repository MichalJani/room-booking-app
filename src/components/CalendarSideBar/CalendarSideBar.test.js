import React from 'react'
import { shallow } from 'enzyme'
import { CalendarSideBar } from './CalendarSideBar'

describe('CalendarSideBar', () => {
  it('Should render without crashing',
    () => {
      const props = {
        drawerOpen: { isDrawerOpen: true },
        onClick: jest.fn(),
        events: [
          {
            description: 'asd',
            location: 'asd',
            id: 'asd',
            etag: 'asd',
            start: {
              dateTime: 'asd',
              timeZone: 'asd'
            }
          }
        ]
      }
      const wrapper = shallow(<CalendarSideBar {...props} />)
      expect(wrapper).toBeTruthy()
    })
})
