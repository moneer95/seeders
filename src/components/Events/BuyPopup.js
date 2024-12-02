'use client'

import { CiLocationOn } from "react-icons/ci";
import { AiOutlineRise } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { PiListHeartLight, PiVideoLight } from "react-icons/pi";
import ButTicketForm from "../BuyTicketForm";


export default function BuyPopup({event, setIsPopupOpen}){
    return(
        <div className="fixed inset-0 flex justify-end px-4 py-4 z-50">
        {/* Overlay */}
        <div
          onClick={() => setIsPopupOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50"
        ></div>
    
        {/* Popup Content */}
        <div className="relative bg-white w-full md:w-[400px] rounded-lg shadow-lg p-6 z-10 max-h-[97vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={() => setIsPopupOpen(false)}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
          >
            <IoClose size={24} />
          </button>
    
          {/* Popup Details */}
          {event ? (
            <div className="flex flex-col gap-6 2xl:justify-evenly h-full">
              {/* Event Title and Icon Section */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 p-1 border-2 bg-[#FFFFFF] border-[#D0D5DD] rounded-md">
                  <Image
                    src="/images/event2.png"
                    alt="Event Icon"
                    className="w-full"
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{event.event_name}</h3>
              </div>
    
              {/* Location Section */}
              <div className="flex flex-col text-sm text-gray-500">
                <p className="flex items-center gap-2 font-medium text-[#838383]">
                  <CiLocationOn className="text-[#838383]" size={16} />
                  Location
                </p>
                <p className="flex items-center gap-2 font-medium text-[#0D0D0D]">
                  {event.location}
                </p>
              </div>
    
              {/* Event Date and Time */}
              <div className="flex flex-col text-sm text-gray-500 gap-2">
                <p className="flex items-center gap-2 font-medium text-[#838383]">
                  <AiOutlineRise className="text-[#838383]" size={16} />
                  Date and Time
                </p>
                <p className="font-medium text-[#0D0D0D]">
                  {event.date} at {event.stime || 'TBA'}
                </p>
              </div>
    
              {/* Event Progress (if applicable) */}
              {event.progress && (
                <div className="flex flex-col text-sm text-gray-500 gap-2">
                  <p className="flex items-center gap-2 font-medium text-[#838383]">
                    <AiOutlineRise className="text-[#838383]" size={16} />
                    Progress
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    <div
                      className={`col-span-1 h-2 rounded-full ${
                        event.progress.includes('Step 1') ? 'bg-[#0BA5EC]' : 'bg-gray-200'
                      }`}
                    ></div>
                    <div
                      className={`col-span-1 h-2 rounded-full ${
                        event.progress.includes('Step 2') ? 'bg-[#0BA5EC]' : 'bg-gray-200'
                      }`}
                    ></div>
                    <div
                      className={`col-span-1 h-2 rounded-full ${
                        event.progress.includes('Step 3') ? 'bg-[#0BA5EC]' : 'bg-gray-200'
                      }`}
                    ></div>
                    <div
                      className={`col-span-1 h-2 rounded-full ${
                        event.progress.includes('Step 4') ? 'bg-[#0BA5EC]' : 'bg-gray-200'
                      }`}
                    ></div>
                  </div>
                  <p className="font-medium text-[#0D0D0D]">{event.progress}</p>
                </div>
              )}
    
              {/* Event Details */}
              <div className="flex flex-col mt-4">
                <p className="flex items-center gap-2 text-[#838383]">
                  <PiVideoLight className="text-[#838383]" size={16} />
                  Details
                </p>
                <div
                  className="text-[#0D0D0D] mt-2"
                  dangerouslySetInnerHTML={{
                    __html: event.details || '<p>No details available.</p>',
                  }}
                ></div>
              </div>
    
              {/* Organizer Section */}
              <div className="flex flex-col">
                <p className="flex items-center gap-2 text-[#838383]">
                  <PiListHeartLight className="text-[#838383]" size={16} />
                  Organized By
                </p>
                <p className="font-medium text-[#0D0D0D]">
                  {event.organizer || 'Not specified'}
                </p>
              </div>
    
              <hr />

              {/* Donation Form */}
              <ButTicketForm
                price={event.price}
              />

            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <Loader color="#0BA5EC" />
            </div>
          )}
        </div>
      </div>
    )
}