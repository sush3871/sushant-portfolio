'use client'; 

import Image from 'next/image';
import NextIcon from '../public/icons/next.svg'
import ReactIcon from '../public/icons/react.svg'
import graphIcon from '../public/icons/graphql.svg'
import tailWindIcon from '../public/icons/tailwind.svg'
import javaScriptIcon from '../public/icons/javascript.svg'
import FigmaIcon from '../public/icons/figma.svg'

const HeroSkills = () => {
  const skills = [
    {
      name: 'NextJS',
      src: NextIcon, // Default/light version
      position: 'absolute top-[25%] sm:top-[20%] md:top-[15%] sm:left-4 md:-left-0 xl:-left-[5%]',
    },
    {
      name: 'ReactJS',
      src: ReactIcon,
      position: 'absolute top-[50%] sm:top-[45%] md:top-[45%] -left-[5%] md:-left-[15%] lg:-left-[20%] xl:-left-[35%]',
    },
    {
      name: 'GraphQL',
      src: graphIcon,
      position: 'absolute top-[75%] sm:top-[70%] md:top-[75%] md:-left-[5%] lg:-left-[15%] xl:-left-[25%]',
    },
    {
      name: 'Tailwind CSS',
      src: tailWindIcon,
      position: 'absolute top-[20%] md:top-[15%] right-[5%] xl:-right-[5%]',
    },
    {
      name: 'JavaScript',
      src: javaScriptIcon,
      position: 'absolute top-[45%] md:top-[45%] -right-[5%] md:-right-[10%] lg:-right-[20%] xl:-right-[35%]',
    },
    {
      name: 'Figma',
      src: FigmaIcon,
      position: 'absolute top-[70%] md:top-[75%] right-[10%] md:-right-0 lg:-right-[16%]',
    },
  ];

  return (
    <>
      {skills.map((skill, index) => (
        <div key={index} className={skill.position}>
          <div className="hero-skill">
            <Image
              alt={skill.name}
              width={46}
              height={46}
              loading="lazy"
              decoding="async"
              className="w-7 sm:w-10 lg:w-11 xl:w-auto object-contain"
              src={skill.src}
              style={{ color: 'transparent' }}
            />
            <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium">
              {skill.name}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default HeroSkills;