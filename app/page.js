import Header from "@/components/header";
import Banner from "@/components/sections/banner";
import About from "@/components/sections/about";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";

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
    </main>
    </>
  );
}
