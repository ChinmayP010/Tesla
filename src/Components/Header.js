import React from 'react'
import './Header.css'
import TeslaLogo from '../assets/teslaLogoSmall.svg'

const Header = () => {
    return (
        <div className="header">
            <div className = "header__logo">
                <img src = {TeslaLogo} alt="TeslaLogo"/>
            </div>
            <div className="header__center">
                <p>Model X</p>
                <p>Model Y</p>
                <p>Model Z</p>
                <p>Solar Roof</p>
                <p>Solar Panel</p>
            </div>
            <div className="header__right">
                <p>Shop</p>
                <p>Tesla Account</p>
            </div>
        </div>
    )
}

export default Header
