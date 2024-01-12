/* eslint-disable react/prop-types */


const MenbersCard = ({ name, position, image, comments, quote }) => {
  return (
    <article className="w-full flex flex-col items-start gap-3 my-2">
        <h2 className="text-start text-h3 uppercase font-raleway font-bold">{name}</h2>
        <p className="uppercase text-center text-h3 text-purple-600 font-medium">{position}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between items-start">
            <div className="flex flex-col items-center gap-4 w-full ss:min-w-[300px] shadow-xl py-3 rounded-tl-2xl rounded-br-2xl">
                <img src={image} alt={name} className="w-5/6 mx-auto my-1"/>
                <p className="text-bold text-center mx-1 text-h3 font-raleway">{quote}</p>
            </div>
            <p className="text-center">
                {comments}
            </p>
        </div>
    </article>
  )
}

export default MenbersCard;