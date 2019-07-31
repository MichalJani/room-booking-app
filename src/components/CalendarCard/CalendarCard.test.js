import React from 'react';
import { shallow, mount } from 'enzyme';
import CalendarCard from './CalendarCard';


describe('CalendarCard', () => {
  it('Should render without crashing',
    () => {
      const wrapper = shallow(<CalendarCard />);
      expect(wrapper).toBeTruthy();
    });
});
