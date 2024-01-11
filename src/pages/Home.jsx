import { ourPriorities } from "../assets/constants";
import { Hero } from "../components";
import Priorities from "../components/Priorities";

const Home = () => {
  return (
    <section className="">
      <Hero/>
        <h2 className="text-center text-h2 font-raleway font-bold mt-6">Our Priorities</h2>
        
        <div className="mt-8 flex flex-center w-5/6 flex-col sm:flex-row items-center justify-center mx-auto gap-3">
        { 
          ourPriorities.map((item) => ( 
            <Priorities key={item.title} {...item}/>
          ))
        }
      </div>
      <div className="">
        <h2 className="text-center text-h2 font-raleway font-bold mt-6">Our Philososphy</h2>
        <p className="text-center mx-2 font-raleway">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolores non est, provident iste, distinctio qui officia odit voluptatibus sequi repellat, nam ducimus? Molestiae rem tempore voluptate excepturi porro magni.
        </p>
      </div>
    </section>
  )
}

export default Home;