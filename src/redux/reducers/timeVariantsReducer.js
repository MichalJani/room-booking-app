import { timeVariants } from '../../utils/consts';

const initialState = Object.keys(timeVariants);

const timeVariantsReducer = (state = initialState) => {
  return state;
};

export default timeVariantsReducer;
