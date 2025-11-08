import React from "react";
import Title from "../title";
import Image from "next/image";
import RightArrow from "../../public/icons/right-arrow.svg";

const Desc = ({ p }) => (
  <div className="flex items-center gap-1 md:gap-2">
    <Image src={RightArrow} alt="RightIcon" height={34} width={34} />
    <p className="text-sm md:text-base dark:text-secondary text-opacity-75 font-medium leading-6 md:leading-10">
      {p}
    </p>
  </div>
);

const ExperienceCard = ({ experienceData, className = "" }) => {
  const {
    duration,
    company,
    companyLocation,
    role,
    description,
    calenderSrc,
    memoji,
    locationsmSrc,
  } = experienceData;

  return (
    <div className={`w-full relative z-10 group ${className}`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square bg-theme-primary rounded-full blur-lg -z-10"></div>
      <div className="w-full h-full dark:bg-[#ffffff9a] bg-theme-secondary dark:bg-opacity-70 bg-opacity-70 flex flex-col items-start justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8 rounded-[30px] md:rounded-[40px] z-20 backdrop-blur-lg dark:hover:bg-opacity-100 hover:bg-opacity-100 ease-out duration-300 transition-all group">
        <div className="w-full flex flex-wrap items-center gap-2 lg:gap-6 justify-between">
          <div className="flex items-center gap-2 lg:gap-4 pr-7 rounded-full bg-secondary dark:bg-secondary">
            <div className="bg-white rounded-full overflow-hidden p-3 md:p-4 border border-theme-primary dark:bg-secondary">
              <Image alt="Location" src={locationsmSrc} width={34} height={34} />
            </div>
            <div className="flex flex-col items-start lg:gap-1">
              <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold dark:text-theme-primary text-theme-secondary">
                {company}
              </h4>
              <div className="flex items-center gap-1">
                <p className="dark:text-theme-white text-theme-secondary text-xs sm:text-sm md:text-base">
                  {companyLocation}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center bg-white text-sm sm:text-base md:text-base lg:text-xl gap-2 md:gap-3 text-secondary font-bold lg:px-5 md:px-4 px-3 py-2 rounded-full dark:group-hover:bg-opacity-20">
            <Image alt="Calendar" src={calenderSrc} width={34} height={34} />
            <p>{duration}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Image alt="Memoji" src={memoji} width={60} height={60} />
          <h3 className="text-xl md:text-2xl lg:text-3xl dark:text-secondary font-bold">
            {role}
          </h3>
        </div>
        <div className="flex flex-col items-start">
          {description.map((desc, i) => (
            <Desc key={i} p={desc} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      duration: "Feb 2025 – Oct 2025",
      company: "AdEngage Digital",
      companyLocation: "Thane, Maharashtra, India",
      role: "Web Developer",
      description: [
        "Led full project lifecycles and collaborated with teams to ensure on-time, high-quality delivery.",
        "Developed full-stack websites using Django and React with SSR for better SEO and performance.",
        "Built the Orchid Rewards platform end-to-end and implemented third-party login APIs.",
        "Created the Bookawestruck platform with an AI-powered smart chat system and shimmer animations.",
        "Worked on Orchid Hotel’s live projects including EV charging map functionality and landing pages.",
      ],
      calenderSrc: "/icons/calender.svg",
      memoji: "/icons/memoji.svg",
      locationsmSrc: "/icons/locationsm.svg",
    },
    {
      duration: "Jul 2023 – Jan 2025",
      company: "Digihost Solutions Pvt Ltd",
      companyLocation: "Ghansoli, Maharashtra, India",
      role: "Frontend Developer",
      description: [
        "Created responsive web applications using HTML, CSS, JS, SASS, and React.",
        "Collaborated with cross-functional teams to achieve project goals and optimize workflows.",
        "Prioritized tasks effectively to deliver projects within deadlines.",
        "Applied OOP principles to enhance maintainability in web projects.",
        "Stayed current with the latest frontend trends and best practices.",
      ],
      calenderSrc: "/icons/calender.svg",
      memoji: "/icons/memoji.svg",
      locationsmSrc: "/icons/locationsm.svg",
    },
  ];

  return (
    <div className="w-full bg-theme-secondary">
      <div className="main-container w-full py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center">
        <Title title="Experience" />
        <div className="w-full flex flex-col items-start gap-4 lg:gap-6 mt-16">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experienceData={exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
