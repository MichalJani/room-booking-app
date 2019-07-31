import React from 'react';
import { shallow, mount } from 'enzyme';
import QuickReservationButtonGroup from './QuickReservationButtonGroup';


describe('QuickReservationButtonGroup', () => {
  it('Should render without crashing',
    () => {
      const wrapper = shallow(<QuickReservationButtonGroup />);
      expect(wrapper).toBeTruthy();
    });
});
