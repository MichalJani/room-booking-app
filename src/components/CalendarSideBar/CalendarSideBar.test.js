import React from 'react';
import { shallow, mount } from 'enzyme';
import CalendarSideBar from './CalendarSideBar';


describe('CalendarSideBar', () => {
  it('Should render without crashing',
    () => {
      const wrapper = shallow(<CalendarSideBar />);
      expect(wrapper).toBeTruthy();
    });
});
