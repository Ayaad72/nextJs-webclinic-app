"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="bg-gray-200 py-2">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-gray-700" />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-gray-700" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-gray-700" />
            </a>
          </div>
          <div className="text-gray-700">+60123397028</div>
        </div>
      </div>
      <nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-md"
      >
        <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
          <Link href="/" legacyBehavior>
            <a className="flex items-center space-x-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/assets/Frame.svg"
                  width={32}
                  height={32}
                  priority
                  alt="Logo"
                />
              </motion.div>
              <span className="text-xl font-semibold text-black">LOGO</span>
            </a>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="#contact" legacyBehavior>
              <a className="py-2 px-4 bg-gray-800 text-white rounded hidden md:block hover:bg-gray-700 hover:text-gray-300 hover:shadow-lg transition duration-200">
                Contact Us
              </a>
            </Link>
            <button
              onClick={toggleMenu}
              type="button"
              ref={buttonRef}
              className="p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-md"
            >
              <ul className="flex flex-col items-center py-4">
                {["Services", "Our Team", "Contact Us"].map((item) => (
                  <li key={item} className="w-full text-center">
                    <Link
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      legacyBehavior
                    >
                      <a className="block py-2 text-gray-900 hover:bg-gray-100">
                        {item}
                      </a>
                    </Link>
                  </li>
                ))}
                <li className="w-full text-center">
                  <Link href="#contact" legacyBehavior>
                    <a className="block py-2 text-gray-900 hover:bg-gray-100">
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
