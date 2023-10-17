import { navLinks } from "../constants"
import { logo } from '../assets';

const NavBar = () => {
    return (
        <nav className="w-full felx py-3 justify-between items-center navbar">
            <img src={logo} alt="Kitty" width={60} />
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] transition-all ${index === navLinks.length - 1 ? "mr-0" : "mr-10"
                            } text-white hover:text-black `}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar