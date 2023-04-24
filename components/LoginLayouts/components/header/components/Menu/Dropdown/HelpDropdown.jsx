import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
const HelpDropdown = () => {
  return (
    <NavDropdown    
      id='nav-dropdown-dark-example'
      title='Help'
      menuVariant='dark'
      className='loginHeaderHelpDropdown'
    >
      <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
      <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
      <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
    </NavDropdown>
  )
}

export default HelpDropdown
