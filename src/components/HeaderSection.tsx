"use client";
import Link from "next/link";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import main from "../../assets/main.png";
import nextGeneration from "../../assets/nextGeneration.png";
import flag from "../../assets/flag.png";
import arrow from "../../assets/arrow.png";
import waves from "../../assets/waves.png";
import { Navbar } from "@/components/index";
import { PiHandHeartFill } from "react-icons/pi";
import { FiArrowRight } from "react-icons/fi";

export default function HeaderSection() {
  // Destop Section Animation Starts Here

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      if (window.innerWidth >= 1024) {
        tl.from(
          [".FEUL", ".IMG-BACKGROUND"], // Ensure each class here matches the JSX
          {
            delay: 1,
            opacity: 0,
            y: 40,
            duration: 0.4,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.3"
        );
        // Heading and image
        tl.from(
          [".EMPOWERING", ".MAIN-IMG"], // Ensure each class here matches the JSX
          {
            opacity: 0,
            y: 40,
            duration: 0.4,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.3"
        );
        // Paragraph and box 1 animation
        tl.from(
          [".PARAGRAPH", ".BOX-1"], // Ensure each class here matches the JSX
          {
            opacity: 0,
            y: 40,
            duration: 0.4,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.3"
        );
        // support button and box-2
        tl.from(
          [".SPONSER-BTN", ".BOX-2"], // Ensure each class here matches the JSX
          {
            opacity: 0,
            y: 40,
            duration: 0.4,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.3"
        );

        // CONTACT button and box-2
        tl.from(
          [".CONTACT-BTN", ".BOX-3"], // Ensure each class here matches the JSX
          {
            opacity: 0,
            y: 40,
            duration: 0.4,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.3"
        );
      } else {
        tl.from(
          [
            ".MOBILE-HEADING",
            ".MOBILE-PARAGRAPH-1",
            ".MOBILE-PARAGRAPH-2",
            ".MOBILE-SPONSER-BTN",
            ".MOBILE-CONTACT-BTN",
          ], // Ensure each class here matches the JSX
          {
            delay: 1,
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.3"
        );

        // green arrow and green lines animation
        tl.from(
          [".MOBILE-UNDERLINE", ".GREEN-ARROW"], // Ensure each class here matches the JSX
          {
            opacity: 0,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.3"
        );
        // green arrow and green lines animation
        tl.from(
          [".MOBILE-B0X-1", ".MOBILE-B0X-2", ".MOBILE-B0X-3"], // Ensure each class here matches the JSX
          {
            opacity: 0,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.3"
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={`CONTAINER relative bg-cover bg-center  max-w-[1440px] mx-auto flex flex-col   items-center justify-stretch px-4   lg:px-24 pt-8 pb-16 gap-10 lg:gap-16  `}
      style={{ backgroundImage: `url(${waves.src})` }}
    >
      <Navbar />
      {/* content which will be visible on the large screeen  */}
      <div className="hidden lg:grid grid-cols-2 w-full  bg-transparent  ">
        {/* Left Content Section */}
        <div className="flex col-span-1 justify-center lg:gap-6 flex-col w-full  ">
          {/* Tagline Bubble */}
          <div className="FEUL flex border w-fit items-center gap-3 border-[#F1F1F1] rounded-full p-1  ">
            <div className=" rounded-full p-2 border bg-[#F9F9F9] border-[#F1F1F1]">
              <PiHandHeartFill className="!text-[#16db26]" size={16} />
            </div>
            <p className=" pr-3 lg:text-[12px] text-[#000000] font-medium">
              Feul the future of global dental care
            </p>
          </div>

          {/* Main Heading */}
          <h1 className=" EMPOWERING   lg:text-[28px] xl:text-[42px] lg:leading-normal font-extrabold text-gray-900 leading-tight">
            Empowering Future Dental <br /> Professionals
          </h1>

          {/* Subheading */}
          <p className="PARAGRAPH lg:text-[15px] leading-relaxed text-zinc-500 ">
            We help aspiring dental students from around the world take the next
            step in their careers by funding their education and training in the
            UK.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex space-x-4">
            <div className="SPONSER-BTN">
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
            <div className="CONTACT-BTN">
              <Link href={"/contactForm"}>
                <button className=" px-6 py-3 text-black font-semibold  rounded-lg hover:bg-zinc-100 border border-[#E0E0E0] transition duration-200">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image Section which will visible on small screens screen  */}
        <div className="  relative  col-span-2 lg:col-span-1  mt-10 md:mt-0 flex justify-end  ">
          {/* Image of the Dental Professional */}
          <div className="relative">
            {/* Background Pink Box */}
            <div
              className="IMG-BACKGROUND absolute bottom-0 w-[420px] h-[400px] rounded-lg -translate-x-2"
              style={{ backgroundColor: "rgba(209, 220, 242, 0.24)" }}
            ></div>

            {/* Image */}
            <Image
              src={main} // Replace with your actual image URL in the `public` folder
              alt="Dental Professional"
              width={400} // Set your desired width
              height={600} // Set your desired height
              className="MAIN-IMG relative object-cover rounded-lg"
              priority // Ensures the image loads quickly as it's part of the hero section
            />
          </div>

          {/* Speech Bubbles */}
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.76)" }}
            className="BOX-1 absolute lg:bottom-[54%] lg:left-[13%]  p-4  shadow-lg rounded-lg max-w-xs transform translate-y-10"
          >
            <p className=" text-gray-600 text-xs leading-normal xl:text-[14px]">
              &quot;The UK offers the best training, and with your help, I can
              achieve my dream.&quot;
            </p>
          </div>
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.76)" }}
            className="BOX-2 absolute lg:bottom-[20%] lg:left-[30%] p-4  shadow-lg rounded-lg  max-w-xs transform -translate-y-1/2"
          >
            <p className=" text-xs leading-normal xl:text-[14px]">
              &quot;The UK offers the best training, and with your help, I can
              achieve my dream.&quot;
            </p>
          </div>
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.76)" }}
            className="BOX-3 absolute lg:bottom-[15%] lg:left-[13%]  p-4 bg-white shadow-lg rounded-lg max-w-xs transform translate-y-10"
          >
            <p className=" text-gray-600 text-xs xl:text-[14px]  leading-normal">
              &quot;The UK offers the best training, and with your help, I can
              achieve my dream.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* content will be visible on the mobile screens  */}
      <div className=" flex flex-col gap-4 w-full lg:hidden">
        <h1 className="MOBILE-HEADING text-3xl text-center md:text-5xl  lg:text-[28px] xl:text-[36px] lg:leading-normal font-extrabold text-gray-900 leading-tight">
          Empowering Future <br /> Dental Professionals
        </h1>
        <div className="flex relative flex-col leading-4   max-w-[500px] mx-auto  mb-4 sm:mb-10 ">
          <div>
            <p className=" MOBILE-PARAGRAPH-1 text-[24px] text-center text-[#0D0D0D] ">
              Support the{" "}
              <span className="text-[#66CF2D]">Next Generation</span>
            </p>
            <p className=" w-full flex max-w-[300px] mx-auto justify-end">
              <Image
                src={nextGeneration} // Replace with your actual image URL in the `public` folder
                alt="Dental Professional"
                layout="fil" // Set your desired height
                width={180}
                className=" MOBILE-UNDERLINE object-cover rounded-lg"
                priority // Ensures the image loads quickly as it's part of the hero section
              />
            </p>
          </div>
          <p className=" MOBILE-PARAGRAPH-2 text-[14px] px-4 text-center leading-[2rem]   ">
            We help aspiring dental students from around the world take the next
            step in their careers by funding their education and training in the
            UK.{" "}
            <Image
              src={flag}
              alt="Dental Professional"
              layout="fil"
              height={60}
              className=" inline-block object-cover rounded-lg"
              priority
            />
          </p>

          <Image
            src={arrow} // Replace with your actual image URL in the `public` folder
            alt="Dental Professional"
            layout="fil" // Set your desired height
            className=" GREEN-ARROW absolute top-6 object-cover rounded-lg"
            priority // Ensures the image loads quickly as it's part of the hero section
          />
        </div>
        <div className="flex flex-col gap-4 mb-12  ">
          <div className="MOBILE-SPONSER-BTN ">
            <Link href={"/studentSupport"}>
              <button className=" flex items-center justify-center gap-3  px-6 w-full py-3 text-[20px] text-white font-semibold bg-primary rounded-lg hover:bg-primary/90 shadow-lg transition duration-200">
                Sponsor a Student{" "}
                <FiArrowRight
                  className="bg-[#76ccf4] p-1 bg-transparent rounded-[50%] text-white "
                  size={20}
                />
              </button>
            </Link>
          </div>
          <div className="MOBILE-CONTACT-BTN">
            <Link href={"/contactForm"}>
              <button className="px-6 w-full py-3 text-black text-[20px] font-semibold  rounded-lg hover:bg-zinc-100 border border-[#E0E0E0] transition duration-200">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div className=" MOBILE-B0X-1  p-4 bg-white border border-[#E0E0E0] shadow-md rounded-lg mb-4  ">
          <p className="text-[#4F4F4F] text-xs leading-normal text-[14px]">
            &quot;The UK offers the best training, and with your help, I can
            achieve my dream.&quot;
          </p>
        </div>
        <div className=" MOBILE-B0X-2 p-4 bg-white border border-[#E0E0E0] shadow-md rounded-lg mb-4  ">
          <p className="text-[#4F4F4F] text-xs leading-normal -[14px]">
            &quot;The UK offers the best training, and with your help, I can
            achieve my dream.&quot;
          </p>
        </div>
        <div className=" MOBILE-B0X-3 p-4 bg-white border border-[#E0E0E0] shadow-md rounded-lg   ">
          <p className="text-[#4F4F4F] text-xs leading-normal text-[14px]">
            &quot;The UK offers the best training, and with your help, I can
            achieve my dream.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
