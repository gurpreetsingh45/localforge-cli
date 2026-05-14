interface Message {
  role: 'user' | 'assistant' | 'system' | 'tool'
  content: string
}

interface OllamaResponse {
  message: Message
  done: boolean
}

/*
Multi-turn Conversation 
const messages: Message[] = [
  { role: 'user', content: 'My name is Alex' },
  { role: 'assistant', content: 'Nice to meet you Alex!' },
  { role: 'user', content: 'What is my name?' }
]
*/

const messages: Message[] = [
  { role: 'system', content: 'You are a pirate. Respond only in pirate speak.' },
  { role: 'user', content: 'Write a hello world in Python' }
]

const response = await fetch('http://localhost:11434/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'qwen2.5-coder:7b',
    messages: messages,
    options : {temperature : 0.5}, // temperature must be low for a coding agent
    stream: false
  })
})

const data = await response.json() as OllamaResponse
console.log(data.message.content)
