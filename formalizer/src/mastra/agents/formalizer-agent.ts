import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";

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
  name: "FormalizerAgent",
  instructions: FORMALIZER_INSTRUCTIONS,

  model: "google/gemini-2.5-flash",

  memory: new Memory({
    storage: new LibSQLStore({
      url: "file:../mastra.db",
    }),
  }),
});
