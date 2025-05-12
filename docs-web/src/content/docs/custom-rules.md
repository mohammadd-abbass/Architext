## Defining Custom Architecture Rules

Architext gives you the flexibility to define your **own architectural rules** through a custom `*.arch.json` file.

This allows you to tailor the extension’s validation logic to match the specific needs of your project—whether you're using MVC, Clean Architecture, DDD, or any other style.

---

### 🧱 Custom Layers

You are not limited to predefined layer names. You can define **any folder-based layer** that makes sense for your project, such as:

- `routes`
- `handlers`
- `repositories`
- `stores`
- `utils`
- `entities`

---

### 🔧 Example of Custom Rules

```json
{
  "layers": ["routes", "handlers", "services", "repositories", "models"],
  "rules": {
    "routes": ["handlers"],
    "handlers": ["services"],
    "services": ["repositories"],
    "repositories": ["models"],
    "models": []
  }
}
```


---

### 🛠 Generate Your Own `.arch.json` File

Don't want to write your architecture config manually?

Use our interactive tool to create your custom `.arch.json` file with just a few clicks:

👉 [Generate Architecture File](#/generate-arch-json)