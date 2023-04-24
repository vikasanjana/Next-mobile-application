/* eslint-disable @next/next/no-img-element */
import React from 'react'
import SocialOption from '../SocialOption/SocialOption'
import Button from './Button'
import FormInput from './FormInput'

const LoginForm = ({
  action = '',
  method = '',
  Data,
  setData,
  onSignInHandler
}) => {
  return (
    <div className='container container-login'>
      <div className='height100 create-account'>
        <div className='signup_left'>
          <div className='white-bg latest-signin'>
            <div className='signup_form'>
              <div class='d-flex  align-items-center justify-content-between mb-4'>
                <div class='signupcontent'>
                  <h3 class='text-left mt-0'>Sign In</h3>
                </div>
                <SocialOption />
              </div>
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
                  <Button
                    text={'SIGN IN'}
                    theme={'danger mt-10'}
                    type={'submit'}
                    onclick={onSignInHandler}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
