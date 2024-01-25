import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";

const Signup = () => {
    const[showPassword, setShowPassword] = useState(false);
    const [signupDetails, setSignupDetails] = useState({
        fullName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    // collect data from signup form
    const handleOnchange = (e) =>{
        const {name, value} = e.target;
        setSignupDetails((prev) => {
            return {
                ...prev,
                [name] :value
            }
        })
    }

    // submition
    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = signupDetails;
        if (email && password) {
            console.log(signupDetails);
            // post the information to the backend from here
        }
    }

    return (
        <div className="min-h-[100vh] grid content-center">
            <div className="mx-auto max-w-md w-full shadow-md px-2 py-3">
                <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
                    <label htmlFor="fullName">full Name:</label>
                    <input 
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={signupDetails.fullName}
                    onChange={handleOnchange}
                    className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                    />
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email"
                    name="email"
                    id="email"
                    value={signupDetails.email}
                    onChange={handleOnchange}
                    className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                    />
                    <label htmlFor="password">Password:</label>
                    <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
                        <input
                        className=" w-full bg-slate-200 border-none outline-none" 
                        type= {showPassword? "text": "password"} 
                        name="password"
                        id="password"
                        value={signupDetails.password}
                        onChange={handleOnchange}
                        />
                        <span 
                        className="flex text-xl cursor-pointer"
                        onClick={()=>setShowPassword((prev) => !prev)}
                        >
                            { showPassword ? <BiShow/> : <BiHide/> }
                        </span>
                    </div>
                    <label htmlFor="passwordConfirm">Confirm Password:</label>
                    <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
                        <input
                        className=" w-full bg-slate-200 border-none outline-none" 
                        type= {showPassword? "text": "password"} 
                        name="passwordConfirm"
                        id="passwordConfirm"
                        value={signupDetails.passwordConfirm}
                        onChange={handleOnchange}
                        />
                    </div>
                    <button>
                        submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Signup;