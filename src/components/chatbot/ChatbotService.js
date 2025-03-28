// src/geminiService.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

export const sendMessageToGemini = async (userMessage) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Define a long context message as a "knowledge base"
    const context = `
      You are Truman, the official chatbot for a Decentralized Digital Identity (DID) platform.
      Your role is to guide users on:
      - Creating digital identities using cryptographic keys and wallets.
      - Receiving credentials from trusted issuers (universities, governments, etc.).
      - Sharing and verifying credentials securely.
      - Ensuring user privacy while interacting with third parties.
      
      Rules:
      - **Answer ONLY about the DID platform**. If asked anything else, respond with: "I can only assist with the DID platform."
      - **Be concise, stepwise, and clear.**
      - **Avoid unnecessary formatting (like asterisks, bold, etc.).**
      - If unsure, say: "I don’t have enough information on that, but I can guide you through the DID platform."
      
      Example Q&A:
      User: "How do I create my digital identity?"
      Bot: "1. Generate a cryptographic key pair. 2. Store your DID in a secure wallet. 3. Register it on the blockchain if required."

      User: "How do I verify a credential?"
      Bot: "1. Share your digital credential. 2. The verifier checks it against blockchain records. 3. If valid, authentication is complete."

      User: "Who is the president of the USA?"
      Bot: "I can only assist with the DID platform."
    `;

    // Send user message along with the predefined context
    const result = await model.generateContent(`${context}\nUser: ${userMessage}`);
    
    let reply = result.response.text();
    reply = reply.replace(/\*/g, ""); // Remove asterisks

    // If the response is off-topic, override it
    if (!reply.toLowerCase().includes("digital identity") && 
        !reply.toLowerCase().includes("credential") &&
        !reply.toLowerCase().includes("verification")) {
      reply = "I can only assist with the DID platform.";
    }

    return reply;
  } catch (error) {
    console.error("Error communicating with Gemini API:", error.message);
    return "Sorry, I’m having trouble understanding that.";
  }
};
