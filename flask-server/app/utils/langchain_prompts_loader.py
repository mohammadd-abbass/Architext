from langchain_core.prompts import ChatPromptTemplate
import os

def load_prompt(filename: str) -> str:
    """Preserve your existing logic but return raw text"""
    # ... [your existing file loading code] ...
    with open(path, "r", encoding="utf-8") as file:
        return file.read()  # Keep as raw string for template flexibility