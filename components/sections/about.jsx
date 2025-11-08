import React from 'react'
import Title from '../title'
import Image from 'next/image'
import CircleImg from '../../public/circle-img.png'
import Button from '../button'



const about = () => {

    const Cards = ({text, img, color}) => {
        return (
            <div className="py-1.5 px-4 lg:px-5 xl:px-6 dark:bg-white text-theme-music flex items-center gap-2 md:gap-4 text-base sm:text-lg md:text-xl lg:text-2xl font-bold rounded-full ">
                <Image className='w-8 md:w-10 lg:w-auto md:h-[60px]' src={img} height={100} width={100} alt='Card Image'/>
                <p className={color}>{text}</p>
            </div>
        )
    }

    const BigCard = ({numbers, text}) => {
        return(
            <div className="w-full flex flex-col items-center justify-center text-center bg-[#18140B] bg-opacity-5 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] lg:rounded-[70px] xl:rounded-[80px] p-6 sm:p-8 md:p-10 xl:p-12 aspect-square">
                <h3 className="bg-gradient-to-b text-transparent dark:from-theme-primary from-theme-secondary dark:to-theme-secondary to-theme-white bg-clip-text font-bold text-4xl sm:text-6xl md:text-[2.7rem] lg:text-6xl xl:text-7xl">{numbers}+</h3>
                <h3 className="dark:text-theme-white text-theme-secondary font-bold text-xl sm:text-3xl md:text-xl lg:text-3xl xl:text-4xl leading-6 sm:leading-8">{text}</h3>
            </div>
        )
    }


  return (
    <div className='w-full'>
        <div className="main-container w-full py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center">
            <Title title = "About Me"/>
            <div className="w-full flex flex-col items-center gap-3 lg:gap-8 mt-16">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="w-full flex flex-col items-start gap-7">
                        <div className="flex items-center gap-2 md:gap-5">
                            <div className="border dark:border-theme-primary border-theme-secondary rounded-full p-1 shrink-0 overflow-hidden">
                                <Image src={CircleImg} alt='' width={60} height={60} className='rounded-full object-cover w-[60px] h-[60px]'/>
                            </div>
                            <Title title = "I Love" lgFont='lg:text-5xl' lgFontBig= 'lg:text-6xl'/>
                        </div>
                        <div className="w-full flex items-center gap-2 md:gap-4 flex-wrap">
                            <Cards text="Listening to Music" img={CircleImg} color='text-blue-950'/>
                            <Cards text="Travelling" img={CircleImg} color='text-blue-500'/>
                            <Cards text="Mountains" img={CircleImg} color='text-green-500'/>
                            <Cards text="Money" img={CircleImg} color='text-green-700'/>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-3 lg:gap-5">
                        <BigCard numbers='2.2' text='Years Experience'/>
                        <BigCard numbers='20 ' text='Project Completed'/>
                    </div>
                    
                </div>
                <div className="p-6 sm:p-8 bg-[#181818] bg-opacity-5 text-theme-white text-sm sm:text-base lg:text-lg rounded-[40px] md:rounded-[40px] lg:rounded-[50px] leading-6 sm:leading-7 lg:leading-9">
                    I’m Sushant Shirke, a passionate Frontend Developer with a Master’s in Computer Applications and over 4.7 years of hands-on experience in building engaging and high-performing digital experiences. My expertise spans modern technologies like ReactJS, NextJS, Apollo GraphQL, Redux, React Query, and a variety of UI frameworks such as Material UI, NextUI, SCSS, Tailwind CSS, Chakra UI, and Bootstrap.

                    I specialize in creating seamless, responsive, and visually appealing user interfaces that deliver smooth experiences across all devices. Along with strong skills in API integration, I ensure data flows effortlessly between the frontend and backend. I take pride in writing clean, efficient, and maintainable code, always focusing on both functionality and scalability.

                    I’ve had the opportunity to contribute to renowned platforms like CricTracker, SportsBuzz, and Epiko Market, and I’m always driven to push the boundaries of frontend innovation to craft exceptional digital solutions that leave a lasting impact.
                </div>
                <Button 
                    variant="primary"
                    href="/download"
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md:w-8 md:h-8 w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"></path></svg>
                    }
                    text="Contact Me"
                    />
            </div>
        </div>
    </div>
  )
}

export default about