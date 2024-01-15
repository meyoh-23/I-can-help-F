

const BecomeAmember = () => {
  return (
    <div className="h-[100vh] w-full mt-20 grid content-center">
        <form 
        action="https://formsubmit.co/fdd7633e2d5b9f66f63a47bb56e57896"
        method="POST"
        >
            <div className="w-full flex flex-col items-center">
                <div className="flex flex-col items-center gap-2">
                    <label htmlFor="">Your Name</label>
                    <input placeholder="enter your full name" className="border-2 border-primary rounded-md text-secondary font-raleway text-h3 font-medium px-2"/>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <label htmlFor="">Your Email</label>
                    <input placeholder="enter your email" className="border-2 border-primary rounded-md text-secondary font-raleway text-h3 font-medium px-2"/>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <label htmlFor="">Phone Number</label>
                    <input placeholder="your phone number" className="border-2 border-primary rounded-md text-secondary font-raleway text-h3 font-medium px-2"/>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <label htmlFor="">County of Rsidence</label>
                    <input placeholder="county" className="border-2 border-primary rounded-md text-secondary font-raleway text-h3 font-medium px-2"/>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <label htmlFor="">Sub County</label>
                    <input placeholder="subcounty" className="border-2 border-primary rounded-md text-secondary font-raleway text-h3 font-medium px-2"/>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <label htmlFor="">Village</label>
                    <input placeholder="village" className="border-2 border-primary rounded-md text-secondary font-raleway text-h3 font-medium px-2"/>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <label htmlFor="">Reason(s) for joining</label>
                    <textarea
                    className="border-2 border-primary rounded-md text-secondary font-raleway text-h3 font-medium px-2"
                    rows={4}
                    />
                </div>
            </div>
            <button className="p-2 bg-bgButton text-white mx-auto">
                submit
            </button>
        </form>
    </div>
  )
}

export default BecomeAmember;