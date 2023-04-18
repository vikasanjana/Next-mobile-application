import React from 'react'

const Button = ({type, theme , text , onclick}) => {
  const  onClickHanlder = (e) => {
    e.preventDefault()
    onclick()
  }
  return ( 
    <button type={type} className={`btn btn-${theme}`} onClick={(e) =>  onClickHanlder(e)} > 
      {text}
    </button>
  )
}

export default Button
