import type { Message } from "./message.types.js"

export interface OllamaResponse{
    message: Message,
    done: boolean,
}