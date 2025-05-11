# Quick Start Guide

## 1. Create Your Architecture File
Create `.arch.json` in your project root to define custom rules:

```json
{
  "name": "my-nextjs-app",
  "structure": {
    "src": {
      "app": ["layout.tsx", "page.tsx"],
      "components": ["*.tsx"],
      "lib": ["**/*.ts"],
      "styles": ["globals.css"]
    },
    "public": ["**/*"]
  },
  "rules": {
    "naming": {
      "components": "PascalCase",
      "lib": "camelCase"
    },
    "style": {
      "functions": "arrow",
      "hooksPrefix": "use"
    }
  }
}