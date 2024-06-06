// components/ServiceSection.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServiceSection = ({
  title,
  subtitle,
  buttonText,
  bgColor,
  textColor,
  buttonBgColor,
  buttonTextColor,
  buttonBorder,
  imageSrc,
  altText,
}) => {
  return (
    <div
      className="flex justify-between items-center px-8"
      style={{
        backgroundColor: bgColor,
        height: "320px",
        width: "100%",
      }}
    >
      <div style={{ color: textColor }}>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          {title}
        </h2>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mt-2">
          {subtitle}
        </h2>
        <button
          className={`mt-4 px-4 py-2 rounded transition duration-200`}
          style={{
            backgroundColor: buttonBgColor,
            color: buttonTextColor,
            border: buttonBorder,
          }}
        >
          <Link href={"/pages/services"}>{buttonText}</Link>
        </button>
      </div>
      <div className="flex-shrink-0">
        <Image
          src={imageSrc}
          alt={altText}
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ServiceSection;
