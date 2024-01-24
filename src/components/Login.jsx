import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    // collection information from the form
    const handleOnchange = (e) =>{
        const {name, value} = e.target;
        setLoginData((prev) => {
            return {
                ...prev,
                [name] :value
            }
        })
    }

    // for submiting login data to backend
    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = loginData;
        if (loginData) {
            console.log(loginData);
        }
    }


    return (
        <div className="min-h-[100vh] mt-20 grid content-center">
            <div className="max-w-md w-full shadow-md mx-auto py-4 grid content-center">
                <form className="w-full flex flex-col p-3" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleOnchange}
                    className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                    />
                    <label htmlFor="password">Password</label>
                    <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
                        <input
                        className=" w-full bg-slate-200 border-none outline-none" 
                        type={showPassword ? "text" : "password"} 
                        name="password"
                        id="password"
                        value={loginData.password}
                        onChange={handleOnchange}
                        />
                        <span 
                        className="flex text-xl cursor-pointer"
                        onClick={()=>setShowPassword((prev) => !prev)}
                        >
                            { showPassword ? <BiShow/> : <BiHide/> }
                        </span>
                        
                    </div>
                    <button className="p-1 bg-bgButton mx-auto rounded text-white">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;