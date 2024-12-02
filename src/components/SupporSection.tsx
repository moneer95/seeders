"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import rainbow from "../../assets/rainbow.png";
import iconBlue from "../../assets/iconBlue.png";
import iconGreen from "../../assets/iconGreen.png";
import iconYellow from "../../assets/iconYellow.png";
import FaqSection from "./Faq/Faq";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function SupportSection() {
  const containerRef = useRef(null);
  const supportHeadingRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const faqHeadingRef = useRef<HTMLDivElement>(null);

  // Animation Section

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center", // Adjusted for better triggering
          toggleActions: "play none none reverse",
        },
      });

      if (supportHeadingRef.current?.children) {
        tl.from(supportHeadingRef.current.children, {
          opacity: 0,
          y: 40,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
        });
      }
      if (boxRef.current?.children) {
        tl.from(boxRef.current.children, {
          opacity: 0,
          y: 40,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
        });
      }
      if (faqHeadingRef.current?.children) {
        tl.from(faqHeadingRef.current.children, {
          opacity: 0,
          y: 40,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={containerRef}
      className="px-6 md:px-16 lg:px-24 pt-12  my-12 w-full md:max-w-[1440px] mx-auto  "
    >
      {/* Heading Section */}
      <div ref={supportHeadingRef} className="  ">
        <h4 className="text-light font-semibold text-[18px] lg:text-[24px]">
          Support
        </h4>
        <h2 className="text-4xl md:text-5xl  lg:text-[28px] xl:text-[42px] lg:leading-normal font-bold text-gray-900 leading-tight">
          Why Your Support Matters
        </h2>
      </div>

      {/* Cards Section */}
      <div
        style={{
          backgroundImage: `url(${rainbow.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundPosition: "1px 1px", // Moves the image 50px right and 100px down
        }}
        ref={boxRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10"
      >
        {/* Card 1 */}
        <div className="p-6   bg-[#FFFFFF] border border-[#F2F2F2]  rounded-lg shadow-md flex flex-col ">
          <Image
            src={iconBlue}
            alt="Support Icon 1"
            width={40}
            height={40}
            className="mb-4"
          />
          <p className="text-[#4F4F4F] text-base">
            Your support creates opportunities for students who can&apos;t
            afford education, empowering them to pursue their passion in
            dentistry.
          </p>
        </div>

        {/* Card 2 */}
        <div className=" p-6   bg-[#FFFFFF] border border-[#F2F2F2]  rounded-lg shadow-md flex flex-col ">
          <Image
            src={iconGreen}
            alt="Support Icon 2"
            width={40}
            height={40}
            className="mb-4"
          />
          <p className="text-[#4F4F4F] text-base">
            Supporting these students means investing in the future of dental
            care, ensuring communities around the world have access to skilled
            professionals.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6   bg-[#FFFFFF] border border-[#F2F2F2]  rounded-lg shadow-md flex flex-col ">
          <Image
            src={iconYellow}
            alt="Support Icon 3"
            width={40}
            height={40}
            className="mb-4"
          />
          <p className="text-[#4F4F4F] text-base">
            By funding aspiring dental professionals, you&apos;re helping
            improve global healthcare standards, one student at a time, by
            funding aspiring dental professionals.
          </p>
        </div>
      </div>

      {/* FaqSection  */}
      <div ref={faqHeadingRef} className="  text-center mt-10 lg:mt-20">
        <h4 className="text-light font-semibold text-[18px] lg:text-[24px]">
          FAQs
        </h4>
        <h2 className="text-4xl md:text-5xl  lg:text-[28px] xl:text-[42px] lg:leading-normal font-bold text-gray-900 leading-tight">
          Frequently asked questions
        </h2>
        <p className="text-[#696969] text-base">
          Need help with something? Here are our most frequently asked
          questions.
        </p>
      </div>
      <FaqSection />
    </section>
  );
}
