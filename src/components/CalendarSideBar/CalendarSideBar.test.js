import React from 'react';
import { shallow, mount } from 'enzyme';
import CalendarSideBar from './CalendarSideBar';


fdescribe('CalendarSideBar', () => {
  it('Should render without crashing',
    () => {
      const wrapper = shallow(<CalendarSideBar />);
      expect(wrapper).toBeTruthy();
    });

  fit('Should set Drawer state to true on click', () => {
    const wrapper = mount(<CalendarSideBar />);
    const variable = wrapper.find('[data-test="CalSideBarButton"]')
    console.log(variable)
    expect(wrapper.state('isOpen')).toEqual(true);
    // wrapper.unmount();
  });
});
