import React from 'react'
import { LoginIcon } from '../Icons/Icons'

const Signup = () => {
    return (
        <div className="flex flex-nowrap mx-4">
            <button className="flex flex-nowrap my-2 px-2 py-1 mr-2 text-white bg-[#F8526E] fill-white hover:bg-[#D4445C] rounded-md transition duration-300">
                <div className="h-4 w-4 mt-1 mr-2">
                    <LoginIcon />
                </div>
                <p>
                    Login
                </p>
            </button>
            <button className="flex my-2 px-2 py-1 text-black bg-white hover:bg-gray-200 rounded-md transition duration-300">
                <p>
                    Register
                </p>
            </button>
        </div>
    )
}

export default Signup