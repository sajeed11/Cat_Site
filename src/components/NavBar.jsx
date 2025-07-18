import { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { Logo } from "../../public";
import Notification from "./Notification";

import { Menu } from "@mui/icons-material";
import { Close } from "@mui/icons-material";

// Import Framer Motion for animations
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <nav className="fixed glass w-3/4 h-16 flex flex-row justify-between items-center z-40 mx-auto mt-2 rounded-2xl">
      <img src={Logo} alt="Kitty" width={50} className="ml-5" />
      <ul className="w-3/4 h-full list-none flex items-center justify-end mr-5">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`relative h-full font-poppins sm:flex items-center hidden cursor-pointer sm:text-sm md:text-base transition-all ${index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-black hover:text-btnColor`}
            onMouseEnter={() => setHoveredItem(nav.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>

            {/* Only show dropdown if hovered and it's the right item */}
            {hoveredItem === nav.id && (nav.id === "cats" || nav.id === "images") && (
              <motion.div
                className="absolute top-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Notification />
              </motion.div>
            )}
          </li>
        ))}
      </ul>

      {/* DropDown Menu from the cats and images links */}
      {/* {isHovered ? (
        <div>
          <Notification />
        </div>
      ) : (
        ""
      )} */}

      <div className="sm:hidden flex flex-1 justify-end items-center mx-3">
        {!isMobile ? (
          <Menu className="text-white cursor-pointer" onClick={() => setIsMobile(true)} />
        ) : (
          <Close className="text-white cursor-pointer" onClick={() => setIsMobile(false)} />
        )}
      </div>
      <AnimatePresence>
        {isMobile && (
          <motion.ul
            className="sm:hidden glass w-60 list-none flex flex-col justify-end items-start fixed top-20 right-5 p-6 rounded-xl z-10"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`font-poppins font-normal cursor-pointer text-xl text-white hover:text-black transition-all ${link.id === "home" ? "text-primary" : "text-dimWhite"} ${link.id === "contact" ? "mb-0" : "mb-4"}`}
              >
                <Link to={link.id} onClick={() => setIsMobile(false)}>{link.title}</Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
