import React from 'react'
import { BonusIcon, FaqIcon, LiveIcon, ProviderIcon, SlotIcon } from '../Icons/Icons'

const Navbar = () => {
  return (
    <div className="flex flex-nowrap my-1">
      <div className="flex flex-nowrap px-2 my-2 fill-[#6B7A99] text-[#6B7A99] hover:text-white hover:fill-[#F8526E] transition duration-300 cursor-pointer border-r border-[#2E323A]">
        <div className="h-5 w-5 mx-1">
          <SlotIcon />
        </div>
        <p className="px-1 lg:relative absolute lg:visible invisible">
          Slots
        </p>
      </div>
      <div className="flex flex-nowrap px-2 my-2 fill-[#6B7A99] text-[#6B7A99] hover:text-white hover:fill-[#F8526E] transition duration-300 cursor-pointer border-r border-[#2E323A]">
        <div className="h-5 w-5 mx-1">
          <LiveIcon />
        </div>
        <p className="px-1 lg:relative absolute lg:visible invisible">
          Live Dealer
        </p>
      </div>
      <div className="flex flex-nowrap px-2 my-2 fill-[#6B7A99] text-[#6B7A99] hover:text-white hover:fill-[#F8526E] transition duration-300 cursor-pointer border-r border-[#2E323A]">
        <div className="h-5 w-5 mx-1">
          <ProviderIcon />
        </div>
        <p className="px-1 lg:relative absolute lg:visible invisible">
          Providers
        </p>
      </div>
      <div className="flex flex-nowrap px-2 my-2 fill-[#6B7A99] text-[#6B7A99] hover:text-white hover:fill-[#F8526E] transition duration-300 cursor-pointer border-r border-[#2E323A]">
        <div className="h-5 w-5 mx-1">
          <BonusIcon />
        </div>
        <p className="px-1 lg:relative absolute lg:visible invisible">
          Bonus
        </p>
      </div>
      <div className="flex flex-nowrap px-2 my-2 fill-[#6B7A99] text-[#6B7A99] hover:text-white hover:fill-[#F8526E] transition duration-300 cursor-pointer">
        <div className="h-5 w-5 mx-1">
          <FaqIcon />
        </div>
        <p className="px-1 lg:relative absolute lg:visible invisible">
          F.A.Q.
        </p>
      </div>

    </div>
  )
}

export default Navbar