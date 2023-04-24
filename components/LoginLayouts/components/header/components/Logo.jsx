import React from 'react'
import Image from 'next/image';
const Logo = () => {
  return (
    <div className='logo'>
        <Image src="/images/logo-main.svg" alt="Logo" width={200} height={30} />
    </div>
  )
}

export default Logo
