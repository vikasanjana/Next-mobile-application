import React from 'react'
import MainMenu from './components/MainMenu/MainMenu'
import { MenuItems } from './components/Menu'

const MainSidebar = () => {
  return (
    <aside className='main-sidebar'>
      <section className='sidebar'>
       <MainMenu MainMenu={MenuItems} />
      </section>
    </aside>
  )
}

export default MainSidebar
