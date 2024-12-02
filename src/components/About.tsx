"use client";
import { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import about from "../../assets/about.png";

gsap.registerPlugin(ScrollTrigger);
export default function About() {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(containerRef.current, {
        opacity: 0,
        y: 100,
        duration: 0.3,
        ease: "power1",
      });

      tl.from(
        [
          ".ABOUT-IMAGE",
          ".MISSION-HEADING",
          ".SEEDERS-HEADING",
          ".PARAGRAPH-1",
          ".PARAGRAPH-2",
          ".PARAGRAPH-3",
        ], // Ensure each class here matches the JSX
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.3"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="w-full md:max-w-[1440px] mx-auto"
      ref={containerRef}
      style={{
        backgroundColor: "rgba(209, 220, 242, 0.24)",
        borderRadius: "20px",
      }}
    >
      <div className="CONTAINER   mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-16 lg:px-24 py-12   ">
        {/* Left Text Content */}
        <div className="flex flex-col gap-3">
          {/* Subtitle */}
          <h4 className="MISSION-HEADING text-light font-semibold text-[18px] lg:text-[24px]">
            Our Mission
          </h4>

          {/* Title */}
          <h2 className="SEEDERS-HEADING text-[32px] md:text-5xl  lg:text-[28px] xl:text-[42px] lg:leading-normal font-bold text-gray-900 leading-tight mb-4">
            About Seeders
          </h2>

          {/* Description */}
          <p className="PARAGRAPH-1 lg:text-[15px] leading-relaxed text-[14px] text-[#4F4F4F]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="PARAGRAPH-2 lg:text-[15px] leading-relaxed text-[14px] text-[#4F4F4F]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p className="PARAGRAPH-3 lg:text-[15px] leading-relaxed text-[14px] text-[#4F4F4F]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end w-full h-80 lg:h-auto">
          <Image
            src={about} // Replace with the actual path to your image
            alt="Team working together"
            className="ABOUT-IMAGE rounded-lg shadow-md object-cover"
            layout="fill" // Makes the image responsive and fills the container
            objectFit="cover" // Ensures the image covers the entire area without distortion
            priority
          />
        </div>
      </div>
    </section>
  );
}
