interface ToolParameters {
  type: 'object'
  properties: Record<string, { type: string, description?: string }>
  required: string[]
}

interface ToolFunction {
  name: string
  description: string
  parameters: ToolParameters
}

export interface ToolDefinition {
  type: 'function'
  function: ToolFunction
}