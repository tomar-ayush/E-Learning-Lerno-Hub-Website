import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between p-5 md:px-32 border border-lightText rounded-lg bg-white">
        <div className="flex flex-col md:flex-row gap-5 font-medium p-5 test-lg">
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
            to="about"
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
            to="courses"
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
            to="Reviews"
            spy={true}
            smooth={true}
            duration={500}
            className={({ isActive }) =>
              `hover:text-green-500  transition-all ${
                isActive ? "text-green-500" : ""
              }`
            }
          >
            reviews
          </NavLink>
          <NavLink
            to="contact"
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
        </div>
        <div>
          <NavLink to="/" className="font-semibold text-2xl p-5 cursor-pointer">
            eStudy
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
