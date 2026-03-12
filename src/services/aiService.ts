import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const SYSTEM_PROMPT = `You are an AI assistant for the game 'Incarnate'. 
The game is based on the 'Incarnate' lore, featuring themes of corruption, trauma, and multiversal collapse.
Characters include Ena, Tim, the Horsemen (Death, War, Famine, Conquest), Lux, Velvette, and Madison.
Your role is to provide narrative flavor, hints, or influence the player's state based on the lore.
If the player asks for help, provide cryptic hints based on the lore.
If the player asks to be 'controlled', provide a narrative cutscene where a character like Lux or Velvette influences their thoughts.`;

export async function generateAiResponse(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
    });
    return response.text || "The void remains silent.";
  } catch (error) {
    console.error("AI Error:", error);
    return "The corruption interferes with the connection.";
  }
}
