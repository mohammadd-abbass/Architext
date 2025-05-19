import json
from models.classes import ArchitectureAnalysisResult, FileArchitectureResult
from utils.prompts_loader import load_prompt
from services.langchain_client import langchain_client


def generate_function_comments(code: str, language: str) -> str:
    raw_prompt = load_prompt("comment.md")
    chain = langchain_client.get_text_chain(raw_prompt)

    return chain.invoke({"language": language, "code": code})


def calculate_function_complexity(code: str, language: str) -> str:
    raw_prompt = load_prompt("complexity.md")
    chain = langchain_client.get_text_chain(raw_prompt)

    return chain.invoke({"language": language, "code": code})


def check_project_architecture(files, reference) -> ArchitectureAnalysisResult:
    raw_prompt = load_prompt("refArchitecture.md")

    files_str = json.dumps([file.__dict__ for file in files], indent=2)  

    chain = langchain_client.get_structured_chain(
        raw_prompt, ArchitectureAnalysisResult
    )

    return chain.invoke({"files": files_str, "reference": json.dumps(reference, indent=2)})

def analyze_file_against_architecture(code: str, language: str, reference: dict) -> FileArchitectureResult:
    raw_prompt = load_prompt("analyze.md")

    chain = langchain_client.get_structured_chain(
        raw_prompt, FileArchitectureResult
    )

    return chain.invoke({"code": code, "language": language, "reference": json.dumps(reference, indent=2)})


def generate_config(config: str, session_id: str) -> str:
    raw_prompt = load_prompt("config.md")
    chain = langchain_client.get_assistant_chain(raw_prompt, session_id)
    return chain.invoke({"config": config})