import React from 'react'
import { shallow } from 'enzyme'
import { Logo } from './Logo'

describe('Logo', () => {
  it('Should render without crashing',
    () => {
      const props = {
        src: 'asd',
        alt: 'asd'
      }
      const wrapper = shallow(<Logo {...props} />)
      expect(wrapper).toBeTruthy()
    })
})
