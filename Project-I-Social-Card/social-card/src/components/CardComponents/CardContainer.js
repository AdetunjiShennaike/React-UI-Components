import React from 'react';
import './Card.css';

//import items 
import Content from './CardContent'
import Banner from './CardBanner'

function Container () {
  return (
    <a href='https://www.reactjs.org' className='cardContainer'>
      <div className='content'>
        <Banner />
        <Content />
      </div>  
    </a>
  )
}

export default Container