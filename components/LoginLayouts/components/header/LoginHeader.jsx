import React from 'react'
import Container from 'react-bootstrap/Container'
import LoginMenu from './components/LoginMenu'
import Logo from './components/Logo'

const LoginHeader = () => {
  return (
    <header className='loginHeaderMain'>
      <Container fluid className='singhead signinmodule'>
        <Logo />
        <LoginMenu />
      </Container>
    </header>
  )
}

export default LoginHeader
