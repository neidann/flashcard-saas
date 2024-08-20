//API route to Groq AI 
import { NextResponse } from 'next/server'
import Groq from 'groq-sdk'


import dotenv from 'dotenv';
dotenv.config();

//Taking in text
const systemPrompt = `
You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
Both front and back should be one sentence long.
You should return in the following JSON format:
{
  "flashcards":[
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}
`

export async function POST(req) {
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })
    const data = await req.text()
    console.log('Received data:', data);

    try{
    //API call - using AI model to generate flashcards based on the text
    const completion = await groq.chat.completions.create({
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: data },
        ],
        model: 'llama3-8b-8192',
        temperature: 0.5,
        response_format: { type: 'json_object' },
      })
    console.log('Completion response:', completion);

    //API response - returns generated flashcards as a JSON response
    // Parse the JSON response from the AI API
    const flashcards = JSON.parse(completion.choices[0].message.content)

    // Return the flashcards as a JSON response
    return NextResponse.json(flashcards.flashcards)
    }catch (error) {
      console.error('Error generating flashcards:', error);
      return NextResponse.json({ error: 'Failed to generate flashcards' }, { status: 500 });
    }
  }