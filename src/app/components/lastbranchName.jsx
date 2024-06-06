import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
const lastbranchName = () => {
  return (
    <div>
      <section
        className="flex flex-col lg:flex-row justify-between items-center"
        style={{ backgroundColor: "#FFFFFF", height: "629px" }}
      >
        <div className="flex flex-col w-full lg:w-1/2 space-y-6 px-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Branch Name
          </h2>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Amet rhoncus neque facilisi
            adipiscing tincidunt. Euismod risus nunc vulputate ultricies ac
            turpis.
          </p>
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gray-800" />
              <div>
                <span className="font-semibold">Location: </span>
                4517 Washington Ave. Manchester, Kentucky 39495
              </div>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="mr-2 text-gray-800" />
              <div>
                <span className="font-semibold">Phone: </span>
                (432) 123446098
              </div>
            </div>
            <div className="flex items-center">
              <FaWhatsapp className="mr-2 text-gray-800" />
              <div>
                <span className="font-semibold">Whatsapp: </span>
                +923 123446098
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative" style={{ height: "100%" }}>
          <Image
            src="/assets/image 7 Machine.svg"
            alt="Branch Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
    </div>
  );
};

export default lastbranchName;
