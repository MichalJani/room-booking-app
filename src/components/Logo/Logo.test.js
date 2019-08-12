import React from 'react';
import { shallow, mount } from 'enzyme';
import Logo from './Logo';


describe('Logo', () => {
  it('Should render without crashing',
    () => {
      const wrapper = shallow(<Logo />);
      expect(wrapper).toBeTruthy();
    });
});