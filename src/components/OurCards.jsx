/* eslint-disable react/prop-types */

const OurCards = ({image, title}) => {
  return (
    <article className="w-full sm:min-w-[400px]">
        <img src={image} alt={title}  className="w-full maxs-[400px] p-0"/>
    </article>
  )
}

export default OurCards;