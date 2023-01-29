import React from 'react'
import sass from "../Header/header.module.scss"
import logo from "../../pages/img/logo.png"

function Header() {
  return (
    <div>
        <header className={sass.header}>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </header>
    </div>
  )
}

export default Header