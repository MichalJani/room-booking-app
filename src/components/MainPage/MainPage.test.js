import React from 'react';
import { shallow, mount } from 'enzyme';
import MainPage from './MainPage';


describe('MainPage', () => {
  it('Should render without crashing',
    () => {
      const wrapper = shallow(<MainPage />);
      expect(wrapper).toBeTruthy();
    });

});
