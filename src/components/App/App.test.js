import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const setup = (props = {}) => {
  const wrapper = shallow(<App />)
  return wrapper
}

describe('App', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup()
  })

  it('Should render without crashing',
    () => {
      expect(wrapper).toBeTruthy()
    })
})
