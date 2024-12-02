import Image from "next/image";
import logo from "../../assets/logo.png";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import Link from "next/link";

export default function Footer() {
  return (
    <section className=" flex flex-col  my-4 lg:my-12 mx-auto   gap-4 px-4 md:px-12  py-4 lg:py-10 bg-[#F9FAFB] rounded-lg shadow-lg w-full md:max-w-[1440px] ">
      <div className="flex flex-col md:flex-row  md:items-center justify-between ">
        <Image src={logo} layout="fit" objectFit="contain" alt="logo..." />
        <ul className="flex flex-col md:flex-row md:items-center gap-4 font-medium mt-4 md:mt-0">
          <li className="text-[16px] font-[500] text-[#1A1A1A] hover:text-primary duration-300 transition-colors">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-[16px] font-[500] text-[#1A1A1A] hover:text-primary duration-300 transition-colors">
            <Link href={"/studentSupport"}>Students</Link>
          </li>
          <li className="text-[16px] font-[500] text-[#1A1A1A] hover:text-primary duration-300 transition-colors">
            <Link href={"/studentSupport"}>Donation</Link>
          </li>
        </ul>
      </div>
      <hr className="h-1" />
      <div className="flex  flex-col-reverse gap-4 md:gap-0 md:flex-row md:items-center justify-between">
        <p className="text-[#B5B5B5B5] text-base">
          Copyright @ 2024 COMNAME, All Rights Reserved
        </p>
        <div className="flex   w-fit items-center gap-3  rounded-full p-1  ">
          <div className=" rounded-full p-[5px] border border-[#83838383] transition duration-300 ease-in-out cursor-pointer hover:border-primary">
            <AiOutlineTwitter
              className="!text-[#83838383] hover:scale-110 transition duration-300 ease-in-out cursor-pointer hover:!text-primary"
              size={25}
              title="twitter"
            />
          </div>
          <div className=" rounded-full p-[5px] border border-[#83838383] transition duration-300 ease-in-out cursor-pointer hover:border-primary">
            <TiSocialFacebook
              className="!text-[#83838383] hover:scale-110 transition duration-300 ease-in-out cursor-pointer hover:!text-primary"
              size={25}
              title="facebook"
            />
          </div>
          <div className=" rounded-full p-[5px] border border-[#83838383] transition duration-300 ease-in-out cursor-pointer hover:border-primary">
            <AiOutlineInstagram
              className="!text-[#83838383] hover:scale-110 transition duration-300 ease-in-out cursor-pointer hover:!text-primary"
              size={25}
              title="instagram"
            />
          </div>
          <div className=" rounded-full p-[5px] border border-[#83838383] transition duration-300 ease-in-out cursor-pointer hover:border-primary">
            <IoLogoGithub
              className="!text-[#83838383] hover:scale-110 transition duration-300 ease-in-out cursor-pointer hover:!text-primary "
              size={25}
              title="github"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
