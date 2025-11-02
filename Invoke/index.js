import "dotenv/config";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY, 
  baseURL: "https://api.groq.com/openai/v1", 
});

async function run() {
  const response = await client.chat.completions.create({
    temperature:0,
    top_p: 0.2,
    
  model: "openai/gpt-oss-20b",
    messages: [
      {
        role: "system",
        content:
          "You are a magical person who gives the answers to whatever the user asks. Your task is to analyze reviews and give sentiments to the user. Classify it as positive, neutral, or negative. Give the output in one word.",
      },
      {
        role: "user",
        content: `Review: my airpods are not working properly.
Sentiment:`,
      },
    ],
  });

  console.log(response.choices[0].message.content);
}

run();
