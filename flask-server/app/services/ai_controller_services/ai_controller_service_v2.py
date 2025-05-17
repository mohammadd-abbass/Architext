from services.langchain_client import client  
from langchain_core.prompts import load_prompt  

def generate_function_comments(code: str, language: str) -> str:

    prompt_template = load_prompt("comment.md") 
    
    chain = (
        client["base_prompt"].partial(system_prompt=prompt_template)
        | client["llm"]
        | client["default_parser"]
    )
    
    return chain.invoke({"input": f"{language} code:\n{code}"})