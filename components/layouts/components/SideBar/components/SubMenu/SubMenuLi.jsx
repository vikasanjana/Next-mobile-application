import React from 'react'

const SubMenuLi = ({url, text}) => {
  return (
    <li>
      <a href={url}>
        <i className='ti-more'></i>{text}
      </a>
    </li>
  )
}

export default SubMenuLi
