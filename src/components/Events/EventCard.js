import Image from "next/image";
import Link from "next/link";

export default function EventCard({ name, event_name, date, location, organizer, image }) {

    return (
        <Link href={`/events/${name}`}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
                {/* Image */}
                <Image
                    src={process.env.NEXT_PUBLIC_API_URL + image} // Fallback for missing image
                    alt={event_name}
                    className="w-full h-48 object-cover"
                    width={500}
                    height={200}
                />

                {/* Content */}
                <div className="p-4">
                    {/* Event Name */}
                    <h2 className="text-lg font-bold text-gray-800">{event_name}</h2>

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
                                alt="event icon"
                            />
                        </span>
                        {location}
                    </p>

                    {/* Organizer */}
                    <div className="mt-4">
                        <p className="text-sm text-gray-500">Organized by</p>
                        <h3 className="text-base font-semibold text-gray-800">{organizer}</h3>
                    </div>
                </div>
            </div>
        </Link>

    );
}
