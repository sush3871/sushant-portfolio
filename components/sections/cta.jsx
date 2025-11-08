import React from 'react'
import Title from '../title'
import Image from 'next/image'
import Button from '../button'


const cta = () => {
  return (
    <div className='w-full'>
        <div className="main-container w-full py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center">
            <Title title = "Discuss Project"/>
            <div className="w-full flex text-center flex-col items-center gap-3 lg:gap-8 mt-16 p-8 sm:p-10 md:p-16 bg-secondary bg-opacity-5 rounded-[50px]">
                <div className="aspect-square overflow-hidden p-1.5 md:p-2 rounded-full border md:border-2 dark:border-theme-primary">
                    <Image src='https://nikunjthesiya.vercel.app/_next/static/media/profile-img.0bfc992c.svg' alt='My Logo' height={122} width={122} />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold dark:text-theme-primary text-theme-secondary">Sushant Shirke</h3>
                <p className="dark:text-theme-white text-theme-secondary text-sm sm:text-lg md:text-xl lg:text-2xl">Front End Developer / Web Designer</p>
                <div className="flex items-center flex-wrap justify-center gap-3">
                <Button 
                    variant="outlined"
                    href="/download"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="md:w-8 md:h-8 w-5 h-5"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                        </svg>
                    }
                    text="Resume"
                    />
                    <Button 
                    variant="primary"
                    href="/download"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="md:w-8 md:h-8 w-5 h-5"
                            >
                            <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z"></path>
                            <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z"></path>
                            </svg>

                    }
                    text="Discuss Project"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default cta