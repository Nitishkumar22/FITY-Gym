import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <>
      <header className=" fixed w-screen z-50 top-0 left-0 right-0">
        <nav className="bg-transparent  px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <h1 className="font-bold text-2xl">FITY</h1>
            </Link>
            <div className="flex  items-center gap-7 font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : " text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Trainer
              </NavLink>
              <NavLink
                to="membership"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : " text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Membership
              </NavLink>

              <NavLink
                to="about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : " text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                About
              </NavLink>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : " text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Contact
              </NavLink>
            </div>
            <div className="my-2">
              <Button variant="contained" color="error">
                Join Now
              </Button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
