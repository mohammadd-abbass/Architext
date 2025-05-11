🧠 Core Concepts
Architext is built around the principle of architecture-first development. Whether you're building a backend API, frontend SPA, or a full-stack project, maintaining a clean, layered architecture is crucial. This document explains the core ideas that power Architext.

🏛️ 1. Architecture Validation
At its core, Architext analyzes your project folder structure against a defined architectural pattern. This ensures that:

Each folder/module adheres to its intended responsibility.

Dependencies flow top-down only, not backward.

You avoid architecture erosion over time.

✅ Example:
If you define that controllers can access services, but not the other way around, Architext will enforce that rule.

🧩 2. Layer Definitions (.arch.json)
You can define your architecture explicitly using a .arch.json file placed at the root of your project:

json
Copy
Edit
{
  "layers": ["controllers", "services", "models"],
  "rules": {
    "controllers": ["services"],
    "services": ["models"],
    "models": []
  }
}
This allows Architext to validate whether a file in services is wrongly importing something from controllers, for example.

🛠 If .arch.json is missing, Architext uses a set of sensible defaults.

🤖 3. AI-Powered Contextual Analysis
Architext uses GPT-4o to understand your code's logic and provide:

Comment Suggestions: Inline comments for complex or undocumented functions.

Code Summaries: High-level overviews of what a file or function does.

Time Complexity Estimation: Estimates the Big O notation of algorithms.

These features use static code analysis combined with LLM-based reasoning to help you code smarter, not harder.

📂 4. File-Context Awareness
Architext isn't just parsing text—it understands how each file fits into the architecture. This allows it to:

Suggest improvements based on the file's role.

Warn if a file is "leaking responsibilities" (e.g., models handling logic).

Show role-based violations even in mixed-content files.

🧠 5. Extensible & Framework-Agnostic
Architext doesn’t lock you into a particular stack or framework.

Works with Node.js, Python, Java, PHP, etc.

You can define your own layers like "routes", "handlers", "repositories" or "stores" in .arch.json.

Compatible with any folder structure, so long as it's consistent.

🔄 6. Real-Time & On-Demand
You can run architecture checks manually (Ctrl + Alt + R) or enable real-time monitoring (coming soon) so violations are flagged as you type.

💡 Summary
Concept	Description
Architecture Validation	Check folder/file structure against defined rules
.arch.json	JSON config file to define layers and allowed dependencies
AI Analysis	Uses GPT-4o for comment suggestions and complexity estimation
File Role Awareness	Understands the purpose and dependencies of each file
Extensible Architecture	Works with any stack or custom folder hierarchy
Manual + Real-Time Modes	Run validations on demand or (soon) in real-time as you work

