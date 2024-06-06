import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="flex flex-col sm:flex-row justify-between items-center sm:items-start px-8 py-12 gap-y-8 sm:gap-y-0 gap-x-12"
      style={{
        backgroundColor: "#2A2D36",
        height: "auto",
        // maxWidth: "1440px",
        // margin: "0 auto",
      }}
    >
      {/* Clinic Information */}
      <div className="text-white w-full sm:w-1/3 text-center sm:text-left">
        <h2 className="text-2xl font-semibold">CLINIC NAME</h2>
        <p className="mt-4 text-gray-400">
          Lorem ipsum dolor sit amet consectetur. Ultrices ac luctus sapien
          ornare velit tellus id vehicula. Quisque sit a augue imperdiet mattis
          non viverra semper. Rutrum sit sagittis diam vulputate feugiat
          volutpat magnis.
        </p>
      </div>

      {/* Contact Information */}
      <div className="text-white w-full sm:w-1/3 text-center sm:text-left">
        <h2 className="text-2xl font-semibold">Find Us</h2>
        <ul className="mt-4 space-y-4">
          <li className="flex justify-center sm:justify-start items-center text-gray-400">
            <FaMapMarkerAlt className="mr-2" />
            <span>
              Location: 4517 Washington Ave. Manchester, Kentucky 39495
            </span>
          </li>
          <li className="flex justify-center sm:justify-start items-center text-gray-400">
            <FaPhoneAlt className="mr-2" />
            <span>Phone: (432) 123446098</span>
          </li>
          <li className="flex justify-center sm:justify-start items-center text-gray-400">
            <FaWhatsapp className="mr-2" />
            <span>Whatsapp: +923 123446098</span>
          </li>
          <li className="flex justify-center sm:justify-start items-center text-gray-400">
            <FaEnvelope className="mr-2" />
            <span>Email: clinicsmail44@gmail.com</span>
          </li>
        </ul>
      </div>

      {/* Explore and Social Media */}
      <div className="text-white w-full sm:w-1/3 text-center sm:text-left">
        <h2 className="text-2xl font-semibold">Explore</h2>
        <ul className="mt-4 space-y-4 text-gray-400">
          <li>Our Team</li>
          <li>Services</li>
        </ul>
        <div className="flex justify-center sm:justify-start space-x-4 mt-8">
          <a
            href="#"
            className="text-white hover:text-gray-400 p-2 border border-gray-400 rounded"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 p-2 border border-gray-400 rounded"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 p-2 border border-gray-400 rounded"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 p-2 border border-gray-400 rounded"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
