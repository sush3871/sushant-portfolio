import Title from '../title'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '@/public/icons/avatar-macbook.svg'

const MediaLinks = () => {
  const socialLinks = [
    {
      image: '/social-icons/linkedIn.svg',
      name: "LinkedIn",
      color: "#0069ab",
      target: 'https://LinkedIn.com'
    },
    {
      image: '/social-icons/instagram.svg',
      name: "Instagram",
      color: "#f00",
      target: 'https://instagram.com'
    },
    {
      image: '/social-icons/facebook.svg',
      name: "Facebook",
      color: "#0069ab",
      target: 'https://facebook.com'
    },
    {
      image: '/social-icons/gmail.svg',
      name: "sushanrshirke96@gmail.com",
      color: "#c5221f",
      target: 'mailto:sushanrshirke96@gmail.com'
    }
  ];

  return (
    <>
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.target}
          target="_blank"
          className="flex items-center gap-2 sm:gap-3 md:gap-4 overflow-hidden rounded-full sm:pr-6 md:pr-8 lg:pr-10 py-2 px-2 sm:pl-3 dark:bg-white transition-transform"
          style={{ color: link.color }}  // ✅ Use inline style for dynamic color
        >
          <Image
            src={link.image}
            alt={link.name}
            height={92}
            width={92}
            className="object-contain"
          />
          <h3 className="text-base sm:text-2xl md:text-3xl lg:text-5xl font-bold">
            {link.name}
          </h3>
        </Link>
      ))}
    </>
  );
};

const SocialMedia = () => {
  return (
    <div className="w-full">
      <div className="main-container w-full pt-[40px] md:pt-[60px] lg:pt-[80px] flex flex-col items-center">
        <Title title="Connect With Me" />
        <div className="w-full flex text-center flex-wrap justify-center items-center gap-2 md:gap-3 lg:gap-8 mt-6 sm:mt-10 md:mt-16 p-8">
          <MediaLinks />
        </div>
        <Image src={Avatar} alt='Logo mackbook' height={362} width={362}/>
      </div>
    </div>
  );
};

export default SocialMedia;
