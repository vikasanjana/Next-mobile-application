import React from 'react'

const FormInput = ({ type, placeholder, data, setData, icon }) => {
  const onChangeInputHanlder = e => {
    setData(e.target.value)
  }
  return (
    <div className='form-group'>
      <div className='input-group mb-3'>
        <div className='input-group-prepend'>
          <span className='input-group-text bg-transparent'>
            <i className={icon}></i>
          </span>
        </div>
        <input
          type={type}
          className='form-control pl-15 bg-transparent'
          placeholder={placeholder}
          onChange={e => onChangeInputHanlder(e)}
          value={data}
        />
      </div>
    </div>
  )
}

export default FormInput
