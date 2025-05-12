## Quick Start

Welcome to **Architext**, the AI-powered VS Code extension for architecture-first development! This guide will help you get started quickly by showing you how to use the main features of Architext after installation.

> **Note:** If you haven’t installed the extension yet, please follow the [Installation Guide](#) first.

---

## How to Use Architext

### 1. Validate Project Architecture

Check if your project structure follows a clean architecture pattern or your custom configuration.

- **Shortcut:** `Ctrl + Alt + R`  
- **Action:** Runs an architecture check based on your current folder structure and `.arch.json` file (if available).  
- **Output:** A status bar message and/or a detailed report in the output panel.  

**Use case:** Enforces modular architecture like MVC, Clean Architecture, etc.

---

### 2. Analyze File and Suggest Comments

Generate smart code comments using GPT-4o to enhance code readability and documentation.

- **Shortcut:** `Ctrl + Alt + A`  
- **Action:** Runs an AI analysis on the currently open file.  
- **Output:** Suggested comments inline or in a hover overlay.  

**Use case:** Ideal for understanding legacy code or documenting complex functions.

---

### 3. Calculate Time Complexity

Get Big O complexity estimates for your functions.

- **Shortcut:** `Ctrl + Alt + O`  
- **Action:** Analyzes selected function(s) for time complexity using static analysis and AI inference.  
- **Output:** Displays the Big O estimate in a tooltip or inline comment.  

**Use case:** Useful for performance tuning and technical interviews.

---

### 4. Generate Function-Level Comments

Use targeted AI analysis to document specific functions quickly.

- **Shortcut:** `Ctrl + Alt + C`  
- **Action:** Runs AI analysis only on the selected function and generates a descriptive comment.  
- **Output:** Inserts or previews a comment above the function block.

**Use case:** Great for documenting key logic without analyzing the whole file.

--- 

### 5. Use Custom Architecture File (`.arch.json`)

To define your own rules, use the following JSON structure:

```json
{
  "layers": ["controllers", "services", "models"],
  "rules": {
    "controllers": ["services"],
    "services": ["models"],
    "models": []
  }
}
