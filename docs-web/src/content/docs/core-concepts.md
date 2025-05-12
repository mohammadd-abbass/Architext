## Core Concepts

**Architext** is built around the principle of architecture-first development. Whether you're building a backend API, a frontend SPA, or a full-stack project, maintaining a clean, layered architecture is crucial. This document explains the core concepts that power Architext.

---

### 1. Architecture Validation

At its core, **Architext** analyzes your project folder structure against a defined architectural pattern. This ensures that:

- Each folder/module adheres to its intended responsibility.
- Dependencies flow top-down only, not backward.
- Architecture erosion is avoided over time.

#### Example:
If you define that controllers can access services, but not the other way around, **Architext** will enforce that rule.

---

### 2. Layer Definitions (`.arch.json`)

You can define your architecture explicitly using a `.arch.json` file placed at the root of your project. Example:

```json
{
  "layers": ["controllers", "services", "models"],
  "rules": {
    "controllers": ["services"],
    "services": ["models"],
    "models": []
  }
}
