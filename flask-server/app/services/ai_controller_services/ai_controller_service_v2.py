import json
from app.models.classes import ArchitectureAnalysisResult
from app.utils.prompts_loader import load_prompt
from services.langchain_client import langchain_client


def generate_function_comments(code: str, language: str) -> str:
    raw_prompt = load_prompt("comment.md")
    chain = langchain_client.get_text_chain(raw_prompt)
    
    return chain.invoke({"language": language, "code": code})


def calculate_function_complexit(code: str, language: str) -> str:
    raw_prompt = load_prompt("complexity.md")
    chain = langchain_client.get_text_chain(raw_prompt)

    return chain.invoke({"language": language, "code": code})


def check_project_architecture(files, reference) -> ArchitectureAnalysisResult:
    task_prompt = (
        load_prompt("refArchitecture.md")
        .replace("{{files}}", json.dumps(files))
        .replace("{{reference}}", json.dumps(reference))
    )

    chain = langchain_client.get_structured_chain(
        task_prompt, ArchitectureAnalysisResult
    )

    return chain.invoke({})
