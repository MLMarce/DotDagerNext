
import * as data from "@/passions.json";
import Passion from "@/components/Passion";

export default function Hobbies() {
  const { passions } =  data;
  return (
    <section
      id="about"
      className="w-full h-content min-h-screen md:pt-24 p-2 relative flex flex-col"
    >
      <h2
        className="font-bold text-3xl text-center bg-gradientcolor bg-clip-text text-transparent"
      >
        Mis Pasiones
      </h2>
      <div className="w-full flex-1  flex flex-wrap gap-2 justify-around">
        {
          passions?.map((passion) => (
            <Passion
              key={passion.name}
              name={passion.name}
              description={passion.description}
              link={passion.link}
              imgName={passion.imgName}
              pYoutube={passion.pYoutube}
              nameYT={passion.nameYT}
            />
          ))
        }
      </div>
    </section>
  )
}
