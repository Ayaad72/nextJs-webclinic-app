import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  {
    src: "/assets/carouselImages/imageOne.svg",
    alt: "Carousel Image 1",
    caption: "We Care",
  },
  {
    src: "/assets/carouselImages/imageTwo.svg",
    alt: "Carousel Image 2",
    caption: "Your Health",
  },
  {
    src: "/assets/carouselImages/imageThree.svg",
    alt: "Carousel Image 3",
    caption: "Healthy Living",
  },
  {
    src: "/assets/carouselImages/imageFour.svg",
    alt: "Carousel Image 4",
    caption: "Best Faculty",
  },
  {
    src: "/assets/carouselImages/imageFive.svg",
    alt: "Carousel Image 5",
    caption: "Research Team",
  },
];

const PatientSlider = () => {
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
    <div className="flex flex-col lg:flex-row justify-between items-center  h-[629px]">
      <div className="flex flex-col w-full lg:w-1/2 space-y-6 px-10">
        <p className="text-lg text-gray-600">
          At Beyond we believe in a patient-focused care model by offering a
          range of services under one roof and a team approach we want to help
          you ‘Move Through Life’.
        </p>
        <a href="#" className="text-blue-600 text-lg">
          See All Of Our Services &gt;
        </a>
      </div>
      <div className="w-full lg:w-1/2 relative h-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="  relative w-full h-full flex-shrink-0" key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center  to-gray-400/50 text-white text-lg font-semibold">
                <div
                  className="h-[80px] w-[209px] text-center flex justify-center items-center text-s ]"
                  style={{
                    border: "1px solid #80808066",
                    backdropFilter: "blur(3px)",
                    background:
                      "linear-gradient(98.34deg, rgba(52, 58, 64, 0.2) 0%, rgba(217, 217, 217, 0.6) 100%)",
                  }}
                >
                  {image.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-[30px] top-1/2 transform -translate-y-1/2  p-2 rounded-full shadow-md"
        >
          <FaChevronLeft className="text-gray-800" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-[30px] top-1/2 transform -translate-y-1/2  p-2 rounded-full shadow-md"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default PatientSlider;
