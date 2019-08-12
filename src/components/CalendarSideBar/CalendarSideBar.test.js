import React from 'react'
import { shallow } from 'enzyme'
import { CalendarSideBar } from './CalendarSideBar'

describe('CalendarSideBar', () => {
  // let wrapper
  // beforeEach(() => {
  //   const props = {
  //     drawerOpen: 'open',
  //     onClick: jest.fn(),
  //     events: [{}] }
  //   wrapper = setup(props)
  // })

  it('Should render without crashing',
    () => {
      const wrapper = shallow(<CalendarSideBar />)
      expect(wrapper).toBeTruthy()
    })
})
