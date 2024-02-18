import { INCREMENT, DECREMENT } from "../actions/types";
const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCRMENT':
      return { ...state, count: state.count + 1 };
    case 'DECRIMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;