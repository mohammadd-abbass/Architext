import json
from prompts.structured_output import ARCHITECTURE_CHECK
from utils.prompts_loader import load_prompt
from services.openai_client import call_openai


def generate_function_comments(code: str, language: str) -> str:
    prompt_template = load_prompt("comment.md")
    prompt = prompt_template.replace("{{code}}", code).replace("{{language}}", language)

    return call_openai(prompt)

def calculate_function_complexity(code: str, language: str) -> str:
    prompt_template = load_prompt("complexity.md")
    prompt = prompt_template.replace("{{code}}", code).replace("{{language}}", language)

    return call_openai(prompt)

def check_project_architecture(files, reference) -> str:
    prompt_template = load_prompt("refArchitecture.md")
    
    files_str = json.dumps([file.__dict__ for file in files], indent=2)  
    reference_str = json.dumps(reference, indent=2)

    prompt = prompt_template.replace("{{files}}", files_str).replace("{{reference}}", reference_str)

    return call_openai(prompt, ARCHITECTURE_CHECK)


def analyze_file_against_architecture(code: str, language: str, reference: dict) -> str:
    prompt_template = load_prompt("analyze.md") 
    reference_str = json.dumps(reference, indent=2)

    prompt = prompt_template.replace("{{code}}", code).replace("{{language}}", language).replace("{{reference}}", reference_str)

    return call_openai(prompt, ARCHITECTURE_CHECK)
