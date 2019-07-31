import React from 'react';
import { shallow, mount } from 'enzyme';
import UpperAppBar from './UpperAppBar';


describe('UpperAppBar', () => {
  it('Should render without crashing',
    () => {
      const wrapper = shallow(<UpperAppBar />);
      expect(wrapper).toBeTruthy();
    });
});
