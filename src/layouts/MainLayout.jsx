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
      <main className='max-w-[1200px] mx-auto'>
        <Outlet></Outlet>
      </main>
      <footer>
        <Foots></Foots>
      </footer>
    </div>
  )
}

export default MainLayout
