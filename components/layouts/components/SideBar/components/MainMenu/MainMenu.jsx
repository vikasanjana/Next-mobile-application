import React from 'react'
import MainMenuLi from './MainMenuLi'

const MainMenu = ({MainMenu}) => {
  return (
       <ul className='sidebar-menu tree' data-widget='tree'>
        { MainMenu && MainMenu.map((item, key) => {
          return(
            <MainMenuLi url={item.url} key={key} text={item.text} icon={item.icon} subMenu={item.subMenu} />
          )
        })}         
        </ul>
  )
}

export default MainMenu
