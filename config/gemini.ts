import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";


const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyC9SrCzPTP0RcIw6VQg3bVeutCRAH8UxHQ";


async function runChat(prompt: string) {
  const financialKeywords = [
    "finance",
    "financial",
    "investment",
    "budget",
    "savings",
    "retirement",
    "stock",
    "portfolio",
    "tax",
    "insurance",
    "loan",
    "mortgage",
    "credit",
    "debt",
    "wealth",
  ];

  const containsFinancialKeywords = financialKeywords.some((keyword) =>
    prompt.toLowerCase().includes(keyword)
  );

  if (!containsFinancialKeywords) {
    return "Please ask query regarding financial planning only.";
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

  const financePrompt = `You are a financial expert. Please provide insights related to finance. ${prompt}`;

  const result = await chat.sendMessage(financePrompt);
  const response = result.response;
  return response.text();
}

export default runChat;
