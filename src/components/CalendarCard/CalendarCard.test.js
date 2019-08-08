import React from 'react'
import { shallow } from 'enzyme'
import CalendarCard from './CalendarCard'


const setup = (props = {}) => {
  const wrapper = shallow(<CalendarCard />)
  return wrapper
}

describe('CalendarCard', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup()
  })

  it('Should render without crashing',
    () => {
      expect(wrapper).toBeTruthy()
    })
})
