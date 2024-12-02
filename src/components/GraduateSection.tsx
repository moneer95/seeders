"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Carousel } from "@mantine/carousel";
import { FiArrowRight } from "react-icons/fi";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function GraduateSection() {
  const containerRef = useRef(null);
  const smallHeadingRef = useRef(null);
  const largeHeadingRef = useRef(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const contactBtnRef = useRef<HTMLDivElement>(null);
  const sponsorBtnRef = useRef<HTMLDivElement>(null);

  const boxInfo = [
    {
      description:
        "“This program has changed my life. Thanks to the support, I&apos;m now pursuing my dream of becoming a dental professional in the UK.”",
      studentName: "Student Name",
      universityName: "- London University",
    },
    {
      description:
        "“This program has changed my life. Thanks to the support, I&apos;m now pursuing my dream of becoming a dental professional in the UK.”",
      studentName: "Student Name",
      universityName: "- London University",
    },
    {
      description:
        "“This program has changed my life. Thanks to the support, I&apos;m now pursuing my dream of becoming a dental professional in the UK.”",
      studentName: "Student Name",
      universityName: "- London University",
    },
    {
      description:
        "“This program has changed my life. Thanks to the support, I&apos;m now pursuing my dream of becoming a dental professional in the UK.”",
      studentName: "Student Name",
      universityName: "- London University",
    },
    {
      description:
        "“This program has changed my life. Thanks to the support, I&apos;m now pursuing my dream of becoming a dental professional in the UK.”",
      studentName: "Student Name",
      universityName: "- London University",
    },
    {
      description:
        "“This program has changed my life. Thanks to the support, I&apos;m now pursuing my dream of becoming a dental professional in the UK.”",
      studentName: "Student Name",
      universityName: "- London University",
    },
  ];

  // Animation Section

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      });

      tl.from([smallHeadingRef.current, largeHeadingRef.current], {
        opacity: 0,
        y: 40,
        duration: 0.4,
        stagger: 0.2,
        ease: "power2.out",
      });
      if (window.innerWidth > 1024) {
        if (boxRef.current?.children) {
          tl.from(boxRef.current.children, {
            opacity: 0,
            y: 40,
            duration: 0.4,
            stagger: 0.2,
            ease: "power2.out",
          });
        }
      }
      tl.from([sponsorBtnRef.current, contactBtnRef.current], {
        opacity: 0,
        y: 40,
        duration: 0.4,
        stagger: 0.15,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  // Check if the screen is larger than the "md" breakpoint
  // const isLargeScreen = useMediaQuery("(min-width: 768px)");

  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <section
      ref={containerRef}
      className="px-6 md:px-16 lg:px-24 pt-12 lg:my-12 w-full md:max-w-[1440px] mx-auto"
    >
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h4
          ref={smallHeadingRef}
          className="text-light font-semibold text-[18px] lg:text-[24px]"
        >
          Success stories
        </h4>
        <h2
          ref={largeHeadingRef}
          className="text-3xl md:text-5xl  lg:text-[28px] xl:text-[42px] lg:leading-normal font-bold text-gray-900 leading-tight"
        >
          Meet Our Graduates
        </h2>
      </div>

      {/* Grid Layout for Large Screens */}

      <div
        ref={boxRef}
        className="hidden  bg-gradient-to-r from-[#FFFFFF] via-[#f6fff5] to-[#FFFFFF]  lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {boxInfo.map((info, index) => (
          <div
            key={index}
            className="p-6 bg-[#FFFFFF] border border-[#F2F2F2]  rounded-lg shadow-md"
          >
            <p className="lg:text-[15px] leading-relaxed text-[#B5B5B5] mb-4">
              {info.description}
            </p>
            <p className="text-gray-900 font-semibold">
              {info.studentName}{" "}
              <span className="text-gray-500  lg:text-[15px]">
                {info.universityName}
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* // Carousel for Smaller Screens */}
      <Carousel
        plugins={[autoplay.current]}
        slideSize="80%"
        slideGap="md"
        loop
        withControls={false}
        align="center"
        slidesToScroll={1}
        className="lg:hidden py-4 "
      >
        <Carousel.Slide>
          <div className="p-6   rounded-lg shadow-md">
            <p className="lg:text-[15px] leading-relaxed text-[#B5B5B5] mb-4">
              “This program has changed my life. Thanks to the support, I&apos;m
              now pursuing my dream of becoming a dental professional in the
              UK.”
            </p>
            <p className="text-gray-900 font-semibold">
              Student Name{" "}
              <span className="text-gray-500">- London University</span>
            </p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="p-6  bg-white rounded-lg shadow-md">
            <p className="lg:text-[15px] leading-relaxed text-[#B5B5B5] mb-4">
              “Without the funding from this organization, I wouldn’t have had
              the opportunity to study in one of the top dental schools in the
              world.”
            </p>
            <p className="text-gray-900 font-semibold">
              Student Name{" "}
              <span className="text-gray-500">- London University</span>
            </p>
          </div>
        </Carousel.Slide>

        <Carousel.Slide>
          <div className="p-6   bg-white rounded-lg shadow-md">
            <p className="lg:text-[15px] leading-relaxed text-[#B5B5B5] mb-4">
              “Being part of this program has brought me one step closer to my
              goal of making a difference in oral healthcare in my home
              country.”
            </p>
            <p className="text-gray-900 font-semibold">
              Student Name{" "}
              <span className="text-gray-500">- London University</span>
            </p>
          </div>
        </Carousel.Slide>

        {/* Add more Carousel.Slide components for additional testimonials */}
      </Carousel>

      {/* Call-to-Action Buttons */}
      <div className="hidden  md:flex justify-center space-x-4 mt-8">
        <div ref={sponsorBtnRef}>
          <Link href={"/studentSupport"}>
            <button className="flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold bg-primary rounded-lg hover:bg-primary/90 shadow-lg transition duration-200">
              Sponsor a Student
              <FiArrowRight
                className="bg-[#76ccf4] p-1 bg-transparent rounded-[50%] text-white "
                size={20}
              />
            </button>
          </Link>
        </div>
        <div ref={contactBtnRef}>
          <Link href={"/contactForm"}>
            <button className="px-6 py-3 text-black font-semibold  rounded-lg hover:bg-zinc-100 border border-zinc-400 transition duration-200">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
