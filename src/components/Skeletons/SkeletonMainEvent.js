export default function SkeletonMainEventCard() {
  return (
    <div className="animate-pulse flex flex-col md:flex-row bg-gray-100 shadow-md rounded-lg overflow-hidden max-w-7xl w-[2000px] mx-5 lg:mx-auto my-8">
      {/* Left Section */}
      <div className="flex flex-col justify-between p-6 bg-gray-200 w-full md:w-1/3">
        <div>
          {/* Title Placeholder */}
          <div className="h-8 bg-gray-300 rounded-md w-3/4 mb-4"></div>
          {/* Date and Location */}
          <div className="h-5 bg-gray-300 rounded-md w-1/2 mb-2"></div>
          <div className="h-5 bg-gray-300 rounded-md w-2/3"></div>
        </div>
        {/* Organizer Placeholder */}
        <div className="mt-6">
          <div className="h-5 bg-gray-300 rounded-md w-1/3 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded-md w-1/2"></div>
        </div>
        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <div className="h-10 bg-gray-300 rounded-md w-28"></div>
          <div className="h-10 bg-gray-300 rounded-md w-28"></div>
        </div>
      </div>
      {/* Right Section (Image Placeholder) */}
      <div className="w-full md:w-2/3 bg-gray-300 h-64"></div>
    </div>
  );
}