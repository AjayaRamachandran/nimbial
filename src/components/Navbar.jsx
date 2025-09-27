import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <a className='item' href='https://www.nimbial.com' style={{color: '#dd7c05ff', fontSize: '14px'}}><b>nimbial.com</b></a>
        <a className='item' href='https://symphony.nimbial.com'>Symphony</a>
        <a className='item gray'>Tasklist</a>
        <a className='item gray'>Stratus</a>
        <a className='item gray'>Powerflows</a>
      </div>
    </>
  );
}

export default Navbar;
