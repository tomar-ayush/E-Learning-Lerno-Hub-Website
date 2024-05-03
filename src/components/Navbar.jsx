import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="flex flex-row justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <NavLink to="/" className="font-semibold text-2xl p-1 cursor-pointer">
            eStudy
          </NavLink>
        </div>
        <nav className="hidden md:flex gap-5 font-medium p-1 cursor-pointer">
          <NavLink
            to=""
            spy={true}
            smooth={true}
            duration={500}
            className={({ isActive }) =>
              `hover:text-green-500  transition-all ${
                isActive ? "text-green-500" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            spy={true}
            smooth={true}
            duration={500}
            className={({ isActive }) =>
              `hover:text-green-500  transition-all ${
                isActive ? "text-green-500" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/courses"
            spy={true}
            smooth={true}
            duration={500}
            className={({ isActive }) =>
              `hover:text-green-500  transition-all ${
                isActive ? "text-green-500" : ""
              }`
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/reviews"
            spy={true}
            smooth={true}
            duration={500}
            className={({ isActive }) =>
              `hover:text-green-500  transition-all ${
                isActive ? "text-green-500" : ""
              }`
            }
          >
            Reviews
          </NavLink>
          <NavLink
            to="/contact"
            spy={true}
            smooth={true}
            duration={500}
            className={({ isActive }) =>
              `hover:text-green-500  transition-all ${
                isActive ? "text-green-500" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
