import React from 'react'
import { shallow } from 'enzyme'
import Logo from './Logo'

const setup = (props = {}) => {
  const wrapper = shallow(<Logo />)
  return wrapper
}

describe('Logo', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup()
  })

  it('Should render without crashing',
    () => {
      expect(wrapper).toBeTruthy()
    })
})
