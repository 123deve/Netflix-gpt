import React from 'react'
import {netFlix_logo} from "../utils/Logo"

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img className='w-44'
        src={netFlix_logo} alt='netflix_logo'/>
    </div>
  )
}

export default Header