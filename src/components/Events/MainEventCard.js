'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import BuyPopup from "./BuyPopup";

// components/MainEventCard.jsx
export default function MainEventCard({ name, event_name, date, stime, price, location, organizer, image }) {
  
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  
  return (
    <>
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-xl overflow-hidden max-w-7xl mx-1 lg:mx-auto my-3 mb-20">
        {/* Left Section */}
        <div className="flex flex-col justify-between p-6 bg-gray-50 w-full md:w-1/3">
          <div className="flex flex-col gap-3">
            {/* Event Name */}
            <h2 className="text-xl font-bold text-gray-800">{event_name}</h2>
            {/* Date and Time */}
            <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
              <span className="material-icons text-gray-500">
                <Image
                  src="/images/date.svg"
                  width={20}
                  height={20}
                  alt="event icon"
                />
              </span>
              {date}
            </p>
            {/* Location */}
            <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
              <span className="material-icons text-gray-500">
                <Image
                  src="/images/location.svg"
                  width={20}
                  height={20}
                  alt="location icon"
                />
              </span>
              {location}
            </p>
          </div>
          {/* Organizer */}
          <div className="mt-6">
            <p className="text-sm text-gray-500">Organized by</p>
            <h3 className="text-base font-semibold text-gray-800">{organizer}</h3>
          </div>
          {/* Buttons */}
          <div className="flex gap-2 mt-6">
            <button 
              className="flex items-center justify-center bg-primary text-white text-sm font-semibold py-3 px-6 rounded shadow hover:bg-primaryHover"
              onClick={() => setIsPopupOpen(!isPopupOpen)}  
            >
              Book now
              <Image
                src="/images/ticket-icon.svg"
                className="material-icons ml-2"
                width={20}
                height={20}
                alt="ticket icon"
              />
            </button>

            <Link href={`/events/${name}`}>
              <button className="flex items-center justify-center bg-white border border-gray-300 text-sm font-semibold py-3 px-6 rounded shadow hover:bg-gray-100">
                More info
              </button>
            </Link>

          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-2/3">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + image} // Fallback for missing image
            alt={name}
            className="w-full h-full object-cover"
            width={500}
            height={200}
          />
        </div>
      </div>

      {
        isPopupOpen && 
        <BuyPopup 
          event={{name, event_name, date, stime, price, location, organizer, image}}
          setIsPopupOpen={setIsPopupOpen}
        />
      }
      

    </>
  );
}
