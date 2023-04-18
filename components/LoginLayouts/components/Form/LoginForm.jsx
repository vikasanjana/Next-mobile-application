import React from 'react'
import Button from './Button'
import FormInput from './FormInput'

const LoginForm = ({ action = '', method = '', Data, setData , onSignInHandler}) => {
  return (
    <div className='p-40'>
      <form action={action} method={method}>
        <FormInput
          type={'text'}
          placeholder={'UserName'}
          icon={'ti-user'}
          Data={Data.username}
          setData={setData.username}
        />
        <FormInput
          type={'password'}
          placeholder={'Password'}
          icon={'ti-lock'}
          Data={Data.password}
          setData={setData.password}
        />

        <div className='col-12 text-center'>
          <Button text={'SIGN IN'} theme={'danger mt-10'} type={'submit'}  onclick={onSignInHandler} />
        </div>
      </form>
    </div>
  )
}

export default LoginForm
