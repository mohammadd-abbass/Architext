import json
from app.utils.prompts_loader import load_prompt
from services.langchain_client import langchain_client


def generate_function_comments(code: str, language: str) -> str:
    task_prompt = load_prompt("comment.md").replace("{{code}}", code)
    chain = langchain_client.get_text_chain(task_prompt)
    return chain.invoke({"language": language})