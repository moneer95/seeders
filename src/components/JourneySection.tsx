"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import golobe from "../../assets/Rock2.png";
import travelIcon from "../../assets/travel.png";
import enrollIcon from "../../assets/enroll.png";
import trainingIcon from "../../assets/training.png";
import qualifyIcon from "../../assets/qualify.png";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function JourneySection() {
  const containerRef = useRef(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center", // Adjusted for better triggering
          toggleActions: "play none none reverse",
        },
      });

      tl.from([".SMALL-HEADING", ".LARGE-HEADING"], {
        opacity: 0,
        y: 40,
        duration: 0.4,
        stagger: 0.2,
        ease: "power2.out",
      });
      if (boxRef.current) {
        tl.from(boxRef.current.children, {
          opacity: 0,
          y: 40,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        });
      }
      tl.from(".BG-IMAGE", {
        opacity: 0,
        y: 100,
        duration: 0.4,
        stagger: 0.2,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative px-6 md:px-16 lg:px-24 py-12 bg-white w-full "
    >
      <Image
        src={golobe}
        alt="Travel to the UK"
        height={300}
        className="BG-IMAGE absolute top-0 right-0 object-contain"
      />
      <div className="w-full md:max-w-[1440px] mx-auto">
        <div className="mb-8">
          <h4 className="SMALL-HEADING text-light font-semibold text-[18px] lg:text-[24px]">
            How it works
          </h4>
          <h2 className="LARGE-HEADING text-[32px] md:text-5xl lg:text-[28px] xl:text-[42px] lg:leading-normal font-bold text-gray-900 leading-tight">
            The Journey to UK Dentistry
          </h2>
        </div>

        <div
          ref={boxRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8"
        >
          <div className=" flex items-start space-x-4">
            <Image
              src={travelIcon}
              alt="Travel to the UK"
              className=" h-12  object-contain"
            />
            <div>
              <h3 className=" text-[16px] font-[500] text-[#0D0D0D]">
                01 - Travel to the UK
              </h3>
              <p className="text-[16px] font-[500] leading-relaxed text-[#4F4F4F] ">
                Traveling from their home country to the UK.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Image
              src={enrollIcon}
              alt="Enroll in Dental Courses"
              className="h-12 object-contain"
            />
            <div>
              <h3 className="text-[16px] font-[500] text-[#0D0D0D]">
                02 - Enroll in Dental Courses
              </h3>
              <p className="text-[16px] font-[500] leading-relaxed text-[#4F4F4F] ">
                Enrolling in UK dental courses (detail what types of courses or
                certifications are needed to practice)
              </p>
            </div>
          </div>

          <div className=" flex items-start space-x-4">
            <Image
              src={trainingIcon}
              alt="Hands-On Training"
              className=" h-12 object-contain"
            />
            <div>
              <h3 className="text-[16px] font-[500] text-[#0D0D0D]">
                03 - Hands-On Training
              </h3>
              <p className="text-[16px] font-[500] leading-relaxed text-[#4F4F4F] ">
                Completing training or apprenticeships at dental clinics
                (highlight real-world experience as a key step).
              </p>
            </div>
          </div>

          <div className=" flex items-start space-x-4">
            <Image
              src={qualifyIcon}
              alt="Qualify to Practice"
              className="h-12 object-contain"
            />
            <div>
              <h3 className="text-[16px] font-[500] text-[#0D0D0D]">
                04 - Qualify to Practice
              </h3>
              <p className="text-[16px] font-[500] leading-relaxed text-[#4F4F4F]">
                Gaining qualifications or licensing to practice dentistry in the
                UK (explain that students will need to complete licensing exams
                like the Overseas Registration Exam (ORE) or the Licentiate in
                Dental Surgery (LDS)).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
