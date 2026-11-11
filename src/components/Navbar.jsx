import React from 'react';
import './navbar.css';

const LINKS = [
  { label: 'nimbial.com', href: 'https://www.nimbial.com', home: true },
  { label: 'Symphony', href: 'https://symphony.nimbial.com' },
  { label: 'Docs', href: 'https://docs.nimbial.com' },
  { label: 'Blog', href: 'https://blog.nimbial.com' },
  { label: 'Tasklist', gray: true },
  { label: 'Stratus', gray: true },
  { label: 'Powerflows', gray: true },
];

function Navbar() {
  return (
    <>
      <div className='navbar'>
        {LINKS.map((link) => (
          <a
            key={link.label}
            className={`item${link.gray ? ' gray' : ''}`}
            href={link.href}
            style={link.home ? { color: '#dd7c05ff', fontSize: '14px' } : undefined}
          >
            {link.home ? <b>www.</b> : `${link.label.toLowerCase()}.`}
          </a>
        ))}
      </div>
    </>
  );
}

export default Navbar;
