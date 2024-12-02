"use client";
import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { FaCaretDown, FaChevronDown } from "react-icons/fa";
import StudentCard from "./StudentCard";
import { Footer, Navbar } from "@/components";
import hand from "../../../../assets/hand.png";
import Image from "next/image";
import axios from "axios";

// Type definitions
interface BackendStudent {
  name: string;
  student_name: string;
  story: string;
  country: string;
  city: string;
  progress: string;
  fund_raised: number;
  goal: number;
}

interface Student {
  id: string;
  name: string;
  country: string;
  progress: string;
  amountRaised: number;
  studentName: string;
  studentGoal: number;
}

const SupportFutureDentistry: React.FC = () => {
  // States
  const [students, setStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [searchName, setSearchName] = useState<string>("");
  const [searchCountry, setSearchCountry] = useState<string>("");
  const [searchProgress, setSearchProgress] = useState<string>("");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] =
    useState<boolean>(false);
  const [isProgressDropdownOpen, setIsProgressDropdownOpen] =
    useState<boolean>(false);
  const [visibleStudents, setVisibleStudents] = useState<number>(12);

  // Fetch students from backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          'https://backend.ea-dental.com/api/resource/Seeders Students?fields=["name", "student_name", "story", "country", "city", "progress", "fund_raised", "courses_completed", "goal"]&limit_start=0&limit_page_length=40',
          {
            auth: {
              username: "596683e50d0871a",
              password: "ccd7e1bfc36235d",
            },
          }
        );

        const fetchedStudents: BackendStudent[] = response.data.data;

        const mappedStudents: Student[] = fetchedStudents.map((student) => ({
          id: student.name, // Use unique name as ID
          name: student.student_name,
          country: `${student.country}, ${student.city}`, // Combine country and city
          progress: student.progress,
          amountRaised: student.fund_raised,
          studentName: student.student_name,
          studentGoal: student.goal,
        }));

        setStudents(mappedStudents);
        setFilteredStudents(mappedStudents);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  // Filter students based on search inputs
  useEffect(() => {
    let filtered = students;

    if (searchName) {
      filtered = filtered.filter((student) =>
        student.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    if (searchCountry) {
      filtered = filtered.filter(
        (student) =>
          student.country.toLowerCase() === searchCountry.toLowerCase()
      );
    }

    if (searchProgress) {
      filtered = filtered.filter((student) =>
        student.progress.toLowerCase().includes(searchProgress.toLowerCase())
      );
    }

    setFilteredStudents(filtered);
  }, [searchName, searchCountry, searchProgress, students]);

  const handleLoadMore = () => {
    setVisibleStudents((prev) => prev + 8);
  };

  return (
    <section className="max-w-[1440px] bg-white mx-auto flex flex-col items-center justify-stretch lg:px-24 pt-8 gap-12">
      <Navbar />

      <div className="">
        <div className="relative flex justify-between items-center lg:mb-12 mb-8 px-4">
          <div>
            <h2 className="text-[32px] xl:text-[36px] w-[85%] lg:leading-normal font-bold text-gray-900 leading-tight">
              Support the Future of Dentistry
            </h2>
            <p className="text-[#4F4F4F] text-[16px] lg:text-[18px] w-[90%] mt-6">
              Your contributions help aspiring dental professionals achieve
              their dreams and improve global oral health. Make a difference
              today!
            </p>
          </div>
          <Image
            src={hand}
            alt="Team working together"
            className="absolute right-0 top-0 w-28 lg:w-28 lg:h-28 hidden"
          />
        </div>

        {/* Search and Filters Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-8 px-4">
          <div className="relative w-full lg:w-1/3">
            <IoSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by student name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="w-full pl-10 border bg-[#f2f2f2] border-none rounded-md px-4 py-2 shadow-sm focus:ring-blue-500 placeholder-gray-400"
            />
          </div>
          <div className="flex gap-4 w-full lg:w-auto">
            {/* Country Dropdown */}
            <div className="relative w-full lg:w-auto">
              <button
                className="w-full lg:w-auto border border-gray-300 rounded-md px-4 py-2 shadow-sm bg-white text-sm text-gray-700 flex justify-between items-center focus:ring-blue-500 focus:border-blue-500"
                onClick={() => setIsCountryDropdownOpen((prev) => !prev)}
              >
                {searchCountry || "Select Country"}
                <FaChevronDown className="ml-2 text-gray-500" />
              </button>

              {isCountryDropdownOpen && (
                <ul className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 px-2">
                  <li
                    className="cursor-pointer px-4 py-2 text-[12px] font-semibold rounded-md text-gray-700 hover:bg-[#f2f2f2]"
                    onClick={() => {
                      setSearchCountry("");
                      setIsCountryDropdownOpen(false);
                    }}
                  >
                    All Countries
                  </li>
                  {Array.from(
                    new Set(students.map((student) => student.country))
                  ).map((country, index) => (
                    <li
                      key={index}
                      className="cursor-pointer px-4 py-2 text-[12px] font-semibold text-gray-700 rounded-md hover:bg-[#f2f2f2]"
                      onClick={() => {
                        setSearchCountry(country);
                        setIsCountryDropdownOpen(false);
                      }}
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Progress Dropdown */}
            <div className="relative w-full lg:w-[250px]">
              <button
                className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm bg-white text-sm text-gray-700 flex justify-between items-center focus:ring-blue-500 focus:border-blue-500"
                onClick={() => setIsProgressDropdownOpen((prev) => !prev)}
              >
                {searchProgress
                  ? searchProgress.match(/Step \d+/)?.[0] || searchProgress
                  : "All Selected"}
                <FaChevronDown className="ml-2 text-gray-500" />
              </button>

              {isProgressDropdownOpen && (
                <ul className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <li
                    className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                    onClick={() => {
                      setSearchProgress("");
                      setIsProgressDropdownOpen(false);
                    }}
                  >
                    All Progress Steps
                  </li>
                  {Array.from(
                    new Set(students.map((student) => student.progress))
                  )
                    .sort((a, b) => {
                      const stepA = parseInt(a.match(/\d+/)?.[0] || "0", 10);
                      const stepB = parseInt(b.match(/\d+/)?.[0] || "0", 10);
                      return stepA - stepB;
                    })
                    .map((progress, index) => (
                      <li
                        key={index}
                        className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                        onClick={() => {
                          setSearchProgress(progress);
                          setIsProgressDropdownOpen(false);
                        }}
                      >
                        {progress}
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Student Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {filteredStudents.slice(0, visibleStudents).map((student) => (
            <StudentCard
              key={student.id}
              name={student.name}
              studentName={student.id}
              country={student.country}
              progress={student.progress}
              amountRaised={student.amountRaised}
              goal={student.studentGoal}
            />
          ))}
        </div>

        {visibleStudents < filteredStudents.length && (
          <div className="text-center mt-8 flex items-center justify-center">
            <button
              className="bg-[#f1f1ff1] border border-[#e5eaee] flex items-center gap-3 hover:bg-[#F9FAFB]/90 text-gray-700 py-2 px-3 rounded-md"
              onClick={handleLoadMore}
            >
              Load more <FaCaretDown />
            </button>
          </div>
        )}
      </div>

      <Footer />
    </section>
  );
};

export default SupportFutureDentistry;
