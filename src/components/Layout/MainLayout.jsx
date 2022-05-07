import React from 'react'
import Header from './Header'
import Providers from './Providers'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <div className="flex flex-col w-full justify-between font-rubik bg-[#242532]">
    <div className="flex fixed w-full z-20">
      <Header />
    </div>
    <Providers />
    <Footer />
  </div>
  )
}

export default MainLayout