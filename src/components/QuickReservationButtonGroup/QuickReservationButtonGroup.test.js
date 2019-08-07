import React from 'react'
import { shallow, mount } from 'enzyme'
import { QuickReservationButtonGroup } from './QuickReservationButtonGroup'


describe('QuickReservationButtonGroup', () => {
  it('Should render without crashing',
    () => {
      const wrapper = shallow(<QuickReservationButtonGroup buttonVariants={[]} addEventRequest={jest.fn()} />)
      expect(wrapper).toBeTruthy()
    })

  // it('Should render ButtonGroup without crashing',
  //   () => {
  //     const wrapper = shallow(<QuickReservationButtonGroup buttonVariants={[]} addEventRequest={jest.fn()} />);
  //     const ButtonGroup = wrapper.find(<ButtonGroup />)
  //     expect(ButtonGroup).toBeTruthy();
  //   });


  // it('should call mockFunction on button click', () => {
  //   const mockFunction = jest.fn();
  //   const wrapper = shallow(
  //     <QuickReservationButtonGroup />
  //   );
  //   // [href="foo"]
  //   wrapper.find(Button[key = 15]).simulate('click');
  //   expect(mockFunction).toHaveBeenCalled();
  //   wrapper.unmount();
  // });

})

// key={numOfMinutes} onClick={() => quickBook(numOfMinutes)
