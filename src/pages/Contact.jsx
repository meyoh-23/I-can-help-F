import { useForm } from "react-hook-form";

const ContactUs = () => {
  const inputStyle = `border-2 border-primary rounded-md text-secondary font-raleway text-h3 font-medium px-2`;
  const { register, trigger, formState: { errors } } = useForm();

  const onSubmit = async(e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
    <section className="h-[100vh] w-full mt-20 grid content-center">
      <div className="pt-12 w-5/6  mx-auto flex flex-col items-center mb-8">
        <h1 className="font-bold font-raleway text-h2">Reach Out to Us</h1>
        <form 
        action="https://formsubmit.co/fdd7633e2d5b9f66f63a47bb56e57896" 
        className="py-3 flex flex-col items-start gap-4 my-10 shadow-xl w-full p-3 rounded-md"
        target="_blank"
        onSubmit={onSubmit}
        method="POST"
        >
          <div className="flex flex-col ss:flex-row gap-3">
            <label htmlFor="name"> Your Name:</label>
            <input
              type="text"
              placeholder="Enter Your Name" 
              className={`${inputStyle} min-w-[200px] ss:w-300px`} 
              { ...register("name", {
                required: true,
                maxLength: 60,
                minLength: 2,
              }) }
              />
              {errors.name && (
                <p className="mt-1 text-red-500 ">
                  {errors.name.type = "required" && "You Must Enter your Name!" }
                  {errors.name.type = "maxLength" && "Your Name is Too Long!!" }
                  {errors.name.type = "minLength" && "Your Name is Too Short!!" }
                </p>
              )}
          </div>
          <div className="flex flex-col ss:flex-row gap-3">
            <label htmlFor="email">Your Email:</label>
            <input 
            type="text" 
            placeholder="Enter Your Email" 
            className={`${inputStyle} min-w-[200px] ss:w-300px`}
            { ...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              }) }
            />
            {errors.email && (
              <p className="mt-1 text-red-500 ">
                {errors.email.type = "required" && "You Must Enter your email!" }
                {errors.email.type = "maxLength" && "Your Email Is Invalid" }
              </p>
            )}
          </div>
          <div className="flex flex-col ss:flex-row gap-3">
            <label htmlFor="phone">Phone Number:</label>
            <input type="number" placeholder="0712345678" className={`${inputStyle}`}/>
          </div>
          <div className="flex flex-col ss:flex-row gap-3">
            <label htmlFor="message">Your Message:</label>
            <textarea 
            type="text" 
            placeholder="Your Message" 
            className={`${inputStyle} w-[250px] ss:min-w-[350px]`}
            rows={4}
            { ...register("message", {
              required: true,
              maxLength: 200,
            }) }
            />
            {errors.message && (
              <p className="mt-1 text-red-500 ">
                {errors.message.type = "required" && "You must enter a message!" }
                {errors.message.type = "maxLength" && "your message is too long!" }
              </p>
            )}
          </div>
          <button type="submit" className="bg-primary rounded-md text-center p-2 mx-auto">
            submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactUs;