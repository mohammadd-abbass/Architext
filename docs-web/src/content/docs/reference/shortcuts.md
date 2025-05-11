# Keyboard Shortcuts Reference

## Core Shortcuts

| Shortcut | Command | Context | Description |
|----------|---------|---------|-------------|
| `Ctrl+Alt+A` | `architext.analyzeCode` | File Explorer/Editor | AI-powered code analysis for current file |
| `Ctrl+Alt+R` | `architext.validateStructure` | Workspace | Validate project structure against architecture rules |
| `Ctrl+Alt+C` | `architext.generateComments` | Editor | Generate AI documentation for selected functions |
| `Ctrl+Alt+O` | `architext.calculateComplexity` | Editor | Calculate Big O notation for selected code |

## Context-Specific Usage

### File Analysis (`Ctrl+Alt+A`)
```typescript
// Select code and press Ctrl+Alt+A to:
// 1. Check architecture compliance
// 2. Verify naming conventions
// 3. Detect anti-patterns
function getUserData() { ... }