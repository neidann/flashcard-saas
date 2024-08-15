import dotenv from 'dotenv';
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GROQ_API_KEY: process.env.GROQ_API_KEY,
      },
};

export default nextConfig;
