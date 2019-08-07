import React from 'react';
import { shallow, mount } from 'enzyme';
import MainPage from './MainPage';


describe('MainPage', () => {
  it('Should render without crashing',
    () => {
      const wrapper = shallow(<MainPage />);
      expect(wrapper).toBeTruthy();
    });

  it('Should render logo without errors',
    () => {
      const wrapper = shallow(<MainPage />);
      const logo = wrapper.find('Logo')
      expect(logo.length).toBe(1);
    });


});
