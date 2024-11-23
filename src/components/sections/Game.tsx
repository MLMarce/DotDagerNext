
import IframeGame from "../IframeGame";

export default function Game() {
  return (
    <section id="game"
      className="w-full max-w-[1920px] h-[100vh] max-h-[1080px] flex justify-center md:justify-end bg-game bg-no-repeat bg-cover items-center  p-4 shadow-lg relative"
    >
      <IframeGame />
    </section>
  )
}
