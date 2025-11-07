import Header from "@/components/header";
import Banner from "@/components/sections/banner";
import About from "@/components/sections/about";

export default function Home() {
  return (
    <>
    <Header/>
    <main className="main-content">
      <Banner/>
      <About/>
    </main>
    </>
  );
}
