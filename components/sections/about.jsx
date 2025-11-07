import React from 'react'
import Title from '../title'
import Image from 'next/image'
import CircleImg from '../../public/circle-img.png'



const about = () => {

    const Cards = ({text, img, color}) => {
        return (
            <div className="py-1.5 px-4 lg:px-5 xl:px-6 dark:bg-white text-theme-music flex items-center gap-2 md:gap-4 text-base sm:text-lg md:text-xl lg:text-2xl font-bold rounded-full">
                <Image className='w-8 md:w-10 lg:w-auto h-[60px]' src={img} height={100} width={100} alt='Card Image'/>
                <p className={color}>{text}</p>
            </div>
        )
    }


  return (
    <div className='w-full  border-t border-primary'>
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default about