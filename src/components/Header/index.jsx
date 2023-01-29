import React from 'react'
import sass from "../Header/header.module.scss"
import logo from "../../pages/img/logo1.jpeg"
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className={sass.head}>
        <header className={sass.header}>
            <div className={sass.logo}>
                <img src={logo} alt="" />
                <h3>Apple</h3>
            </div>
            <ul>
                <li><NavLink className={({isActive}) => isActive ? sass.active : sass.link} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? sass.active : sass.link} to='/about'>About</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? sass.active : sass.link} to="/products">Our Products</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? sass.active : sass.link} to="singleproducts">Contact</NavLink></li>
            </ul>
        </header>
    </div>
  )
}

export default Header