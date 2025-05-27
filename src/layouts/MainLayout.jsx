import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'
import Foots from '../components/Foots'

const MainLayout = () => {
  return (
    <div>
      <header>
       <Header></Header>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Foots></Foots>
      </footer>
    </div>
  )
}

export default MainLayout
