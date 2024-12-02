import { Footer, Navbar } from "@/components";
import { MdPhoneInTalk } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import React from "react";
import rainbow from "../../../../assets/rainbow.png";

const ContactForm = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 lg:px-24 flex flex-col  items-center justify-stretch     pb-16 gap-12">
      <div
        className="flex flex-col gap-8 pt-8  w-full  items-center"
        style={{
          backgroundImage: `url(${rainbow.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundPosition: "1px -100px", // Moves the image 50px right and 100px down
        }}
      >
        <Navbar />
        {/* Heading Section  */}
        <div className="  text-center py-24 ">
          <h2 className="text-4xl md:text-5xl  lg:text-[28px] xl:text-[36px] lg:leading-normal font-bold text-gray-900 leading-tight">
            Contact our team
          </h2>
          <p className="text-[#4F4F4F] text-[16px] lg:text-[18px]">
            Feel Free to Reach Out to Us for More Information, Support, or to
            Discuss How You Can Get Involved
          </p>
        </div>
      </div>
      {/* Bottom Section  */}
      <div className="flex w-full flex-col lg:flex-row    gap-8 bg-white rounded-xl">
        {/* Form Section */}
        <div className="w-full  lg:w-2/3">
          <form className="grid grid-cols-1 lg:grid-cols-2 gap-8  ">
            <div className="col-span-2 lg:col-span-1">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="first-name"
              >
                First name
              </label>
              <input
                type="text"
                id="first-name"
                placeholder="First name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="last-name"
              >
                Last name
              </label>
              <input
                type="text"
                id="last-name"
                placeholder="Last name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="col-span-2 ">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@company.com"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="col-span-2 ">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="phone"
              >
                Phone number
              </label>
              <div className="flex mt-1">
                <select className="border border-gray-300 rounded-l-md  px-4 py-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 (555) 000-0000"
                  className="block w-full border-t border-b border-r border-gray-300 rounded-r-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="col-span-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Leave us a message..."
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full px-6 py-3 text-white font-semibold bg-primary rounded-lg hover:bg-primary/90 shadow-lg transition duration-200 "
              >
                Send message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="w-full lg:w-1/3">
          <div className="space-y-14">
            <div>
              <h3 className="font-bold text-lg">Call us</h3>
              <p className="text-[#838383] text-sm">
                Call our team Sun-Thu from 8am to 5pm.
              </p>
              <p className="mt-2 flex items-center gap-2 font-medium text-[#0D0D0D] underline underline-offset-4">
                <span>
                  <MdPhoneInTalk className="text-[#838383]" size={16} />
                </span>
                (+20) 1111555588
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Chat with us</h3>
              <p className="text-[#838383] text-sm">
                Speak to our friendly team via live chat.
              </p>
              <div className="mt-2 space-y-2">
                <p className="mt-2 flex items-center gap-2 font-medium text-[#0D0D0D] underline underline-offset-4">
                  <span>
                    <LuSend className="text-[#838383]" size={16} />
                  </span>
                  Shoot us an email
                </p>
                <p className="mt-2 flex items-center gap-2 font-medium text-[#0D0D0D] underline underline-offset-4">
                  <span>
                    <FaWhatsapp className="text-[#838383]" size={16} />
                  </span>
                  Start a chat via WhatsApp
                </p>
                <p className="mt-2 flex items-center gap-2 font-medium text-[#0D0D0D] underline underline-offset-4">
                  <span>
                    <FaInstagram className="text-[#838383]" size={16} />
                  </span>
                  Message us on Instagram
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg">Visit us</h3>
              <p className="text-[#838383] text-sm">
                Chat to us in person at our office.
              </p>
              <p className="mt-2 flex items-center gap-2 font-medium text-[#0D0D0D] underline underline-offset-4">
                <span>
                  <CiLocationOn className="text-[#838383]" size={16} />
                </span>
                12 Walid ben thanyan st. Masaken Sheraton
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section  */}
      <Footer />
    </section>
  );
};

export default ContactForm;
