import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { LibSQLStore } from "@mastra/libsql";

// Import your defined agent and the A2A route handler
import { formalizerAgent } from "./agents/formalizer-agent";
import { a2aAgentRoute } from "./routes/a2a-agent-route";

// ----------------------------------------------------
// 3. CREATE AND CONFIGURE MASTEA INSTANCE
// ----------------------------------------------------
export const mastra = new Mastra({
  // Register your agent with a key that matches its name
  agents: { formalizerAgent },

  // Basic storage configuration
  storage: new LibSQLStore({ url: ":memory:" }),

  // Logging setup
  logger: new PinoLogger({
    name: "Mastra",
    level: "debug",
  }),

  // Server configuration to expose the API route
  server: {
    build: {
      openAPIDocs: true,
      swaggerUI: true,
    },
    // Register the A2A route handler to accept Telex requests
    apiRoutes: [a2aAgentRoute],
  },
});
