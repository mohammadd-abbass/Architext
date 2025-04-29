from utils.prompts_loader import load_prompt
from services.openai_client import call_openai


def generate_function_comments(code: str, language: str) -> str:
    prompt_template = load_prompt("comment.md")
    prompt = prompt_template.replace("{{code}}", code).replace("{{language}}", language)

    return call_openai(prompt)

def calculate_complexity(code: str, language: str) -> str:
    prompt_template = load_prompt("complexity.md")
    prompt = prompt_template.replace("{{code}}", code).replace("{{language}}", language)

    return call_openai(prompt)