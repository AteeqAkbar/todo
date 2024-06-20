import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth_context";
import { auth } from "../utils_firebase/config";

function Header() {
  const { user, setUser, triggerAuthEffect } = useContext(AuthContext);

  return (
    <header className="text-gray-400 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href=""
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Events</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-white" to="/">
            Home
          </Link>
          {user.authIsValide ? (
            <>
              <Link className="mr-5 hover:text-white" to="/events">
                Events
              </Link>
              <Link className="mr-5 hover:text-white" to="/">
                Add Event
              </Link>
              {/* <Link className="mr-5 hover:text-white" to="/bulk-delete">
                Edit Event
              </Link> */}
            </>
          ) : (
            <>
              <Link className="mr-5 hover:text-white" to="/">
                FAQ
              </Link>
              <Link className="mr-5 hover:text-white" to="/">
                Directory
              </Link>
            </>
          )}
        </nav>
        {user.authIsValide ? (
          <Link
            onClick={async () => {
              const userCredential = await auth.signOut();
              setUser((prev) => {
                return { ...prev, user: false, authIsValide: false };
              });
            }}
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            LogOut
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        ) : (
          <Link
            to={"/login"}
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
