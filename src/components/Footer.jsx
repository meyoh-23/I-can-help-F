import { Link } from "react-router-dom";
import { navItems } from "../assets/constants";
import logo from "./../assets/logo-removebg-preview.png";
import { FaInstagram, FaFacebook, FaTwitter, } from "react-icons/fa";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

  return (
    <footer className="w-full bg-secondary py-5 mt-5">
        <div className="flex flex-col items-start w-5/6 mx-auto gap-5">
        <img src={logo} alt="i-cant help"  className="w-[150px] h-auto"/>
        <div className="w-full flex flex-wrap items-start justify-between">
            <div className="flex flex-col items-start gap-2">
                {
                    navItems.map((item) => ( 
                        <Link to={item.path} key={item.title} className="text-white font-raleway font-bold text-center text-p">
                            {item.title}
                        </Link>
                    ))
                }
            </div>
            <div className="flex flex-wrap gap-3">
                <a href="#facebook"><FaFacebook/></a>
                    <a href="#insta"><FaInstagram/></a>
                    <a href="#x-app"><FaTwitter/></a>
            </div>
            <div>
                t&cs
            </div>
        </div>
        <p className="text-white font-raleway font-bold text-p"> Copyright &copy; <span>{year}</span> I can Help </p>
        </div>
    </footer>
  )
}

export default Footer;