// components/ServiceSection.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Cards from "@/app/components/cards";

const cardData = [
  {
    title: "Services Overview",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem semper sit commodo eros mattis morbi fermentum.",
    icon: "overview",
  },
  {
    title: "Men's Health",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem semper sit commodo eros mattis morbi fermentum.",
    icon: "mensHealth",
  },
  {
    title: "Women's Health",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem semper sit commodo eros mattis morbi fermentum.",
    icon: "womensHealth",
  },
  {
    title: "Routine Checkups",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem semper sit commodo eros mattis morbi fermentum.",
    icon: "checkups",
  },
  {
    title: "Chronic Diseases",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem semper sit commodo eros mattis morbi fermentum.",
    icon: "chronicDiseases",
  },
  {
    title: "Child Health",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem semper sit commodo eros mattis morbi fermentum.",
    icon: "childHealth",
  },
  {
    title: "Screening and Tests",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem semper sit commodo eros mattis morbi fermentum.",
    icon: "tests",
  },
  {
    title: "Mental Health",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem semper sit commodo eros mattis morbi fermentum.",
    icon: "mentalHealth",
  },
];

const ServiceSection = () => {
  return (
    <>
      <div className="w-full h-[110px] bg-[#ECECEC] flex items-center justify-center mx-auto">
        <div className="w-11/12 max-w-[1440px] flex justify-between items-center">
          <div className="fonts.oxygen.className">
            <h1 className="text-2xl font-semibold text-[#2A2D36]">Services</h1>
            <Link href="/" className="text-[#757575]">
              Home &gt;
            </Link>
            <Link href="" className="text-[#757575]">
              Services
            </Link>
          </div>
          <div>
            <Image
              src="/assets/VectorBlue.svg"
              alt="Stethoscope"
              width={90}
              height={90}
              className="w-[90px] h-[90px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex justify-center items-center bg-white w-full lg:w-1/2 h-[629px] p-4 lg:p-10">
          <div className="max-w-3xl w-full">
            <h1 className="text-2xl lg:text-4xl font-bold text-[#2A2D36] mb-4">
              See Our Services
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Amet vel rhoncus neque
              facilisi adipiscing tincidunt. Euismod risus nunc vulputate
              ultricies ac turpis.
            </p>
            <br />
            <p className="text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Amet vel rhoncus neque
              facilisi adipiscing tincidunt. Euismod risus nunc vulputate
              ultricies ac turpis.
            </p>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[629px] mt-4 lg:mt-0">
          <Image
            src="/assets/stethuu.svg"
            alt="stethooo"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-6 justify-center mt-6">
        {cardData.map((card, index) => (
          <Cards key={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default ServiceSection;
