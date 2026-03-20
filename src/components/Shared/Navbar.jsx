import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          `transition-all duration-200 ${
            isActive
              ? "bg-clip-text text-transparent bg-linear-to-bl from-[#632EE3] to-[#9F62F2] underline"
              : ""
          }`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `transition-all duration-200 ${
            isActive
              ? "bg-clip-text text-transparent bg-linear-to-bl from-[#632EE3] to-[#9F62F2] underline"
              : ""
          }`
        }
        to="/apps"
      >
        Apps
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `transition-all duration-200 ${
            isActive
              ? "bg-clip-text text-transparent bg-linear-to-bl from-[#632EE3] to-[#9F62F2] underline"
              : ""
          }`
        }
        to="/installation"
      >
        Installation
      </NavLink>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar md:px-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <div className="flex items-center gap-1">
            <img src="/src/assets/logo.png" alt="logo" className="h-8 w-8" />
            <Link to="/" className="text-sm font-bold bg-clip-text text-transparent bg-linear-to-bl from-[#632EE3] to-[#9F62F2]">
              HERO.IO
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base space-x-8 font-medium">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="https://github.com/shoyonp/" className="btn text-white font-medium bg-linear-to-bl from-[#632EE3] to-[#9F62F2]">
            <FaGithub size={17} /> Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
