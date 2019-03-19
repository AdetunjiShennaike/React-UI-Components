import React from 'react';
import './Button.css';


let NmbBtn = (props) => {
  return (
    <button className='number-button'>
      {props.input.value}
    </button>
  )
}

let SymBtn = (props) => {
  return (
    <button className='symbol-button'>
      {props.input.operator}
    </button>
  )
}

export default NmbBtn
export default SymBtn