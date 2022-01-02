import React from 'react'
import logo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchLightIcon from '../assets/header/theme-switch-light.png'
import themeSwitchDarkIcon from '../assets/header/theme-switch-dark.png'

const Header = ({ toggleIsDarkMode, isDarkMode }) => {
    return (
        <div className="header" >
            {/* Logo */}
            <div className="w-44">
                <img src={logo} alt="logo" className="w-full" />
            </div>

            {/* Search */}
            <div className="search">
                <div className="w-6 object-cover">
                    <img src={searchIcon} alt="search" className="w-full h-full" />
                </div>
                <input type="text" className="search-input" placeholder="Search" />
            </div>

            {/* Misc */}

            <div className="misc">
                <p className="misc-item">Drops</p>
                <p className="misc-item">Marketplace</p>
                <p className="misc-item">Create</p>
            </div>

            {/* Actions */}

            <div className="flex items-center">
                <div className="theme-switch" onClick={toggleIsDarkMode}>
                    <div className="w-8 object-cover">
                        <img src={isDarkMode ? themeSwitchLightIcon : themeSwitchDarkIcon} alt="toggle" className="w-full h-full" />
                    </div>
                </div>

                <div className="login-button">
                    <p>LOGIN</p>
                </div>

            </div>
        </div>
    )
}

export default Header
