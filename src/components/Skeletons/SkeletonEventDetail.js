export default function SkeletonEventDetail() {
    return (
      <div className="max-w-7xl w-[2000px] mx-auto py-10 px-4 animate-pulse">
        {/* Event Image Skeleton */}
        <div className="w-full h-64 bg-gray-300 rounded-lg mb-6"></div>
  
        {/* Event Details Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section Skeleton */}
          <div className="md:col-span-2 space-y-4">
            <div className="h-6 bg-gray-300 rounded-md w-2/3"></div> {/* Title */}
            <div className="h-4 bg-gray-300 rounded-md w-1/3"></div> {/* Date */}
            <div className="h-4 bg-gray-300 rounded-md w-1/3"></div> {/* Location */}
            <div className="h-10 bg-gray-300 rounded-md w-1/4"></div> {/* Button */}
          </div>
  
          {/* Right Section Skeleton */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md space-y-4">
            <div className="h-6 bg-gray-300 rounded-md w-1/3"></div> {/* Subtitle */}
            <div className="h-4 bg-gray-300 rounded-md w-2/3"></div> {/* Organizer */}
          </div>
        </div>
  
        {/* About Section Skeleton */}
        <div className="mt-10 space-y-4">
          <div className="h-6 bg-gray-300 rounded-md w-1/4"></div> {/* About Title */}
          <div className="h-4 bg-gray-300 rounded-md w-full"></div> {/* Line 1 */}
          <div className="h-4 bg-gray-300 rounded-md w-5/6"></div> {/* Line 2 */}
          <div className="h-4 bg-gray-300 rounded-md w-3/4"></div> {/* Line 3 */}
        </div>
      </div>
    );
  }
  