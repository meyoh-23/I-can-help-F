/* eslint-disable react/prop-types */

const Priorities = ({ title, description, image }) => {
  return (
    <article className= "flex flex-col items-center max-w-[220] shadow-2xl rounded-lg">
        <img src={image} alt={title} className="w-5/6 mx-auto drop-shadow-lg"/>
        <h2 className="text-center text-h3 font-raleway font-bold my-3">{title}</h2>
        <p className="text-center p-1 mb-10s font-raleway pb-3">
            {description}
        </p>
    </article>
  )
}

export default Priorities;