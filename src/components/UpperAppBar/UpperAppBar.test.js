import React from 'react'
import { shallow } from 'enzyme'
import UpperAppBar from './UpperAppBar'

const setup = (props = {}) => {
  const wrapper = shallow(<UpperAppBar />)
  return wrapper
}

describe('UpperAppBar', () => {
  describe('Have props', () => {
    let wrapper
    beforeEach(() => {
      wrapper = setup()
    })

    it('Should render without crashing',
      () => {
        expect(wrapper).toBeTruthy()
      })
  })
})
