/* eslint-disable react/prop-types */


const ActivityCard = ({ imageOne, imageTwo, decription1, decription2, title1, title2 }) => {
  return (
    <article className="w-full flex flex-col items-center gap-5 my-3">
        <div className="w-full flex flex-col sm:flex-row-reverse gap-2 items-center shadow-xl">
            <img src={imageOne} alt={title1}  className=" p-2 rounded-md w-[90vw]  sm:max-w-[450px]"/>
            <p className="text-center font-raleway font-medium">
                {decription1}
            </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row-reverse gap-2 items-center shadow-xl">
            <p className="text-center font-raleway font-medium">
                {decription2}
            </p>
            <img src={imageTwo} alt={title2}  className=" p-2 rounded-md w-[90vw]  sm:max-w-[450px]"/>
        </div>
    </article>
  )
}

export default ActivityCard;