import { readFileSync, writeFileSync } from "node:fs"
import { execSync } from "node:child_process"
import type { ToolDefinition } from "./types/tool.types.js"

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

export function executeTool(name: string, params : Record<string, string>) : string {
    try{
        if(name === "read_file"){
        const data = readFileSync(params.path, "utf8");
        return data;
    } else if(name === "write_file"){
        writeFileSync(params.path, params.content)
        return "File write succesfull";
    } else if(name === "run_command"){
        const data = execSync(params.command, {encoding : 'utf8'});
        return data;
    } else{
        throw new Error("Tool not found in tool definitions");
    }
    }
    catch(err){
        return `Error: ${err}`;
    }
}