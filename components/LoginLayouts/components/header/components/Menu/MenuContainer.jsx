import React from 'react'
import MenuItems from './MenuItems'

const MenuContainer = ({mainMenu}) => {
  return (
    <div className='back-home back-home-login'>
      {
        mainMenu && mainMenu.map((item , key) => {
            return (
                <MenuItems  key={key} text={item.text} url={item.url}  />
            )
        })
      }
    </div>
  )
}

export default MenuContainer
