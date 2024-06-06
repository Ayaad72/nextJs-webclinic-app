import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const HomePageSections = ({ sections = [] }) => {
  return (
    <div className="Grid" style={{ width: "100%" }}>
      {sections.map((section, index) => (
        <section
          key={index}
          className="flex flex-col lg:flex-row justify-between items-center"
          style={{ height: "649px" }}
        >
          <div
            className="flex justify-center items-center bg-white-100 w-full lg:w-1/2"
            style={{ height: "100%" }}
          >
            <div
              className="w-full sm:w-1/2 p-4"
              style={{ maxWidth: "37rem", width: "36rem" }}
            >
              <h2 className="text-2xl lg:text-4xl">{section.title}</h2>
              <h2 className="text-2xl lg:text-4xl mt-2">{section.subtitle}</h2>
              <div className="mt-8 space-y-4">
                {section.links &&
                  section.links.map((link, linkIndex) => (
                    <div key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-lg text-gray-600 hover:text-gray-800"
                      >
                        {link.text} &gt;
                      </a>
                      <br />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative" style={{ height: "100%" }}>
            <Image
              src={section.imageSrc}
              alt={section.altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default HomePageSections;
