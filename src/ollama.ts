import type { Message, OllamaResponse } from "./types/index.js";

export async function chat(messages: Message[]): Promise<OllamaResponse> {
  const response = await fetch("http://localhost:11434/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "qwen2.5-coder:7b",
      messages: messages,
      options: { temperature: 0.5 }, // temperature must be low for a coding agent
      stream: false,
    }),
  });
  const data =await response.json() as OllamaResponse;
  return data;
}
