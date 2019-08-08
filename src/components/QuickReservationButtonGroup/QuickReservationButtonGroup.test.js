import React from 'react'
import { shallow, mount } from 'enzyme'
import { QuickReservationButtonGroup } from './QuickReservationButtonGroup'

const setup = (props = {}) => {
  const wrapper = shallow(<QuickReservationButtonGroup {...props} />)
  return wrapper
}

describe('QuickReservationButtonGroup', () => {
  let wrapper
  // const buttonVariants = []
  // const addEventRequest = jest.fn()
  beforeEach(() => {
    wrapper = setup(
      { buttonVariants: [] },
      { addEventRequest: jest.fn() }
    )
  })

  it('Should render without crashing',
    () => {
      expect(wrapper).toBeTruthy()
    })

  // it('Should render buttons without crashing',
  //   () => {
  //     const wrapper = shallow(<QuickReservationButtonGroup buttonVariants={[]} addEventRequest={jest.fn()} />)
  //     const component = wrapper.find('button')
  //     expect(component).toBeTruthy()
  //   })

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
