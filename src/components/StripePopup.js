import { useState } from "react";

export default function StripePopup({paymentLink}) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const redirectToStripe = () => {
    window.location.href = paymentLink;
  };

  return (
    <div>
      {/* Button to Open Popup */}
      <button
        onClick={openPopup}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Donate Now
      </button>

      {/* Popup Overlay */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-sm text-center">
            <h2 className="text-xl font-bold mb-4">Complete Your Donation</h2>
            <p className="text-gray-600 mb-4">
              Click the button below to proceed to the payment page.
            </p>
            <button
              onClick={redirectToStripe}
              className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
            >
              Go to Payment
            </button>
            <br />
            <button
              onClick={closePopup}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
