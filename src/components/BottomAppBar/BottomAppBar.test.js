import React from 'react'
import { shallow } from 'enzyme'
import BottomAppBar from './BottomAppBar'

const setup = () => {
  const wrapper = shallow(<BottomAppBar />)
  return wrapper
}

describe('BottomAppBar', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup()
  })

  it('Should render without crashing',
    () => {
      expect(wrapper).toBeTruthy()
    })
})
