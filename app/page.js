import Header from "@/components/header";
import Footer from "@/components/footer";
import Banner from "@/components/sections/banner";
import About from "@/components/sections/about";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Cta from "@/components/sections/cta";
import SocialMedia from "@/components/sections/socialMedia";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
    <Header/>
    <main className="main-content">
      <Banner/>
      <About/>
      <Education/>
      <Experience/>
      <Skills/>
      <Cta/>
      <SocialMedia/>
      <Contact/>
    </main>
      <Footer/>
    </>
  );
}
