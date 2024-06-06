"use client";
import WelcomeTo from "./components/welcomeTo";
import Services from "./components/services";
import InquiryForm from "./components/inquiry";
import PatientSlider from "./components/patientSlider";
import DocSlider from "./components/docslider";
import Machine from "./components/machine";
import MachineReverse from "./components/machineReverse";
import LastbranchName from "./components/lastbranchName";

export default function Home() {
  const sections = [
    {
      title: "Welcome To Beyond",
      subtitle: "Helping You Move Through Life.",
      links: [
        { text: "See Our Services", href: "#services" },
        { text: "Meet The Team", href: "#team" },
        { text: "Contact Us", href: "#contact" },
      ],
      imageSrc: "/assets/bpChecker.svg",
      altText: "Description",
    },
  ];

  return (
    <main>
      <WelcomeTo sections={sections} />
      <Services
        title="Our Services Help You"
        subtitle="Move Through Life."
        buttonText="See Our Services"
        bgColor="#2A2D36"
        textColor="white"
        buttonBgColor="white"
        buttonTextColor="#2A2D36"
        buttonHoverBgColor="gray-200"
        buttonBorder="2px solid black"
        imageSrc="/assets/Vector.svg"
        altText="Stethoscope"
      />
      <PatientSlider />
      <Services
        title="Our Team Help You"
        subtitle="Move Through Life."
        buttonText="Meet The Team"
        bgColor="#ECECEC"
        textColor="gray-800"
        buttonBgColor="#2A2D36"
        buttonTextColor="white"
        buttonHoverBgColor="black"
        buttonBorder="2px solid black"
        imageSrc="/assets/VectorBlue.svg"
        altText="Stethoscope"
      />
      <DocSlider />
      <Services
        title="Our Services Help You"
        subtitle="Move Through Life."
        buttonText="See Our Services"
        bgColor="#2A2D36"
        textColor="white"
        buttonBgColor="white"
        buttonTextColor="#2A2D36"
        buttonHoverBgColor="gray-200"
        buttonBorder="2px solid black"
        imageSrc="/assets/Vector.svg"
        altText="Stethoscope"
      />
      <Machine />
      <MachineReverse />
      <LastbranchName />
      <InquiryForm />
    </main>
  );
}
