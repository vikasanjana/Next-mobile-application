import React from 'react'
import SubMenuUl from '../SubMenu/SubMenuUl'

const MainMenuLi = ({ url, text, icon, subMenu }) => {
  if (subMenu && subMenu.length) {
    return (
      <li className='treeview'>
        <a href={url}>
          <i className={icon}></i>
          <span>{text}</span>
          <span className='pull-right-container'>
            <i className='fa fa-angle-right pull-right'></i>
          </span>
        </a>
        <SubMenuUl subMenu={subMenu} />
      </li>
    )
  } else {
    return (
      <li>
        <a href={url}>
          <i className={icon}></i>
          <span>{text}</span>
        </a>
      </li>
    )
  }
}

export default MainMenuLi
