import React from 'react'
import Link from 'next/link'
import Logo from '../public/logo.png'
import Image from 'next/image'


const footer = () => {
  return (
    <div className='w-full'>
        <div className="relative main-container w-full py-[20px] sm:py-[40px] md:py-[60px] lg:pt-0 flex flex-col items-center text-theme-secondary">
            <div className="w-full dark:bg-theme-primary bg-theme-secondary p-6 md:p-3 md:pr-10 rounded-3xl md:rounded-full flex md:flex-row flex-col items-center text-center justify-between gap-2 sm:gap-4 md:gap-6 flex-wrap">
                <Link href='/'>
                <div className="flex items-center">
                    <Image alt='Logo' src={Logo} width={50} height={50}/>
                    <h2 className='text-2xl ms-2 text-black'>SUSHANT<span className='font-bold ms-0.5'>SHIRKE</span></h2>
                </div>
                </Link>
                <div className="text-sm sm:text-base md:text-xl dark:text-secondary">Designed & Built by <span className='font-bold'>Sushant Shirke</span></div>
            </div>
        </div>
    </div>
  )
}

export default footer