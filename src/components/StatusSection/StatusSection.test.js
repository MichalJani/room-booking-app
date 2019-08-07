import React from 'react';
import { shallow, mount } from 'enzyme';
import StatusSection from './StatusSection';


describe('StatusSection', () => {
  it('Should render without crashing',
    () => {
      const wrapper = shallow(<StatusSection />);
      expect(wrapper).toBeTruthy();
    });
});
