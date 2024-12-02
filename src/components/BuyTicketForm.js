import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";

// Load Stripe.js with your publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);

// DonationForm component
export default function ButTicketForm({price}) {
  const [isCheckout, setIsCheckout] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();


    // Proceed to CheckoutForm
    setIsCheckout(true);
  };

  if (isCheckout) {
    return (
      <Elements stripe={stripePromise}>
        <CheckoutForm amount={price} />
      </Elements>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col items-center gap-6"
    >
      <h2 className="text-3xl font-bold text-[#081c7d] text-center">
        Make a Difference Today
      </h2>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-[#081c7d] text-white font-bold rounded-lg hover:bg-[#062065] transition-all"
      >
        Proceed to Book ${price || 0}
      </button>
    </form>
  );
}
