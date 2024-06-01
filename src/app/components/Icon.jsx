import React from 'react'
import Image from 'next/image';
import deveLogo from "/devo-logo.png";

const Icon = () => {
  return (
    <div>
        <Image alt='devo-logo' height={80} src={deveLogo}/>
    </div>
  )
}

export default Icon