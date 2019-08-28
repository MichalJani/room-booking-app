import React from 'react'
import { shallow } from 'enzyme'
import { CalendarCard } from './CalendarCard'

describe('CalendarCard', () => {
  it('Should render without crashing',
    () => {
      const props = {
        description: 'asd',
        location: 'asd',
        id: 'asd',
        etag: 'asd',
        start: {
          dateTime: 'asd',
          timeZone: 'asd'
        }
      }

      const wrapper = shallow(<CalendarCard {...props} />)
      expect(wrapper).toBeTruthy()
    })
})
