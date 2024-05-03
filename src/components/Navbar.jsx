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
            to="/home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-green-500  transition-all"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-green-500  transition-all"
          >
            About
          </NavLink>
          <NavLink
            to="/courses"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-green-500  transition-all"
          >
            Courses
          </NavLink>
          <NavLink
            to="/reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-green-500  transition-all"
          >
            Reviews
          </NavLink>
          <NavLink
            to="/contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-green-500  transition-all"
          >
            Contact
          </NavLink>
        </nav>
        <div className="flex md:hidden" onClick={handleChange}>
          <div className="p-2">
            <IoMdMenu size={22} />
          </div>
        </div>
      </div>
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-white left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <NavLink
          to=""
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-green-500  marker:transition-all"
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-green-500  transition-all"
        >
          About
        </NavLink>
        <NavLink
          to="courses"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-green-500  transition-all"
        >
          Courses
        </NavLink>
        <NavLink
          to="Reviews"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-green-500  transition-all"
        >
          reviews
        </NavLink>
        <NavLink
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-green-500  transition-all"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
