import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";

// Load Stripe.js with your publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);

// DonationForm component
export default function DonationFormInner() {
  const [amount, setAmount] = useState('');
  const [isCheckout, setIsCheckout] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    // Proceed to CheckoutForm
    setIsCheckout(true);
  };

  if (isCheckout) {
    return (
      <Elements stripe={stripePromise}>
        <CheckoutForm amount={amount} />
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
      <p className="text-gray-600 text-center">
        Support our mission by choosing a donation amount or entering a custom amount.
      </p>

      {/* Preset Donation Buttons */}
      <div className="grid grid-cols-2 gap-4 w-full">
        {[100, 500, 1000, 2500].map((preset, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setAmount(preset)}
            className={`py-3 px-5 border rounded-lg ${
              amount == preset
                ? 'bg-[#081c7d] text-white border-transparent'
                : 'bg-white text-[#081c7d] border-gray-300'
            } hover:bg-[#081c7d] hover:text-white transition-all`}
          >
            ${preset}
          </button>
        ))}
      </div>

      {/* Custom Donation Input */}
      <div className="w-full">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter custom amount"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#081c7d]"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-[#081c7d] text-white font-bold rounded-lg hover:bg-[#062065] transition-all"
      >
        Proceed to Donate ${amount || 0}
      </button>
    </form>
  );
}
