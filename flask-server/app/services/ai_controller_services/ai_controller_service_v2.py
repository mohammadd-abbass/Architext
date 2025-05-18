import json
from app.models.classes import ArchitectureAnalysisResult, FileArchitectureResult
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

def analyze_file_against_architecture(code: str, language: str, reference: dict) -> FileArchitectureResult:
    task_prompt = (
        load_prompt("analyze.md")
        .replace("{{code}}", code)
        .replace("{{language}}", language)
        .replace("{{reference}}", json.dumps(reference))
    )

    chain = langchain_client.get_structured_chain(
        task_prompt, FileArchitectureResult
    )

    return chain.invoke({})


def generate_config(config: str, session_id: str) -> str:
    task_prompt = load_prompt("config.md").replace("{{config}}", config)
    chain = langchain_client.get_assistant_chain(task_prompt, session_id)
    return chain.invoke({"input": config})