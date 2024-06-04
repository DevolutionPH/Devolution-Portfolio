import React from 'react'
import Navigation from './Navigation'
import Icon from './Icon'

const Header = () => {
  return (
    <div className='flex py-5 px-3 justify-between w-full items-center max-w-7xl mx-auto max-lg:px-5'>
        <Icon />
        <Navigation />
    </div>
  )
}

export default Header