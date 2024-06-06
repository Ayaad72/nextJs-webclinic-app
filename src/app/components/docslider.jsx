import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  {
    src: "/assets/carouselImagesTwo/image 7.svg",
    alt: "Carousel Image 1",
    name: "Dr John Doe",
    qualification: "MBBS Mangalore",
    description:
      "Lorem ipsum dolor sit amet consectetur. Volutpat faucibus nulla malesuada pellentesque.",
  },
  {
    src: "/assets/carouselImagesTwo/image 7.svg",
    alt: "Carousel Image 2",
    name: "Dr Jane Doe",
    qualification: "MD New York",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    src: "/assets/carouselImagesTwo/image 7.svg",
    alt: "Carousel Image 3",
    name: "Dr Sam Smith",
    qualification: "PhD London",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    src: "/assets/carouselImagesTwo/image 7.svg",
    alt: "Carousel Image 4",
    name: "Dr Anna Brown",
    qualification: "DDS Toronto",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
  },
  {
    src: "/assets/carouselImagesTwo/image 7.svg",
    alt: "Carousel Image 5",
    name: "Dr Chris Green",
    qualification: "DVM California",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  },
];

const DocSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 9000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[629px]">
      <div className="flex flex-col w-full lg:w-1/2 space-y-6 p-4 lg:p-10">
        <p className="text-lg text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Amet vel rhoncus neque
          facilisi adipiscing tincidunt. Euismod risus nunc vulputate
          ultriciesturpis. Lorem ipsum dolor sit amet consectetur. Amet vel
          rhoncus neque facilisi adipiscing tincidunt. Euismod risus nunc
          vulputate ultricies ac turpis.
        </p>
      </div>
      <div className="w-full lg:w-1/2 relative h-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="relative w-full h-full flex-shrink-0" key={index}>
              <div className="relative w-full h-64 lg:h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pt-36 lg:pt-52">
                <div
                  className="h-[120px] w-[250px] lg:h-[180px] lg:w-[320px] text-center flex flex-col justify-center items-center p-4"
                  style={{
                    border: "1px solid #80808066",
                    backdropFilter: "blur(3px)",
                    background: "#ECECEC",
                    color: "#2A2D36",
                  }}
                >
                  <h2 className="text-lg lg:text-xl font-bold">{image.name}</h2>
                  <div className="relative w-full h-[2px] my-2">
                    <Image
                      src="/assets/carouselImagesTwo/Line 1.svg"
                      alt="Line"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-sm lg:text-md">{image.qualification}</p>
                  <p className="text-xs lg:text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-[10px] lg:left-[30px] top-1/2 transform -translate-y-1/2 p-1 lg:p-2 rounded-full shadow-md bg-white"
        >
          <FaChevronLeft className="text-gray-800" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-[10px] lg:right-[30px] top-1/2 transform -translate-y-1/2 p-1 lg:p-2 rounded-full shadow-md bg-white"
        >
          <FaChevronRight className="text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default DocSlider;
