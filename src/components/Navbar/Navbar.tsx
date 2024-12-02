"use client";
import { useState, useLayoutEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import navLogo from "../../../assets/navLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // GSAP ANIMATION FOR DESKTOP NAVBAR
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      if (isOpen) {
        tl.from(
          [
            ".MOBILE-HOME",
            ".MOBILE-SUPPORT",
            ".MOBILE-CONTACT",
            ".MOBILE-DONATE",
            ".EVENTS"
          ], // Ensure each class here matches the JSX
          {
            delay: 0.5,
            opacity: 0,
            y: 40,
            duration: 0.7,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.3"
        );
      }

      // Logo Animation
      tl.from(".LOGO", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.out",
      });

      // HAMBURGER ANIMATION
      tl.from(".HAMBURGER", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.out",
      });

      // Nav Link Animation
      tl.from(
        [".HOME", ".SUPER-STUDENT", ".CONTACT-US", ".EVENTS"], // Ensure each class here matches the JSX
        { opacity: 0, y: -20, duration: 0.4, stagger: 0.2, ease: "power2.out" },
        "-=0.3"
      );

      // Donate Button Animation
      tl.from(
        ".DONATE-BTN",
        { opacity: 0, y: -20, ease: "power2.out" },
        "-=0.3"
      );
    });

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <nav className="flex font-Montserrat font-bold   items-center justify-between p-2 rounded-md w-full lg:max-w-[100%] bg-[#FFF] border border-[#F5F5F5]">
      {/* Logo */}
      <div className="LOGO flex items-center">
        <Link href={"/"}>
          <Image
            src={navLogo} // Replace with your actual image URL in the public folder
            alt="Dental Professional"
            width={150} // Set your desired width
            height={40} // Set your desired height
            className="object-cover rounded-lg  "
            priority // Ensures the image loads quickly as it's part of the hero section
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-6">
        <Link
          href="/"
          className="HOME text-[16px] font-[500] text-[#1A1A1A] hover:text-primary duration-300 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/studentSupport"
          className="SUPER-STUDENT text-[16px] font-[500] text-[#1A1A1A] hover:text-primary duration-300 transition-colors"
        >
          Support Students
        </Link>
        <Link
          href="/contactForm"
          className="CONTACT-US text-[16px] font-[500] text-[#1A1A1A] hover:text-primary duration-300 transition-colors"
        >
          Contact Us
        </Link>
        <Link
          href="/events"
          className="EVENTS text-[16px] font-[500] text-[#1A1A1A] hover:text-primary duration-300 transition-colors"
        >
          Events
        </Link>
      </div>

      {/* Donate Now Button */}
      <div className="DONATE-BTN hidden lg:block">
        <Link href="/studentSupport">
          <button className="bg-primary text-[16px] text-white px-4 py-2 rounded-xl hover:bg-primary/90">
            Donate Now
          </button>
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className=" HAMBURGER lg:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 w-full sm:w-[80%] md:w-[70%] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center mt-4 space-y-4">
          <Link
            href="/"
            className="MOBILE-HOME  text-[16px] font-[500] text-[#1A1A1A] hover:text-primary duration-300 transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/studentSupport"
            className=" MOBILE-SUPPORT text-[16px] font-[500] text-[#1A1A1A] hover:text-primary duration-300 transition-colors"
            onClick={toggleMenu}
          >
            Support Students
          </Link>
          <Link
            href="/contactForm"
            className="MOBILE-CONTACT text-[16px] font-[500] text-[#1A1A1A] hover:text-primary duration-300 transition-colors"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          <Link
            href="/events"
            className="Events text-[16px] font-[500] text-[#1A1A1A] hover:text-primary duration-300 transition-colors"
            onClick={toggleMenu}
          >
            Events
          </Link>
          <Link href="/studentSupport">
            <button className="MOBILE-DONATE bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary/90">
              Donate Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
