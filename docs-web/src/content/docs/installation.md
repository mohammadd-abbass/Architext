📦 Installation
Welcome to Architext, your AI-powered VS Code extension that brings architectural clarity and intelligence to your codebase!
Follow the steps below to install and set up Architext in your development environment.

🔧 Requirements
Before installing Architext, make sure you have the following prerequisites installed:

Visual Studio Code (version 1.70 or above)

Node.js (only required for advanced usage like .arch.json validation or troubleshooting)

Internet connection (for accessing OpenAI model capabilities)

🧩 Installing from the VS Code Marketplace
Open Visual Studio Code

Go to the Extensions tab (Ctrl + Shift + X)

Search for Architext

Click Install on the Architext extension

Alternatively, you can install it directly from the Visual Studio Code Marketplace (replace with link if published).

📁 Project Setup
Architext works out of the box, but here’s how you can optimize your setup:

Your project folder should have a clear directory structure. Architext will automatically validate it against the default reference architecture.

To define a custom architecture, create a file named your-architecture.arch.json at the root of your project.

🧪 Test It Out
After installation:

Open a folder in VS Code.

Press Ctrl + Alt + A to analyze the currently opened file.

You should see inline comments or status updates based on the folder structure and code analysis.

⚙️ Settings (Optional)
Architext supports basic configuration via a .arch.json file for defining custom architecture rules.

Example:

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
You can find more about the .arch.json file in the Configuration section.

🤖 AI-Powered Capabilities
Once installed, Architext lets you:

Validate project structure (Ctrl + Alt + R)

Analyze code style and conventions (Ctrl + Alt + A)

Generate comments using OpenAI’s GPT-4o model

Calculate Big O complexity for functions

Explore each in detail in the Quick Start guide.