import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainSidebar from './components/SideBar/MainSidebar'

const Layout = ({ children }) => {
  return (
    <>
      <MainSidebar />
      {children}
      {/* <Footer />   */}
    </>
  )
}

export default Layout
