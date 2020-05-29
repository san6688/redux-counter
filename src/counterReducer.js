import * as counterActionTypes from './counterActionTypes';

const initialState= {
  counterValue: 0
}

const CounterReducer = (state = initialState, action) => {
  switch(action.type){
    case counterActionTypes.INCREMENT:
      return { counterValue : state.counterValue + 1 }
    case counterActionTypes.DECREMENT: 
      const currVal = state.counterValue;
      let newVal;
      if(currVal === 0 ){
        newVal = 0;
      }else {
        newVal = currVal -1
      }
      return { counterValue : newVal }
    case counterActionTypes.RESET:
      return { counterValue: 0 }   
    default:
      return state;
  }
}

export default CounterReducer;