import Image from "next/image";
import Networks from "../Networks";

export default function Hero() {
  return (
    <section id="hero" className="w-full h-screen max-h-[1080px]  md:pt-16 p-2 pt-5 flex flex-col md:flex-row gap-2 md:justify-center items-center relative">
      <div className="w-full h-auto md:h-[70vh] flex flex-col md:flex-col-reverse items-center md:justify-end gap-2">
        <h1 className="text-3xl font-bold bg-gradientcolor bg-clip-text text-transparent">Dot Dager</h1>
        <Image
          className="rounded-full shadow-md shadow-primary"
          src="/profile.png"
          alt="Dot Dager Image"
          width={320}
          height={320}
        />
      </div>
      <div className="w-full h-auto md:h-[60vh] flex flex-col md:flex-col-reverse items-center md:justify-end gap-4 relative">
        <Networks />
        <div className="flex flex-col gap-2 w-full md:w-[70%]">
          <p className="text-xl">
            ¡Hola! Soy Mariano, también conocido como Dot Dager, un apasionado
            creador de contenido que encuentra inspiración en lo que ama: la
            programación, los gatos, las guitarras, los pepinos y la filosofía.
          </p>
          <p className="text-xl">
            Mi enfoque se basa en combinar creatividad y tecnología para crear cosas
            que reflejen mi personalidad única. Disfruto explorar nuevas ideas y
            encontrar formas interesantes de compartirlas con el mundo.
          </p>
        </div>
      </div>
    </section>
  )
}