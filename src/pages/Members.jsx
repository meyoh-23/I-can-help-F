import { activities } from "../assets/constants";
import ActivityCard from "../components/ActivityCard";


const Members = () => {
  return (
    <section className="w-full mt-20">
      <h1 className="text-center font-bold font-raleway text-h2 my-3">Our Activities</h1>
      <p className="my-3 px-1 text-center font-raleway font-medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aut voluptatem necessitatibus officia corporis, consequatur temporibus pariatur minus in, esse, ratione enim consectetur neque earum? Deleniti provident reprehenderit voluptatibus ipsum!
      </p>
      <div className="w-5/6 flex  flex-col gap-6 items-center justify-center mx-auto">
      {
          activities.map((activity) => ( 
            <ActivityCard 
            key={activity.id}
            {...activity}
            />
          ))
       }
      </div>
    </section>
  )
}

export default Members;