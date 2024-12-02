'use client';

import React, { useEffect, useState } from "react";
import { Navbar, Footer, MainEventCard, EventCard, SkeletonCard, SkeletonMainEvent } from "@/components";
import axios from "axios";

export default function Page() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/resource/Events?fields=["name","event_name","details","location","image","date","stime", "price"]&limit_start=0&limit_page_length=40&order_by=date`,
          {
            auth: {
              username: process.env.NEXT_PUBLIC_API_KEY,
              password: process.env.NEXT_PUBLIC_API_SECRET,
            },
          }
        );
        const data = response.data.data;

        if (data?.length) {
          setEvents(data); // Store the event data
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="max-w-[1440px] bg-white mx-auto flex flex-col items-center justify-stretch lg:px-24 pt-8 gap-12">
      <Navbar />

      <div className="min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Render Loading Skeleton or Content */}
          {loading ? (
            <div className="space-y-8">
              {/* Skeleton for Main Card */}
              <SkeletonMainEvent />

              {/* Title Placeholder */}
              <div className="h-8 bg-gray-300 rounded-md w-1/3 mb-4"></div>
              
              {/* Skeleton for Event Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array(8)
                  .fill(0)
                  .map((_, index) => (
                    <SkeletonCard key={index} />
                  ))}
              </div>
            </div>
          ) : events.length > 0 ? (
            <div className="space-y-8">
              {/* Main Event Card */}
              <MainEventCard
                name={events[0]?.name}
                event_name={events[0]?.event_name}
                date={events[0]?.date}
                location={events[0]?.location}
                organizer="Seeders"
                image={events[0]?.image}
                stime={events[0]?.stime.slice(0, 5)}
                price={events[0]?.price}
              />

              {/* Title */}
              <h1 className="text-2xl font-bold text-gray-800 mb-3 mt-5">
                Upcoming Events
              </h1>

              {/* Event Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {events.slice(1).map((event, index) => (
                  <EventCard
                    key={event.name}              
                    name={event.name}
                    event_name={event.event_name}
                    date={event.date}
                    location={event.location}
                    organizer="Seeders"
                    image={event.image}
                  />
                ))}
              </div>
            </div>
          ) : (
            <p>No events available.</p>
          )}
        </div>
      </div>

      <Footer />
    </section>
  );
}
