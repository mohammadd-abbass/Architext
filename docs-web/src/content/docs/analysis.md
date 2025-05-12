## AI-Powered Analysis Overview

Architext is an AI-first Visual Studio Code extension designed to help you build and maintain clean, scalable, and well-structured software projects. It leverages **OpenAI’s GPT-4o model** to power every core feature—from architecture validation to intelligent code commenting and complexity estimation.

---

## What Does "AI-Powered" Mean?

All features in Architext are backed by **real-time analysis performed by GPT-4o**, allowing the extension to:

- Understand your code semantically, not just syntactically
- Recognize architectural patterns and violations
- Suggest improvements, abstractions, or layer corrections
- Estimate time complexity with contextual awareness
- Generate meaningful documentation and inline comments

---

## Project Structure & Architecture Analysis

- Architext analyzes your **folder and file structure** to check if it conforms to clean architecture principles.
- If you provide a `.arch.json` file, it will use your custom architecture definition.
- If not, it defaults to a common layered structure (e.g., `controllers → services → models`).

The results are rendered in a **Web View**, showing:

- Violations of architectural boundaries
- Recommendations for reorganizing files
- AI-generated reasoning for each suggestion

---

## File-Level Analysis

When you analyze an individual file (`Ctrl + Alt + A`):

- Architext sends the file content to GPT-4o
- It detects design flaws, mixed concerns, poor abstractions
- Inline suggestions or hover-based comments are added where relevant

This makes it especially useful for:
- Reviewing legacy code
- Improving code maintainability
- Ensuring consistency with architectural intent

---

## Other AI-Backed Features

### 🔍 Validate Folder Architecture  
Shortcut: `Ctrl + Alt + R`  
Checks if your project structure aligns with the `.arch.json` config or the default rules.

### 💬 Generate Smart Comments  
Shortcut: `Ctrl + Alt + C`  
Adds comments that explain the purpose and behavior of your code.

### 🧠 Estimate Time Complexity  
Shortcut: `Ctrl + Alt + O`  
Provides Big O complexity analysis with reasoning.

---

## Output Format

All AI-generated feedback is presented in a **dedicated Web View panel** within VS Code, clearly listing:

- Violations  
- Suggested structure  
- Commentary and reasoning

---

## Want Custom Rules?

You can create your own `.arch.json` to define the architecture you want your project to follow.

[Click here to generate your custom `.arch.json`](#/generate-arch-json)

---

Architext doesn’t just assist—it **thinks with you** while you code.
