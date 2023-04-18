import Head from 'next/head'
import React, { useState } from 'react'
import LoginForm from '../../components/LoginLayouts/components/Form/LoginForm'
import LoginFromHead from '../../components/LoginLayouts/components/LoginFromHead'
import LoginLayout from '../../components/LoginLayouts/LoginLayout'

const LoginPage = () => {
  // user state hook for username and password
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  /**
   * Create a Data and setData object for send functions to anothoer component
   */
  let Data = {}
  let setData = {}

  Data.username = username
  Data.password = password

  setData.username = setUsername
  setData.password = setPassword

  /**
   * Function on Sign In hanlder
   */
  const onSignInHandler = () => {
    console.log(username, password)
  }

  return (
    <>
    
      <LoginLayout>
        <LoginFromHead
          title={`Let's Get Started`}
          pera={'Sign in to continue to Florence.'}
        />
        <LoginForm method='post' action='' Data={Data} setData={setData} onSignInHandler={onSignInHandler} />
      </LoginLayout>
    </>
  )
}

export default LoginPage
