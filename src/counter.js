import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCounter, decrementCounter, resetCounter } from './coutnerActions';

const Counter = (props) => {
  return (    <>
  <h2>{props.counterNumber}</h2>
  <button onClick={props.inc}>Increment</button>
  <button onClick={props.dec}>Decrement</button>
  <button onClick={props.res}>Reset</button>
  </>
  )
}

const mapStateToProps = (state) => {
  return {
    counterNumber : state.counterValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    inc:incrementCounter, dec:decrementCounter, res:resetCounter
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);