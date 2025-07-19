import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar({ colors }) {
  const [isSeoDropdownOpen, setIsSeoDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleSeoDropdown = () => {
    setIsSeoDropdownOpen(!isSeoDropdownOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold" style={{ color: colors.black }}>
        Knaptix
      </div>
      <ul className="flex space-x-8">
        <li>
          <NavLink
            to="/"
            className={`text-lg font-medium hover:text-green-600 transition-colors duration-300`}
            style={{ color: isActive("/") ? colors.green : colors.black }}
          >
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="text-lg font-medium hover:text-green-600 transition-colors duration-300"
            style={{ color: isActive("/about") ? colors.green : colors.black }}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="text-lg font-medium hover:text-green-600 transition-colors duration-300"
            style={{ color: isActive("/contact") ? colors.green : colors.black }}
          >
            Contact
          </NavLink>
        </li>
        <li className="relative">
          <button
            onClick={toggleSeoDropdown}
            className="text-lg font-medium hover:text-green-600 transition-colors duration-300 flex items-center"
            style={{ color: location.pathname.startsWith("/seo") ? colors.green : colors.black }}
          >
            SEO
            <svg
              className={`ml-2 w-4 h-4 transform ${isSeoDropdownOpen ? "rotate-180" : "rotate-0"} transition-transform duration-200`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isSeoDropdownOpen && (
            <div
              className="absolute top-full left-0 mt-2 py-2 w-48 rounded-md shadow-lg z-10"
              style={{ backgroundColor: colors.white }}
            >
              <NavLink
                to="/seo/geo-services"
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                style={{ color: colors.black }}
              >
                GEO Services
              </NavLink>
              <NavLink
                to="/seo/google-local-services"
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200"
                style={{ color: colors.black }}
              >
                Google Local Services
              </NavLink>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
