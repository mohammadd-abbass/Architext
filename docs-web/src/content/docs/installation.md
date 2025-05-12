## Installation Guide

Welcome to **Architext**, the AI-powered Visual Studio Code extension designed to enhance your project’s architectural clarity and intelligence.  
Follow the steps below to install and configure Architext in your development environment.

---

### System Requirements

Ensure the following tools are installed on your system before proceeding:

- **Visual Studio Code** (version 1.70 or above)
- **Node.js** (required only for advanced usage such as `.arch.json` validation or troubleshooting)
- **Stable Internet Connection** (needed to access OpenAI capabilities)

---

### Installation via Visual Studio Code Marketplace

To install Architext:

1. Launch **Visual Studio Code**
2. Navigate to the **Extensions** panel (`Ctrl + Shift + X`)
3. Search for **Architext**
4. Click the **Install** button next to the extension

Alternatively, you can install it directly from the [Visual Studio Code Marketplace](#) (update with actual link when available).

---

### Project Setup

Architext is designed to work immediately after installation. However, for optimal results:

- Organize your project with a clear directory structure. Architext will validate this structure against a predefined reference architecture.

To customize this behavior, create a file named `your-architecture.arch.json` at the root of your project and define your architecture rules.

---

### Running an Analysis

Once installed, you can test the extension:

1. Open a project folder in Visual Studio Code.
2. Press `Ctrl + Alt + A` to initiate analysis on the currently active file.

Architext will provide inline architectural feedback or status messages based on your code and folder layout.

---

### Optional Settings Configuration

Architext supports configuration via a `.arch.json` file for defining custom architecture rules. Below is an example configuration:

```json
{
  "layers": ["controllers", "services", "models"],
  "rules": {
    "controllers": ["services"],
    "services": ["models"],
    "models": []
  }
}
