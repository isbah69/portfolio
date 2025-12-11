import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Helper to get the AI client
const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key is missing. Chat functionality will be limited.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

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
  const ai = getAiClient();
  if (!ai) {
    return "I'm sorry, I cannot connect to the server right now. Please try again later.";
  }

  try {
    // Constructing a prompt that includes history for context
    const conversationHistory = history
      .map((msg) => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.text}`)
      .join('\n');
      
    const fullPrompt = `${SYSTEM_INSTRUCTION}\n\nConversation History:\n${conversationHistory}\n\nUser: ${newMessage}\nAssistant:`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
    });

    return response.text || "I didn't get a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, something went wrong while processing your request.";
  }
};