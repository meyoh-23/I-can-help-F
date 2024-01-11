// import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section className="w-full h-[100vh] gid content-center bg-mobile-hero md:bg-hero-image bg-cover bg-center bg-origin-content bg-no-repeat mb-5">
        <div className="w-full mx-auto grid content-center mt-4 h-full">
            <div className="flex flex-col items-start gap-3 mx-auto">
                <h1 className="text-h2 font-raleway font-bold text-white capitalize text-center mx-auto e"> iCanHelp <br /><span className="text-center">Foundation</span>
                </h1>
                <p className="text-left font-raleway font-bold text-green-300 text-h3 max-w-[450px] px-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque numquam, sapiente, unde nam quidem minima eveniet architecto nulla recusandae sit? Ipsa, quo? Libero eos omnis minus, odit excepturi distinctio.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Hero;