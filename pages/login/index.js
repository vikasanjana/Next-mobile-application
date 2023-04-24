/* eslint-disable @next/next/no-css-tags */
import Head from 'next/head'
import React, { useState } from 'react'
import LoginForm from '../../components/LoginLayouts/components/Form/LoginForm'
import style from '../../public/css/LoginPage/index.scss'

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
      <Head>
        <title>Login</title>
        <link rel='stylesheet' href='/css/LoginPage/header.css' />
      </Head>
      <section className='signinpage signinpage-ipad signinpage-new'>
        <LoginForm
          method='post'
          action=''
          Data={Data}
          setData={setData}
          onSignInHandler={onSignInHandler}
        />
      </section>
    </>
  )
}

export default LoginPage
