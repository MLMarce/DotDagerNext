
import Hero from "@/components/sections/Hero";
import Hobbies from "@/components/sections/Hobbies";
import Game from "@/components/sections/Game";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
      <main
        className="flex flex-col w-screen h-max min-h-screen max-w-[1920px] m-auto text-colortext p-2 scroll-smooth"
      >
        <Hero />
        <Hobbies />
        <Game />
        <Footer/>
      </main>
  );
}
