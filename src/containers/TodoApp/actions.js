/**
 * TodoApp actions
 */

import * as ActionTypes from './constants';

export const getInputValue = (value) => {
  return {
    type: ActionTypes.GET_INPUT_VALUE,
    payload: { value },
  }
};
