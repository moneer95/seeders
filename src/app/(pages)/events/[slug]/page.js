'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SkeletonEventDetail, Navbar, Footer, BuyPopup } from '@/components';
import Image from 'next/image';

export default function EventDetailPage() {
  const pathname = usePathname(); // Get the current path
  const slug = pathname.split('/').pop(); // Extract the slug from the path
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup visibility

  useEffect(() => {
    if (!slug) return;

    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/resource/Events/${slug}`,
          {
            auth: {
              username: process.env.NEXT_PUBLIC_API_KEY,
              password: process.env.NEXT_PUBLIC_API_SECRET,
            },
          }
        );
        setEvent(response.data.data);
      } catch (error) {
        console.error('Error fetching event:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [slug]);

  return (
    <section className="max-w-[1440px] bg-white mx-auto flex flex-col items-center justify-stretch lg:px-24 pt-8 gap-12">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <div className="space-y-8">
              {/* Loading Skeleton */}
              <SkeletonEventDetail />
            </div>
          ) : event ? (
            <div>
              {/* Event Image */}
              <div className="w-full rounded-lg overflow-hidden shadow-md mb-6">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${event.image}`}
                  alt={event.event_name}
                  className="w-full h-64 object-cover"
                  width={600}
                  height={200}
                />
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Section */}
                <div className="md:col-span-2">
                  <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    {event.event_name}
                  </h1>

                  {/* Date and Time */}
                  <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                    <span className="material-icons text-gray-500">
                      <Image
                        src="/images/date.svg"
                        width={20}
                        height={20}
                        alt="event image"
                      />
                    </span>
                    {event.date}
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
                    {event.location}
                  </p>

                  <button
                    className="flex items-center justify-center bg-primary text-white text-sm font-semibold py-3 mt-5 px-6 rounded-md shadow hover:bg-primaryHover"
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

                </div>

                {/* Right Section */}
                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">Organized By</h2>
                  <p className="text-sm text-gray-500">{event.organizer || 'Seeders'}</p>
                  <Image
                    src="/images/navLogo.png"
                    width={200}
                    height={200}
                    alt="organizar logo"
                  />
                </div>
              </div>

              {/* About Section */}
              <div className="mt-10">
                <h2 className="text-xl font-bold text-gray-800 mb-4">About Event</h2>
                <div
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: event.details || '<p>No additional details available.</p>',
                  }}
                ></div>              </div>
            </div>
          ) : (
            <p>No event found.</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* BuyPopup */}
      {
        isPopupOpen && (
          <BuyPopup
            event={{
              name: event?.name,
              event_name: event?.event_name,
              date: event?.date,
              stime: event?.stime,
              price: event?.price,
              location: event?.location,
              organizer: event?.organizer,
              image: event?.image,
            }}
            setIsPopupOpen={setIsPopupOpen}
          />
        )
      }
    </section >
  );
}
