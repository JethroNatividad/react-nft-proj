import React from 'react'
import logo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'
const Header = () => {
    return (
        <div className="text-offWhite p-5 flex justify-between items-center" >
            {/* Logo */}
            <div className="w-44 mr-4">
                <img src={logo} alt="logo" className="w-full" />
            </div>

            {/* Search */}
            <div className="w-64 h-12 flex items-center bg-gray-600 rounded-3xl flex-1 p-2">
                <div className="w-6 object-cover">
                    <img src={searchIcon} alt="search" className="w-full h-full" />
                </div>
                <input type="text" className="border-none p-2 outline-none bg-transparent" placeholder="Search" />
            </div>

            {/* Misc */}

            <div className="flex text-gray-400 justify-evenly">
                <p className="mx-3 cursor-pointer hover:text-offWhite">Drops</p>
                <p className="mx-3 cursor-pointer hover:text-offWhite">Marketplace</p>
                <p className="mx-3 cursor-pointer hover:text-offWhite">Create</p>
            </div>

            {/* Actions */}

            <div>
                <div className="bg-gray-600 rounded-3xl h-12 w-12 flex items-center justify-center m-3">

                    <div className="w-8 object-cover">
                        <img src={themeSwitchIcon} alt="toggle" className="w-full h-full" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
