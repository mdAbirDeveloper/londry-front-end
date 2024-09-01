/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// Navbar.js
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link onClick={closeMenu} href="/">
          <img src="logo.jpg" className="w-20 rounded-full"/>
        </Link>
        {/* Toggle Button with Animation */}
        <div className="md:hidden relative z-50" onClick={toggleMenu}>
          {menuOpen ? (
            <AiOutlineClose className="text-white text-3xl cursor-pointer transition-transform duration-300 transform rotate-180" />
          ) : (
            <AiOutlineMenu className="text-white text-3xl cursor-pointer transition-transform duration-300 transform rotate-0" />
          )}
        </div>
        {/* Menu Items */}
        <ul
          className={`fixed inset-0 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 flex flex-col items-center justify-center space-y-4 transform transition-transform duration-300 md:static md:flex md:flex-row md:space-y-0 md:space-x-4 md:bg-transparent md:items-center ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 z-40`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/components/about" },
            { name: "Services", path: "/components/services" },
            { name: "Prices", path: "/components/prices" },
            { name: "PickUp Request", path: "/components/pickup-request" },
            { name: "Contact", path: "/components/contact" },
            { name: "Faq", path: "/components/faq" },
          ].map((item, index) => (
            <li
              key={item.name}
              className={`mt-2 md:mt-0 ${menuOpen && "border w-full text-center rounded"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link
                onClick={closeMenu}
                href={item.path}
                className={`text-white block py-2 rounded-md font-medium hover:bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 hover:text-white transition duration-300 text-lg px-5 hover:scale-105 hover:rotate-3 hover:shadow-lg `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
