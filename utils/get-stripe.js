import { loadStripe } from '@stripe/stripe-js';
import dotenv from 'dotenv';
dotenv.config();

const getStripe = () => {
  
console.log('Stripe Publishable Key:', process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error('Missing Stripe public key');
  }
  
  return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
};

export default getStripe;