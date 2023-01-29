import React from 'react'
import ip14 from "../img/ip14.jpg"
import main from "../main.module.scss"
import iwatch from "../img/mac.jpeg"

function Home() {
  return (
    <div>
        <img className={main.img} src={ip14} alt="" />
        <img className={main.img} src={iwatch} alt="" />
    </div>
  )
}

export default Home