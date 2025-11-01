# **🤖 Formalizer Agent for Telex.im**

The **Formalizer Agent** is an AI Co-Worker designed for the Telex.im platform. It utilizes the Mastra framework and the Agent-to-Agent (A2A) protocol to transform any casual, informal, or conversational text into highly professional, formal, and corporate-ready prose.

This agent is built to demonstrate robust integration between a custom backend (Mastra) and the Telex platform's workflow system.

## **🎯 Core Functionality**

Given a casual message, the agent returns **only** the sophisticated, formalized version, adhering to strict rules:

1. **Input:** Casual/Colloquial Text.  
2. **Output:** Highly Formal Text.  
3. **Constraint:** No introductory or concluding remarks.

## **🛠️ Technical Stack**

* **Framework:** Mastra (TypeScript)  
* **Model:** Gemini 2.5 Flash  
* **Protocol:** Agent-to-Agent (A2A) JSON-RPC 2.0  
* **Deployment:** Mastra Cloud

## **🚀 Deployment and Setup**

### **1\. Prerequisites**

You must have Node.js, npm/pnpm, and the Mastra CLI configured locally.

### **2\. Run the Agent (Development)**

To run the agent locally for development:

pnpm install/npm install  
pnpm run dev/npm run dev

### **3\. Deployment (Mastra Cloud)**

The agent is deployed via the Mastra CLI, which handles the build, bundling, and cloud deployment:

pnpm run deploy/npm run deploy

### **4\. Telex Integration URL**

After successful deployment, the agent is accessible via the following public A2A endpoint. This URL is used in the Telex Workflow JSON

## **5\. Usage in Telex**

Once the workflow is active in your Telex workspace,chat with it