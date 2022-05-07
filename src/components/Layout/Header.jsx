import React from 'react'
import Navbar from '../UI/Header/Navbar'
import Signup from '../UI/Header/Signup'
import SocialMedia from '../UI/Header/SocialMedia'
import Logo from '../UI/Logo/Logo'

const Header = () => {
  return (
    <div className="flex flex-col w-full bg-[#1F2232] shadow-xl">
      <div className="flex flex-nowrap">
        <Logo />
        <div className="flex flex-nowrap w-full justify-between">
          <Navbar />
          <Signup />
        </div>
      </div>
      <div className="border-b-2 border-[#3C3E51] w-full" />
      <div className="flex flex-nowrap w-full justify-end">
        <SocialMedia />
      </div>
    </div>
  )
}

export default Header