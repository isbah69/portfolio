import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// System instruction to give the AI context about Isbah
const SYSTEM_INSTRUCTION = `
You are an AI assistant for Isbah Mehmood's personal portfolio website.
Your goal is to answer questions about Isbah professionally and enthusiastically.

Here is Isbah's Profile:
- Name: Isbah Mehmood
- Role: Full Stack Developer
- Contact Email: i696982172@gmail.com
- Contact Phone: 03297376890
- LinkedIn: https://www.linkedin.com/in/isbah-mehmood-5991b7330/
- GitHub: https://github.com/isbah69
- Key Skills: React, TypeScript, Node.js, Tailwind CSS, Full Stack Development.

Guidelines:
1. Be polite, professional, and concise.
2. If asked about hiring, encourage the user to use the contact form or email.
3. Only answer questions related to Isbah's professional career.
4. If you don't know an answer (e.g., personal life), politely decline.
`;

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  // Always create a new GoogleGenAI instance right before making an API call
  // using process.env.API_KEY directly as per guidelines.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    // Map history messages to the format expected by the Gemini API.
    // 'role' must be 'user' or 'model'.
    const contents = history.map((msg) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }],
    }));

    // Append the current message from the user.
    contents.push({
      role: 'user',
      parts: [{ text: newMessage }],
    });

    // Use 'gemini-3-flash-preview' for basic text tasks.
    // Provide system instructions via the config object.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    // Extract the text content from the response using the .text property.
    return response.text || "I didn't get a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, something went wrong while processing your request.";
  }
};