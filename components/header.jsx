'use client'
import React from 'react'
import Logo from '../public/logo.png'
import Image from 'next/image'

const Header = () => {

    
  return (
    <header className='w-full flex bg-transparent flex-col items-start z-50'>
        <div className="main-container mx-auto max-w-[1440px] px-5 md:px-10 xl:px-15 w-full flex flex-col lg:flex-row items-center text-4xl justify-between gap-6 py-4 lg:py-8">
            <div className="w-full bg-white p-1 sm:p-2 rounded-full flex items-center gap-10 justify-between">
                <div className="flex items-center">
                    <Image alt='Logo' src={Logo} width={65} height={68}/>
                    <h2 className='text-3xl ms-2 text-black'>SUSHANT<span className='font-bold ms-0.5'>SHIRKE</span></h2>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header