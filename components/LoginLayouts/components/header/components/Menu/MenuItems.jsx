import React from 'react'

const MenuItems = ({ text, url }) => {
  return (
    <a href={url} className='loginHeaderLink'>
      {text}
    </a>
  )
}

export default MenuItems
