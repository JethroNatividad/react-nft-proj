import React from 'react'
import logo from '../assets/header/cryptopunk-logo.png'
const Header = () => {
    return (
        <div className="text-white">
            <div>
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Header
