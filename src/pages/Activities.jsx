import { team } from "../assets/constants";
import MenbersCard from "../components/MenbersCard";

const Activities = () => {
  return (
    <section className="w-full mt-20">
      <h2 className="text-center text-h2 font-raleway font-bold">Our Story</h2>
      <p className="my-3 px-1 text-center font-raleway font-medium">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus tempore unde nesciunt nobis voluptatibus deleniti mollitia debitis natus? Quo sint ducimus excepturi ipsam nesciunt dolorem expedita quae atque consectetur ipsa.
      </p>
      <h2 className="text-center text-h2 font-raleway font-bold">Our Strategy</h2>
      <p className="my-3 px-1 text-center font-raleway font-medium">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus tempore unde nesciunt nobis voluptatibus deleniti mollitia debitis natus? Quo sint ducimus excepturi ipsam nesciunt dolorem expedita quae atque consectetur ipsa.
      </p>
      
      <div className="w-5/6 mx-auto items-flex flex-col items-center gap-3">
        <h2 className="text-center text-h2 font-raleway font-bold">Our Team</h2>
        <div className="w-full flex flex-col gap-4">
          {
            team.map((person) => ( 
              <MenbersCard key={person.id} 
              {...person}
              />
            ))
          }
        </div>
      </div>

      <div className="my-8 mx-auto flex flex-col gap-4 ss:flex-row items-center ss:justify-between max-w-[450px]">
        <p className="text-left font-medium font-raleway text-p">
          Would you like to join our noble venture?
        </p>
        <button className="text-center bg-bgButton font-bold text-white p-1 rounded-md">
          Join Us
        </button>

      </div>
    </section>
  )
}

export default Activities;