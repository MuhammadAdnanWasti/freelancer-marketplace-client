import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'
import Foots from '../components/Foots'

const MainLayout = () => {
  return (
  <div className="flex flex-col min-h-screen">
  <header>
    <Header />
  </header>

  <main className="flex-grow max-w-[1200px] mx-auto w-full">
    <Outlet />
  </main>

  <footer>
    <Foots />
  </footer>
</div>

  )
}

export default MainLayout
