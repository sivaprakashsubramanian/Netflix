import React from 'react'
import { logo } from '../Assets/images/images'

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black z-10">
      <img  className="w-44" src={logo} alt='logo'/>
    </div>
  )
}

export default Header