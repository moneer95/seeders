import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineRise } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import hand from "../../../../assets/hand.png";
import logo from "../../../../assets/navLogo.png";
import Image from "next/image";
import axios from "axios";
import { PiListHeartLight, PiVideoLight } from "react-icons/pi";
import  DonationForm from "../../../components/DonationForm"

// mantine Loader component
import { Loader } from "@mantine/core";

interface StudentCardProps {
  name: string;
  country: string;
  progress: string;
  amountRaised: number;
  studentName: string;
  goal: number;
}

interface SingleStudentData {
  student_name: string;
  progress: string;
  story?: string;
  fund_raised?: number;
  goal?: number;
  courses_completed?: string;
}

const StudentCard: React.FC<StudentCardProps> = ({
  name,
  country,
  progress,
  amountRaised,
  studentName,
  goal,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [singleStudent, setSingleStudent] = useState<SingleStudentData | null>(
    null
  );

  // fetching single student data
  const fetchStudentData = async (studentName: string) => {
    try {
      const response = await axios.get(
        `https://backend.ea-dental.com//api/resource/Seeders Students/${studentName}`,
        {
          auth: {
            username: "596683e50d0871a",
            password: "ccd7e1bfc36235d",
          },
        }
      ); // Replace with your API endpoint
      setSingleStudent(response.data.data); // Save data to state
      setIsPopupOpen(true); // Open the popup
    } catch (err: unknown) {
      console.log(err);
    }
  };

  const progressPercentage = (amountRaised / goal) * 100;

  return (
    <>
      {/* Student Card */}
      <div className="bg-white shadow-md rounded-lg p-4 ">
        <div className="flex items-center gap-2">
          {/* Profile Picture */}
          <div className="w-12 h-12 bg-[#D1D8A9] rounded-full flex items-center justify-center text-lg font-bold text-[#5E6D06]">
            {name.charAt(0).toUpperCase()}
            {name.charAt(1).toUpperCase()}
          </div>

          {/* Student Name */}
          <h3 className="text-[16px] font-bold text-gray-800">{name}</h3>
        </div>

        {/* Country */}
        <div className="flex flex-col text-sm text-gray-500 mt-3">
          <p className="mt-2 flex items-center gap-2 font-medium text-[#838383]">
            <CiLocationOn className="text-[#838383]" size={16} />
            Country
          </p>
          <p className="mt-2 flex items-center gap-2 font-medium text-[#0D0D0D]">
            {country}
          </p>
        </div>

        {/* Progress */}
        <div className="flex flex-col text-sm text-gray-500 mt-3">
          <p className="mt-2 flex items-center gap-2 font-medium text-[#838383]">
            <AiOutlineRise className="text-[#838383]" size={16} />
            Progress
          </p>
          <p className="mt-2 flex items-center gap-2 font-medium text-[#0D0D0D]">
            {progress}
          </p>
        </div>

        {/* Amount Raised */}
        <div className="mt-4">
          <p className="text-[20px] font-bold text-[#0D0D0D]">
            ${amountRaised?.toLocaleString()}{" "}
            <span className="text-sm font-normal text-gray-500">
              USD raised of ${goal?.toLocaleString()} goal
            </span>
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
          <div
            className="bg-gradient-to-r from-[#66CF2D] to-[#348A06] h-2 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* Donate Button */}
        <button
          onClick={() => {
            setIsPopupOpen(true);
            fetchStudentData(studentName);
          }}
          className="mt-6 text-primary w-full bg-[#E7F6FE] py-2 rounded-md hover:bg-[#d8ebf5] transition-colors"
        >
          Donate Now
        </button>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex justify-end px-4 py-4  z-50">
          {/* Overlay */}
          <div
            onClick={() => setIsPopupOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50"
          ></div>

          {/* Popup Content */}
          <div className="relative  bg-white w-full md:w-[400px] rounded-lg shadow-lg p-6  z-10  max-h-[97vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              <IoClose size={24} />
            </button>

            {/* Popup Details */}
            {singleStudent ? (
              <div className="flex flex-col gap-6 2xl:justify-evenly h-full">
                {/* Donate and hand picture section  */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 p-2 border-2 bg-[#FFFFFF] border-[#D0D5DD] rounded-md">
                    <Image
                      src={hand}
                      alt="Team working together"
                      className="w-full "
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Donation</h3>
                </div>

                <div className="flex items-center gap-2">
                  {/* Profile Picture */}
                  <div className="w-12 h-12 bg-[#D1D8A9] rounded-full flex items-center justify-center text-lg font-bold text-[#5E6D06]">
                    {singleStudent?.student_name.charAt(0).toUpperCase()}
                    {singleStudent.student_name.charAt(1).toUpperCase()}
                  </div>

                  {/* Student Name */}
                  <h3 className="text-[16px] font-bold text-gray-800">
                    {singleStudent?.student_name}
                  </h3>
                </div>

                {/* Country */}
                <div className="flex flex-col text-sm text-gray-500 ">
                  <p className=" flex items-center gap-2 font-medium text-[#838383]">
                    <CiLocationOn className="text-[#838383]" size={16} />
                    Country
                  </p>
                  <p className=" flex items-center gap-2 font-medium text-[#0D0D0D]">
                    {country}
                  </p>
                </div>

                {/* Progress */}
                <div className="flex flex-col text-sm text-gray-500 gap-2">
                  <p className="flex items-center gap-2 font-medium text-[#838383]">
                    <AiOutlineRise className="text-[#838383]" size={16} />
                    Progress
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    <div
                      className={`col-span-1 h-2 rounded-full ${
                        singleStudent?.progress ===
                          "Step 1 - Travel to the UK" ||
                        singleStudent?.progress ===
                          "Step 2 - Enroll in Dental Courses" ||
                        singleStudent?.progress ===
                          "Step 3 - Hands-On Training" ||
                        singleStudent?.progress ===
                          "Step 4 - Qualify to Practice"
                          ? "bg-[#0BA5EC]"
                          : "bg-gray-200"
                      }`}
                    ></div>
                    <div
                      className={`col-span-1 h-2 rounded-full ${
                        singleStudent?.progress ===
                          "Step 2 - Enroll in Dental Courses" ||
                        singleStudent?.progress ===
                          "Step 3 - Hands-On Training" ||
                        singleStudent?.progress ===
                          "Step 4 - Qualify to Practice"
                          ? "bg-[#0BA5EC]"
                          : "bg-gray-200"
                      }`}
                    ></div>
                    <div
                      className={`col-span-1 h-2 rounded-full ${
                        singleStudent?.progress ===
                          "Step 3 - Hands-On Training" ||
                        singleStudent?.progress ===
                          "Step 4 - Qualify to Practice"
                          ? "bg-[#0BA5EC]"
                          : "bg-gray-200"
                      }`}
                    ></div>
                    <div
                      className={`col-span-1 h-2 rounded-full ${
                        singleStudent?.progress ===
                        "Step 4 - Qualify to Practice"
                          ? "bg-[#0BA5EC]"
                          : "bg-gray-200"
                      }`}
                    ></div>
                  </div>
                  <p className="font-medium text-[#0D0D0D]">
                    {singleStudent?.progress}
                  </p>
                </div>

                {/* courses Completed  */}

                {/* Courses Completed */}
                <div className="flex flex-col mt-4">
                  <p className="flex items-center gap-2 text-[#838383]">
                    <PiVideoLight className="text-[#838383]" size={16} />
                    CV
                  </p>
                  <div
                    className="text-[#0D0D0D] mt-2"
                    dangerouslySetInnerHTML={{
                      __html:
                        singleStudent?.courses_completed ||
                        "<p>No courses available.</p>",
                    }}
                  ></div>
                </div>

                {/* Student Story Section  */}
                <div className="flex flex-col ">
                  <p className=" flex items-center gap-2  text-[#838383]">
                    <PiListHeartLight className="text-[#838383]" size={16} />
                    Student story
                  </p>
                  <p className="  font-medium text-[#0D0D0D]">
                    {singleStudent?.story}
                  </p>
                </div>

                <hr />

                {/* Image and Fund section  */}
                <div className="flex flex-col gap-3  py-4  rounded-md px-4 ">
                  <Image
                    src={logo}
                    alt="Team working together"
                    className="w-[50%] mx-auto "
                  />

                  <DonationForm />

                  <hr />

                  <h3 className="text-2xl font-bold text-gray-80 mt-3">
                    Join Us in Empowering {singleStudent?.student_name} to Achieve Her Educational Goals
                  </h3>
                  <div className="w-full bg-gray-200 rounded-full h-2 ">
                    <div
                      className="bg-gradient-to-r from-[#66CF2D] to-[#348A06] h-2 rounded-full"
                      style={{
                        width: `${
                          ((singleStudent?.fund_raised ?? 0) /
                            (singleStudent?.goal ?? 1)) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-[20px] font-bold text-[#0D0D0D] mb-2">
                    ${singleStudent?.fund_raised?.toLocaleString()}{" "}
                    <span className="text-sm font-normal text-gray-500">
                      USD raised of ${singleStudent?.goal?.toLocaleString()}{" "}
                      goal
                    </span>
                  </p>

                </div>
              </div>
            ) : (
              <div className="  h-full flex items-center justify-center ">
                <Loader color="#0BA5EC" />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default StudentCard;
