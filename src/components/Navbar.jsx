import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <a href='https://www.nimbial.com'><b>nimbial.com</b></a>
        <a href='https://symphony.nimbial.com'>Symphony</a>
        <a className='gray'>Tasklist</a>
        <a className='gray'>Stratus</a>
        <a className='gray'>Powerflows</a>
      </div>
    </>
  );
}

export default Navbar;
