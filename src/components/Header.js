import React from 'react'
import logo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
const Header = () => {
    return (
        <div className="text-white p-5 flex justify-between items-center" >
            {/* Logo */}
            <div className="w-44 mr-4">
                <img src={logo} alt="logo" className="w-full" />
            </div>

            {/* Search */}
            <div className="w-64 h-12 flex items-center bg-gray rounded-3xl flex-1 p-2">
                <div className="w-6 object-cover">
                    <img src={searchIcon} alt="search" className="w-full h-full" />
                </div>
                <input type="text" className="border-none p-2 outline-none bg-transparent" placeholder="Search" />
            </div>

            {/* Misc */}
        </div>
    )
}

export default Header
