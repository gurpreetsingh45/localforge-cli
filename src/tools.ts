import type { ToolDefinition } from "./types/tool.types.js";

export const tools: ToolDefinition[] = [
  {
    type: "function",
    function: {
      name: "read_file",
      description: "Read the contents of a file at the given path",
      parameters: {
        type: "object",
        properties: {
          path: { type: "string", description: "The file path to read" },
        },
        required: ["path"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "write_file",
      description: "Write the content provided into the file path provided",
      parameters: {
        type: "object",
        properties: {
          path: { type: "string", description: "The file path to write" },
          content : {type : "string", description: "The content to write in the file"}
        },
        required: ["path", "content"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "run_command",
      description: "run the provided command in the terminal shell",
      parameters: {
        type: "object",
        properties: {
          command: { type: "string", description: "command to run" },
        },
        required: ["command"],
      },
    },
  },
];
