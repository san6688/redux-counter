import { createStore } from 'redux';
import CounterReducer from './counterReducer';

const myStore = createStore(CounterReducer);

export default myStore;