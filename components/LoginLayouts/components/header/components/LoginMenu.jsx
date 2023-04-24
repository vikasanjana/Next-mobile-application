import React from 'react'
import HelpDropdown from './Menu/Dropdown/HelpDropdown'
import MenuContainer from './Menu/MenuContainer'
import { loginHeaderMenu } from './Menu/Menujson'

const LoginMenu = () => {
  return (
    <div className="d-flex align-items-center"> 
      <MenuContainer mainMenu={loginHeaderMenu} />
      <HelpDropdown  />
    </div>
  )
}

export default LoginMenu
