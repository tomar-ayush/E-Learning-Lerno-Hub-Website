import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

import img1 from "../assets/images/avatar.jpeg";

const Navbar = () => {
  const { login, register, isAuthenticated, logout, user } = useKindeAuth();

  return (
    <div>
      <div className="flex flex-row justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <NavLink to="/" className="font-semibold text-2xl p-1 cursor-pointer">
            Learno-Hub
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

        {!isAuthenticated ? (
          <div className="flex gap-6 ">
            <button
              onClick={() => register()}
              type="button"
              className="border rounded-xl px-4 py-2 hover:bg-green-200"
            >
              Register
            </button>
            <button
              onClick={() => login()}
              type="button"
              className="border rounded-xl px-4 py-2 hover:bg-green-200"
            >
              Log In
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <Link to="/profile">
              <div className="flex items-center">
                <img src={img1} width={70} />
                <p>{user.given_name} </p>
              </div>
            </Link>
            <button
              onClick={() => logout()}
              type="logout"
              className="border rounded-xl px-4 py-2 hover:bg-green-200"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
