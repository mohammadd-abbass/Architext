from openai import OpenAI
import os
from utils.prompts_loader import load_prompt


api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=api_key)

developer_prompt = load_prompt("developer.md")

def call_openai(prompt: str) -> str:
    response = client.responses.create(
        model="gpt-4o", 
        input=[
            {
                "role": "developer",
                "content": developer_prompt
            },

            {    
                "role": "user", 
                "content": prompt
            }
        ],
    )
    return response.output_text.strip()

