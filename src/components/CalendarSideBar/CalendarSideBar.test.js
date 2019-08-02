import React from 'react';
import { shallow, mount } from 'enzyme';
import CalendarSideBar from './CalendarSideBar';


describe('CalendarSideBar', () => {
  it('Should render without crashing',
    () => {
      const wrapper = shallow(<CalendarSideBar />);
      expect(wrapper).toBeTruthy();
    });

  it('Should set Drawer state to true on click', () => {
    const wrapper = shallow(<CalendarSideBar />);
    wrapper.find('Button').at(0).simulate('click');
    expect(wrapper.state('isOpen')).toEqual(true);
    // wrapper.unmount();
  });
});
