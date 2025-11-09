
import Title from '../title'
import Image from 'next/image'
import MemojiWithImac from '../../public/memoji-with-imac.svg'

const contact = () => {
  return (
    <div className='w-full'>
        <div id='contact-me'className="relative main-container w-full py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center">
            <div className="w-full flex flex-col items-center p-6 sm:p-8 md:p-10 lg:p-12 dark:bg-white rounded-[30px] md:rounded-[40px] lg:rounded-[50px]">
                <Title title = "Contact Me" color='text-black'/>

            </div>
            <Image src={MemojiWithImac} alt='Memoji with IMac' width={435} height={435} className='absolute bottom-0 right-2 sm:right-5 lg:right-16 w-[200px] sm:w-[250px] md:w-[300px] lg:w-auto'/>
        </div>
    </div>
  )
}

export default contact