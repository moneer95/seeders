export default function SkeletonEventCard() {
    return (
      <div className="animate-pulse w-full bg-gray-100 shadow-md rounded-lg overflow-hidden">
        {/* Image Placeholder */}
        <div className="bg-gray-300 h-48"></div>
        {/* Content */}
        <div className="p-4">
          {/* Title Placeholder */}
          <div className="h-6 bg-gray-300 rounded-md w-3/4 mb-4"></div>
          {/* Date and Location */}
          <div className="h-4 bg-gray-300 rounded-md w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded-md w-2/3"></div>
          {/* Organizer Placeholder */}
          <div className="mt-4">
            <div className="h-4 bg-gray-300 rounded-md w-1/3 mb-2"></div>
            <div className="h-5 bg-gray-300 rounded-md w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }
  