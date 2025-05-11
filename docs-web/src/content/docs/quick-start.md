⚡ Quick Start
Welcome to Architext, the AI-powered VS Code extension for architecture-first development! This guide will help you get started quickly by showing you how to use the main features of Architext after installation.

👉 If you haven’t installed the extension yet, please follow the Installation Guide first.

🚀 How to Use Architext
After installing Architext, here’s how to start making the most out of it:

1. 🏗️ Validate Project Architecture
Check if your project structure follows a clean architecture pattern or your custom configuration.

Shortcut: Ctrl + Alt + R

Action: Runs an architecture check based on your current folder structure and .arch.json file (if available).

Output: A status bar message and/or a detailed report in the output panel.

✅ Great for enforcing modular architecture like MVC, Clean Architecture, etc.

2. 🧠 Analyze File and Suggest Comments
Generate smart code comments using GPT-4o to enhance code readability and documentation.

Shortcut: Ctrl + Alt + A

Action: Runs an AI analysis on the currently open file.

Output: Suggested comments inline or in a virtual hover overlay.

💡 Useful for understanding legacy code or documenting complex functions.

3. 🧮 Calculate Time Complexity
Get Big O complexity estimates for your functions.

Shortcut: Ctrl + Alt + O

Action: Analyze selected function(s) for time complexity using static analysis and AI inference.

Output: Displays the Big O estimate in a hover tooltip or comment.

📈 Perfect for performance optimization and technical interviews.

4. 📝 Use Custom Architecture File (.arch.json)
To define your own rules:

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
Place this file at the root of your project.
More details in Configuration Guide.

🎯 Recommended Workflow
Open your project in VS Code

Press Ctrl + Alt + R to validate architecture

Open any source file and press Ctrl + Alt + A to analyze it

Highlight any function and press Ctrl + Alt + O to estimate complexity

Adjust your structure with suggestions from Architext

🧩 Troubleshooting
Make sure you’re connected to the internet for AI features.

Use the Output panel (View > Output > Architext) to debug issues.

If .arch.json is misconfigured, Architext will fall back to default rules.

💬 Feedback and Support
If you have feature requests, bug reports, or feedback, open an issue on GitHub (replace with actual repo URL).

