import React from 'react'
import SubMenuLi from './SubMenuLi'

const SubMenuUl = ({ subMenu }) => {
  return (
    <ul className='treeview-menu'>
       {
        subMenu.map((item , key) => {
            return (
                <SubMenuLi url={item.url} key={key} text={item.text} />
            )
        })
       }
    </ul>
  )
}

export default SubMenuUl
