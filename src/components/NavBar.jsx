import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo } from "../assets";
import Notification from "./Notification";

const NavBar = () => {
  return (
    <nav className="w-full flex flex-row justify-between items-center bg-primary">
      <img src={logo} alt="Kitty" width={60} className="mx-6" />
      <ul className="w-3/4 list-none flex justify-end items-center mx-6">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins relative group font-normal cursor-pointer text-[16px] transition-all ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white hover:text-black`}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
            {nav.id === "cats" || nav.id === "images" ? <Notification /> : ""}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
