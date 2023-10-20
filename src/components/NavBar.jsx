import { Link, Routes, Route } from "react-router-dom";
import { navLinks } from "../constants"
import { logo } from '../assets'
import Notification from "./Notification";

const NavBar = () => {
    return (
        <div>
            <nav className="w-full flex flex-row py-3 justify-between items-center ">
                <img src={logo} alt="Kitty" width={60} />
                <ul className="list-none sm:flex  justify-end items-center flex-1 " >
                    {navLinks.map((nav, index) => (

                        <li
                            key={nav.id}
                            className={`font-poppins relative group font-normal cursor-pointer text-[16px] transition-all ${index === navLinks.length - 1 ? "mr-0" : "mr-10"
                                } text-white hover:text-black`}
                        >
                            <Link to={`/${nav.id}`}>{nav.title}</Link>
                            {nav.id === 'cats' || nav.id === 'images' ? <Notification /> : ''}
                        </li>
                    ))}
                </ul>

            </nav>
        </div>
    )
}

export default NavBar