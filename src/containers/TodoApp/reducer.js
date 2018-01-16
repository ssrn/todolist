import * as ActionTypes from '../TodoApp/constants';

const initialState = {
  value: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_INPUT_VALUE:
      return {
        ...state,
        value: action.payload.value,
        touched: true,
      };
    default:
      return state;
  }
};