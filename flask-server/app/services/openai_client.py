from openai import OpenAI
import os
from utils.prompts_loader import load_prompt
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=api_key)

developer_prompt = load_prompt("developer.md")


def call_openai(prompt: str, structure_format = None) -> str:
    if structure_format:
        response = client.responses.create(
            model="gpt-4o-2024-08-06",
            input=[
                {"role": "developer", "content": developer_prompt},
                {"role": "user", "content": prompt},
            ],
            text=structure_format,
        )
    else:
        response = client.responses.create(
            model="gpt-4o-2024-08-06",
            input=[
                {"role": "developer", "content": developer_prompt},
                {"role": "user", "content": prompt},
            ],
        )

    print("#####################################################")
    print(response.output_text)
    print("#######################################")
    return response.output_text
