# Core Concepts

## Architectural Validation Flow
```mermaid
graph TD
    A[Project Files] --> B{Reference Architecture}
    B -->|Default Rules| C[Default.arch.json]
    B -->|Custom Rules| D[Project.arch.json]
    C --> E[Validation Engine]
    D --> E
    E --> F[AI Analysis Layer]
    F --> G[Structural Report]
    F --> H[Code Style Report]
    G --> I[Developer Dashboard]
    H --> I