import Slider from "react-slick";
import "../pages/slick-theme.css";
import "../pages/slick.css";
import { heroImges } from "../assets/constants";
import OurCards from "./OurCards";

const HeroSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }


    return (
        <Slider {...settings}>
            {
                heroImges.map((item) => ( 
                    <div key={item.title} className="w-full h-full">
                        <OurCards {...item}/>
                    </div>
                ))
            }
        </Slider>
    )
}

export default HeroSlider;