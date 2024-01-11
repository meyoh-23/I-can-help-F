import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "./../assets/logo-removebg-preview.png";
import { useState } from "react";
import { navItems } from "../assets/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [mobileNav, showMobileNav] = useState(false);
    return (
        <nav className="flex justify-between items-center py-3 w-full px-1 bg-secondary fixed z-10 top-0 left-0">
            <div>
                <img src={logo} alt="i can help"  className="w-[100px] h-auot"/>
            </div>
            <ul className="md:flex items-center justify-between gap-3 hidden">
                {
                    navItems.map((item) => ( 
                        <Link to={item.path} key={item.title} className="text-white font-raleway font-bold text-center text-p">{item.title}</Link>
                    ))
                }
            </ul>
            <button className="hidden md:flex bg-bgButton p-1 text-center text-white rounded-md">
                Become <br />a Member
            </button>
            <button className="flex md:hidden z-20" onClick={() =>showMobileNav(!mobileNav)}>
                {mobileNav?<XMarkIcon className="h-6 w-6 text-white"/>  :<Bars3Icon className="h-6 w-6 text-white"/>}
            </button>
            {
                mobileNav && <nav className="z-10 w-[50vw] bg-secondary absolute top-0 right-0 h-[100vh] rounded-l-xl" onClick={()=>showMobileNav(false)}>
                    <div className=" flex flex-col items-center mx-3  mt-20 gap-2">
                        {
                            navItems.map((item) => ( 
                        <Link to={item.path} key={item.title} className="text-white font-raleway font-bold text-center text-p">{item.title}</Link>
                    ))
                        }
                    </div>
                </nav>
            }
        </nav>
    )
}

export default Navbar;