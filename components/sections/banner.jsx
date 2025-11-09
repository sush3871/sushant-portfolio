import React from 'react'
import Image from 'next/image'
import Hand from '../../public/hand.svg'
import HeroImage from '../../public/img-1.png'
import Button from '../button'
import HeroSkills from '../heroSkills'

const banner = () => {
  return (
    <div className='w-full'>
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-15 w-full pt-[50px]">
            <div className="flex flex-col items-center text-center gap-2 md:gap-5 w-full">
                <div className="flex items-center gap-4 py-1.5 md:py-2 lg:py-2.5 px-5 rounded-full border bg-theme-primary/10 border-theme-secondary/20">
                    <Image  src={Hand} alt='hand-image' height={40} width={40}/>
                    <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-theme-secondary">
                        Hello! I am 
                        <span className='ms-2 text-theme-primary inline-block font-bold'> Sushant Shirke</span>
                    </h1>
                </div>
                <h1 className="text-3xl mt-3 lg:mt-0 sm:text-4xl md:text-5xl lg:text-[54px] font-bold dark:text-theme-white text-theme-secondary leading-tight">
                Crafting
                <span className="text-theme-primary inline-block mx-2">Modern Web Experiences</span>
                with
                <span className="text-theme-primary inline-block mx-2">Front-End Excellence</span>
                and
                <span className="text-theme-primary inline-block mx-2">Next.js</span>
                </h1>
                <p className="text-base mt-2 sm:text-lg md:text-xl lg:text-2xl font-light dark:text-theme-white text-theme-secondary leading-7 lg:leading-10">
                    I&apos;m an <span className="font-bold me-2">Expert Frontend Developer</span> with
                    <br className="block md:hidden" />
                    <span className="text-sm sm:text-base ms-2 md:text-lg lg:text-2xl font-bold dark:text-theme-primary text-theme-secondary px-3 md:px-5 py-1 rounded-full dark:bg-theme-white bg-theme-secondary dark:bg-opacity-5 bg-opacity-5 border dark:border-theme-white border-theme-secondary dark:border-opacity-10 border-opacity-10 transition backdrop-blur-sm me-2">
                        2.2+ Years
                    </span>
                    of experience in <span className="font-bold">ReactJS</span> and <span className="font-bold">Next.js</span>.  
                    I build responsive, performance-driven, and user-centric web solutions specializing in 
                    <span className="font-bold ms-1">Website Development</span>.
                </p>
                <div className="mt-6 flex items-center justify-center flex-wrap gap-3 lg:gap-5">
                    <Button 
                        variant="outlined"
                        href="/sushant-shirke-resume.pdf"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="md:w-8 md:h-8 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                        }
                        text="Download CV"
                        />
                    <Button 
                        variant="primary"
                        href="/download"
                        text="Hire Me"
                        />
                </div>
                <div className="relative mt-8 md:mt-16 lg:mt-20">
                    <Image src={HeroImage} height={400} width={675} alt='My Image'/>
                    <HeroSkills/>
                </div>


            </div>
        </div>
        
    </div>
  )
}

export default banner