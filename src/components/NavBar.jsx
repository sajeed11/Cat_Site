import { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { logo } from "../assets";
import Notification from "./Notification";

import { Menu } from "@mui/icons-material";
import { Close } from "@mui/icons-material";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="fixed glass w-full flex flex-row justify-between items-center z-[55555] p-2">
      <img src={logo} alt="Kitty" width={50} className="ml-5" />
      <ul className="w-3/4 list-none flex items-center justify-end mr-5">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins sm:flex hidden cursor-pointer text-xs xs:text-sm sm:text-base transition-all ${index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-white hover:text-black`}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
            {nav.id === "cats" || nav.id === "images" ? <Notification /> : ""}
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Notification />
        {!isMobile ? (
          <Menu className="text-white cursor-pointer" onClick={() => setIsMobile(true)} />
        ) : (
          <Close className="text-white cursor-pointer" onClick={() => setIsMobile(false)} />
        )}
      </div>
      <div className="sm:hidden">
        {isMobile && (
          <ul className={`glass list-none flex flex-col justify-end items-start fixed top-20 right-0 p-6 rounded-xl`}>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${link.id === "home" ? "text-primary" : "text-dimWhite"} ${link.id === "contact" ? "mb-0" : "mb-4"}`}
              >
                <Link to={link.id} onClick={() => setIsMobile(false)}>{link.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
