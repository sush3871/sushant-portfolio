import React from 'react'
import Title from '../title'
import Image from 'next/image'
import Button from '../button'

const SkillComponent = ({ name, image }) => (
    <div className="skill bg-white gap-[20px] text-black dark:text-secondary p-3 ps-[30px] pe-[30px] flex items-center rounded-full shadow-2xl dark:shadow-none transition-all duration-300 hover:scale-105">
      <Image 
        src={image} 
        alt={`${name} Icon`} 
        width={46} 
        height={46} 
        className="w-7 sm:w-10 lg:w-11 xl:w-auto object-contain hidden dark:block"
      />
      <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-black">
        {name}
      </p>
    </div>
  );

const Skills = () => {

  // Separate Figma and remaining skills
  const DesignSkills = [
    { name: 'HTML5', image: '/skills/html.svg' },
    { name: 'CSS3', image: '/skills/css.svg' },
    { name: 'JavaScript', image: '/skills/javascript.svg' },
    { name: 'JQuery', image: '/skills/jquery.svg' },
    { name: 'SCSS', image: '/skills/scss.svg' },
    { name: 'Bootstrap', image: '/skills/bootstrap.svg' },
    { name: 'ReactJS', image: '/skills/react.svg' },
    { name: 'Redux', image: '/skills/redux.svg' },
    { name: 'NextJS', image: '/skills/nextjs.svg' },
    { name: 'React Hook Forms', image: '/skills/react-hook-form.svg' },
    { name: 'Tailwind CSS', image: '/skills/tailwindcss.svg' },
    { name: 'Material UI', image: '/skills/materialui.svg' },
    { name: 'Framer Motion', image: '/skills/framer-motion.svg' },
    { name: 'Styled Components', image: '/skills/styled-components.svg' },
    { name: 'React Query', image: '/skills/react-query.svg' },
    { name: 'GIT', image: '/skills/git.svg' },
  ];

  const DesignTools = [
    { name: 'Visual Studio Code', image: '/skills/vscode.svg' },
    { name: 'Github', image: '/skills/github.svg' },
    { name: 'Postman', image: '/skills/postman.svg' },
  ];

  const FigmaSkill = { name: 'Figma', image: '/skills/figma.svg' };

  return (
    <div className="w-full bg-theme-secondary">
      <div className="main-container w-full py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center gap-14">
        
        {/* Section Title */}
        <Title title="Skills" />
        
        {/* Design Tools Section */}
        <div className="w-full flex flex-col items-center gap-3 lg:gap-10 mt-8">
          <Title title="Design Tools I Use" lgFont="lg:text-5xl" lgFontBig="lg:text-6xl" />
          
          {/* Figma alone on top */}
          <div className="w-full flex items-center justify-center mt-5">
            <SkillComponent name={FigmaSkill.name} image={FigmaSkill.image} />
          </div>

          <Title title="Technologies I Use" lgFont="lg:text-5xl" lgFontBig="lg:text-6xl" />

          {/* Remaining skills below */}
          <div className="w-full flex items-center justify-center gap-2 sm:gap-3 md:gap-5 flex-wrap mt-6">
            {DesignSkills.map((skill, index) => (
              <SkillComponent key={index} name={skill.name} image={skill.image} />
            ))}
          </div>

          <Title title="Development & Productivity Tools I Use" lgFont="lg:text-5xl" lgFontBig="lg:text-6xl" />

          {/* Remaining skills below */}
          <div className="w-full flex items-center justify-center gap-2 sm:gap-3 md:gap-5 flex-wrap mt-6">
            {DesignTools.map((skill, index) => (
              <SkillComponent key={index} name={skill.name} image={skill.image} />
            ))}
          </div>
        </div>

        <Button 
            variant="primary"
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
      </div>
    </div>
  );
};

export default Skills;
