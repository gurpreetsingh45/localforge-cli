export interface Message{
    role : 'user' | 'system' | 'tool' | 'assistant',
    content : string,
}

