import React from 'react'
import LoginHeader from './components/header/LoginHeader'


const LoginLayout = ({ children }) => {
  return (
    <>
      <LoginHeader />
      {children}
    </>
  )
}

export default LoginLayout
