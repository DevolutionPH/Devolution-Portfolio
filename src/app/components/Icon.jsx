import React from 'react'
import Image from 'next/image';
import devoLogo from "../../images/devo-logo.png";

const Icon = () => {
  return (
    <div>
        <Image alt='devo-logo' height={80} src={devoLogo}/>
    </div>
  )
}

export default Icon