interface Message {
  role: 'user' | 'assistant' | 'system' | 'tool'
  content: string
}

interface OllamaResponse {
  message: Message
  done: boolean
}

const response = await fetch('http://localhost:11434/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'qwen2.5-coder:7b',
    messages: [{ role: 'user', content: 'Write a hello world in Python' }],
    stream: false
  })
})

const data = await response.json() as OllamaResponse
console.log(data.message.content)
console.log(data.done)