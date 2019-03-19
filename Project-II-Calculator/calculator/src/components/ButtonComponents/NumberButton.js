import React from 'react';
import './Button.css';


let Buttons = (props) => {
  return (
    <div>
      <button className='number-button operand-button'>
        {props.input.value}
      </button>
    </div>
  )
}

export default Buttons