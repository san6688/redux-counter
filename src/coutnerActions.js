import * as counterActionTypes from './counterActionTypes';

export const incrementCounter = () => {
  return {
    type: counterActionTypes.INCREMENT,
  }
}


export const decrementCounter = () => {
  return {
    type: counterActionTypes.DECREMENT,
  }
}


export const resetCounter = () => {
  return {
    type: counterActionTypes.RESET,
  }
}