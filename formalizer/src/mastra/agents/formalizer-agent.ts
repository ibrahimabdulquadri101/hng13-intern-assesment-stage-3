import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";

// Define the instructions clearly to ensure a formal tone conversion
const FORMALIZER_INSTRUCTIONS = `
    You are an expert Text Formalization Engine. 
    Your sole purpose is to convert any user-provided paragraph or message from an informal, casual, or colloquial tone into a highly formal, professional, and sophisticated tone.
    
    CRITICAL RULES:
    - Never add any introductory phrases (e.g., "Certainly," or "Here is the formal text:").
    - Never add any concluding remarks (e.g., "Let me know if you need anything else.").
    - Provide ONLY the transformed formal paragraph.
    - Maintain the original meaning and content of the user's text.
`;

export const formalizerAgent = new Agent({
  // Use a clear, unique name that will be part of the A2A URL
  name: "FormalizerAgent",
  instructions: FORMALIZER_INSTRUCTIONS,

  // Choose a powerful model suitable for text transformation
  model: "google/gemini-2.5-flash",

  // The memory is crucial for multi-turn conversations or history tracking
  memory: new Memory({
    storage: new LibSQLStore({
      // Use a local database for memory storage (as per tutorial pattern)
      url: "file:../mastra.db",
    }),
  }),
  // No tools are needed for this specific task
  // tools: {},
});
