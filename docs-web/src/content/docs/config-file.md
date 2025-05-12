## Configuration Guide: `.arch.json` File

Architext allows users to define a **reference architecture** for their project using a configuration file named `*.arch.json`.

This file plays a critical role in guiding the extension's behavior, helping it validate whether your project structure aligns with your intended architectural design.

---

### 📁 What Is a `.arch.json` File?

The `.arch.json` file is a JSON configuration file placed at the **root** of your project.  
It defines the architectural **layers** and the **rules** that specify how these layers can depend on one another.

You can name it anything as long as it ends with `.arch.json`, such as:

- `your-architecture.arch.json`
- `layered.arch.json`
- `clean.arch.json`

---

### 🧠 Purpose of This File

This file serves as a **blueprint** that the Architext extension uses to analyze your project's structure.

By defining clear layers (e.g., `controllers`, `services`, `models`) and the allowed dependencies between them, you gain:

- **Architectural consistency**
- **Early detection of violations**
- **Scalable structure enforcement**

---

### 📄 Example Configuration

```json
{
  "layers": ["controllers", "services", "models"],
  "rules": {
    "controllers": ["services"],
    "services": ["models"],
    "models": []
  }
}
