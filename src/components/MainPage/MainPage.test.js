import React from 'react'
import { shallow } from 'enzyme'
import { MainPage } from './MainPage'

const setup = (props = {}) => {
  const wrapper = shallow(<MainPage {...props} />)
  return wrapper
}

describe('MainPage', () => {
  let wrapper
  beforeEach(() => {
    const props = {
      roomState: 'occupied'
    }
    wrapper = setup(props)
  })

  it('Should render without crashing',
    () => {
      expect(wrapper).toBeTruthy()
    })
})
