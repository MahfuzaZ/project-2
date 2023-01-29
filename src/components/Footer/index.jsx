import React from 'react'
import sass2 from "../Header/header.module.scss"
import logo from "../../pages/img/logo1.jpeg"

function Footer() {
  return (
    <div className={sass2.footer}>
       <div className={sass2.menu}>
       <ul>
          <li><img src={logo} alt="" />Apple</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eveniet quod eos deserunt placeat a, ut distinctio quia aliquid cupiditate dicta laborum inventore adipisci possimus eaque doloribus sunt, ipsam omnis.</li>
          <li>27392832978</li>
          <li>32803213222</li>
         </ul>

         <ul>
          <li>About</li>
          <li>Store</li>
          <li>Our Products</li>
          <li>Contact</li>
         </ul>
         <ul>
          <li>About</li>
          <li>Store</li>
          <li>Our Products</li>
          <li>Contact</li>
         </ul>
         <ul>
          <li>About</li>
          <li>Store</li>
          <li>Our Products</li>
          <li>Contact</li>
         </ul>
       </div>
    </div>
  )
}

export default Footer