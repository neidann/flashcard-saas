# AI-Powered Flashcard-SaaS

Welcome to the AI-Powered Flashcard App! This project is built using [Next.js], and it leverages AI to help users create and review flashcards for efficient learning.

## Features

- **AI-Generated Flashcards:** Automatically generate flashcards based on the input text or topic using AI.
- **Personalized Learning:** Users receive flashcards tailored to their learning progress and preferences.
- **Firebase Integration:** Store and retrieve flashcards seamlessly with Firebase.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Tech Stack

- **Next.js:** React framework for building fast and user-friendly web applications.
- **GROQ API:** For efficient querying of flashcard content.
- **Firebase:** Database for storing user data and flashcards.
- **Clerk API:** User authentication and management.
- **Stripe:** For handling payments and subscriptions.
- **Vercel:** Hosting and deployment of the Next.js application.

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (version 14 or higher)
- npm or yarn
- Firebase account and project
- Groq API Key
- Clerk API Key
- Stripe account

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/neidann/flashcard-saas
   cd flashcard-saas

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
  
3. **Set up environment variables:**
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY =your-stripe-api-key
   STRIPE_SECRET_KEY = your-stripe-sectret
   GROQ_API_KEY= your-groq-api-key
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-api-key
   CLERK_SECRET_KEY= your-clerk-secret-key

4. **Run the development server:**
   ```bash
   npm run dev
    # or
   yarn dev

  ### Usage
- 1.**Create Flashcards:**
    -*Enter a topic or some text.
    - *The AI will generate flashcards based on the input.
-2.**Personalize Learning:**
   - *Get tailored flashcards based on your progress.
-3.**Review and Manage:**
   - *Store your flashcards with Firebase, manage your account with Clerk, and subscribe using Stripe.


