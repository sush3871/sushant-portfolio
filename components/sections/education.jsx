import Title from '../title'
import Image from 'next/image'


const education = () => {

    const EducationCard = ({
        // Default education data based on the original hardcoded values
        educationData = {
            dates: '2019 - 2022',
            degreeType: 'Graduation',
            degreeName: 'Bachelor’s Degree',
            degreeShort: 'BCA',
            title: 'Bachelor of Computer Applications',
            college: 'SGM College, Karad',
            location: 'Karad, Satara, Maharashtra',
            // Image sources (assuming imported or static paths; replace with your actual imports/paths)
            calenderSrc: '/icons/calender.svg',
            graduationSrc: '/icons/degree.svg',
            collegeSrc: '/icons/college.svg',
            locationSrc: '/icons/location.svg',
        },
        // Optional: Custom className for overriding styles
        className = '',
      }) => {
        const {
          dates,
          degreeType,
          degreeName,
          degreeShort,
          title,
          college,
          location,
          calenderSrc,
          graduationSrc,
          collegeSrc,
          locationSrc,
        } = educationData;
      
        return (
          <div className={`w-full relative z-10 group ${className}`}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square bg-theme-primary rounded-full blur-lg -z-10"></div>
            <div className="w-full h-full dark:bg-[#ffffff9a] bg-theme-secondary dark:bg-opacity-70 bg-opacity-70 flex flex-col items-start justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8 rounded-[30px] md:rounded-[40px] z-20 backdrop-blur-lg dark:hover:bg-opacity-100 hover:bg-opacity-100 ease-out duration-300 transition-all group">
              <div className="w-full flex flex-wrap items-center gap-2 lg:gap-6 justify-between">
                <div className="flex items-center bg-secondary text-sm sm:text-base md:text-base lg:text-xl gap-2 md:gap-3 text-theme-primary font-bold lg:px-5 md:px-4 px-3 py-2 rounded-full">
                  <Image alt="Calendar" src={calenderSrc} width={34} height={34} />
                  <p>{dates}</p>
                </div>
                <div className="flex items-center bg-white group-hover:bg-theme-primary group-hover:bg-opacity-20 text-sm sm:text-base md:text-base lg:text-xl gap-2 md:gap-3 text-secondary text-theme-white font-semibold lg:px-5 md:px-4 px-3 py-2 rounded-full">
                  <Image alt="Graduation" src={graduationSrc} width={34} height={34} />
                  <p>{degreeType}</p>
                </div>
              </div>
              <div className="w-full flex flex-col items-start gap-1.5 md:gap-2.5">
                <div className="flex items-center gap-1.5 md:gap-2.5 flex-wrap">
                  <div className="bg-white dark:group-hover:bg-theme-secondary group-hover:bg-theme-white group-hover:bg-opacity-10 text-sm md:text-base lg:text-xl text-secondary font-semibold py-2 lg:px-5 px-4 rounded-full">
                    {degreeName}
                  </div>
                  <div className="bg-white dark:group-hover:bg-theme-secondary group-hover:bg-theme-white group-hover:bg-opacity-10 text-sm md:text-base lg:text-xl text-secondary font-semibold py-2 lg:px-5 px-4 rounded-full">
                    {degreeShort}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl dark:text-secondary font-bold my-1.5 lg:my-2">
                  {title}
                </h3>
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="bg-white group-hover:bg-opacity-10 group-hover:border-theme-secondary group-hover:border-opacity-10 rounded-full p-1.5 md:p-2.5 aspect-square border border-theme-primary border-opacity-20">
                    <Image alt="College" src={collegeSrc} width={30} height={30} />
                  </div>
                  <p className="text-sm md:text-base lg:text-xl text-secondary">{college}</p>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="bg-white group-hover:bg-opacity-10 group-hover:border-theme-secondary group-hover:border-opacity-10 rounded-full p-1.5 md:p-2.5 aspect-square border border-theme-primary border-opacity-20">
                    <Image alt="Location" src={locationSrc} width={30} height={30} />
                  </div>
                  <p className="text-sm md:text-base lg:text-xl text-secondary">{location}</p>
                </div>
              </div>
            </div>
          </div>
        );
      };
  return (
    <div className="w-full bg-theme-secondary">
        <div className="main-container w-full py-[40px] md:py-[60px] lg:py-[20px] flex flex-col items-center">
            <Title title = "Education"/>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 mt-16">
            <EducationCard 
                educationData={{
                    dates: '2017 - 2018',
                    degreeType: 'HSC',
                    degreeName: 'Higher Secondary Certificate',
                    degreeShort: 'HSC',
                    title: 'Higher Secondary Certificate',
                    college: 'Karmaveer Bhaurao Patil Vidyamandir and Junior College, Dhebewadi',
                    location: 'Patan, Satara, Maharashtra',
                    calenderSrc: '/icons/calender.svg',
                    graduationSrc: '/icons/degree.svg',
                    collegeSrc: '/icons/college.svg',
                    locationSrc: '/icons/location.svg',
                }}
                />
                <EducationCard/>
            </div>
        </div>
    </div>
  )
}

export default education