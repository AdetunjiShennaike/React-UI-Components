import React from 'react';
import './Header.css';

//import components
import Image from './ImageThumbnail'
import Title from './HeaderTitle'
import Content from './HeaderContent'

function Header() {
  return (
    <div className = 'header'>
      <Image />
      <div className='content'>
        <Title />
        <Content />
      </div>
    </div>
  );
}

export default Header