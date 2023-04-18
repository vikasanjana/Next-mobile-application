import React from 'react'

const Footer = () => {
  return (
    <footer className='main-footer'>
      <div className='pull-right d-none d-sm-inline-block'>
        <ul className='nav nav-primary nav-dotted nav-dot-separated justify-content-center justify-content-md-end'>
          <li className='nav-item'>
            <a className='nav-link' href=''>
              FAQ
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Purchase Now
            </a>
          </li>
        </ul>
      </div>
      &copy; 2020 <a href='#'>CodingKart</a>. All Rights Reserved.
    </footer>
  )
}

export default Footer
