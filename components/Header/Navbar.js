import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import TopBar from "./TopBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navToggleBtn = useRef(null);

  useEffect(() => {
    const clickHandler = () => {
      setIsOpen(state => !state);
    };
    navToggleBtn.current.addEventListener("click", clickHandler);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (navToggleBtn.current)
        navToggleBtn.current.removeEventListener("click", clickHandler);
    };
  });

  return (
    <header>
      <TopBar />

      {/* Main navigation bar */}
      <nav className="bg-white px-2 sm:px-4 xl:px-0 py-2.5 border">
        <div className="container flex flex-wrap justify-between items-center max-w-[1200px] mx-auto">
          <Link href="/" className="flex" passHref>
            <a className="self-center text-lg font-semibold whitespace-nowrap text-[#4879FF]">
              Medics
            </a>
          </Link>

          {/* CAll to action button */}

          <div className="flex justify-center items-center md:order-2">
            <a
              className="text-white rounded-full text-xs font-medium bg-[#4E7EFF] px-4 py-2 lg:mr-0 flex justify-center items-center hover:bg-[#6890ff]"
              href="#application"
            >
              Appointment
            </a>

            <button
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden"
              ref={navToggleBtn}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            style={isOpen ? { display: "flex" } : {}}
          >
            <ul className="flex flex-col justify-between md:flex-row">
              <li>
                <a href="#" className="nav-link md:nav-active-link">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="nav-link">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="nav-link">
                  Services
                </a>
              </li>

              <li>
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
