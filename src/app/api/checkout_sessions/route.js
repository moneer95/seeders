import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SK);

export async function POST(req) {
  
  try {

    const body = await req.json(); // Parse request body
    console.log("Request body:", body); // Debug request body

    if (!body.amount) {
      throw new Error("Amount is required");
    }

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Donation",
            },
            unit_amount: body.amount * 100, // Amount in cents (e.g., $10 becomes 1000 cents)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      return_url: `https://example.com/return?session_id={CHECKOUT_SESSION_ID}`,
      tax_id_collection: {
        enabled: true,
      },      
    });

    return new Response(JSON.stringify({ clientSecret: session.client_secret }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: 'Failed to create checkout session' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
