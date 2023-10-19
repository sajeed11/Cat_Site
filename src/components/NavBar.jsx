import { useState } from "react";
import { navLinks } from "../constants"
import { logo } from '../assets'
import Notification from "./Notification";

const NavBar = () => {

    const [notifications, setNotifications] = useState(false);
    const [hoverd, setHoverd] = useState(false);
    return (
        <div>
            <nav className="w-full flex flex-row py-3 justify-between items-center">
                <img src={logo} alt="Kitty" width={60} />
                <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                    {navLinks.map((nav, index) => (
                        <li
                            // onMouseEnter={() => setNotifications(!notifications)}
                            // onMouseLeave={() => setNotifications(!notifications)}
                            onClick={() => setNotifications(true) && setHoverd(true)}
                            key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] transition-all ${index === navLinks.length - 1 ? "mr-0" : "mr-10"
                                } text-white hover:text-black `}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            {
                notifications ? (
                    <Notification />

                ) : ''
            }
        </div>
    )
}

export default NavBar