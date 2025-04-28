from openai import OpenAI
import os

api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=api_key)

def call_openai(prompt: str) -> str:
    response = client.responses.create(
        model="gpt-4o", 
        input=[
            {"role": "user", "content": prompt}
        ],
        temperature=0.2,
    )
    return response.output_text.strip()
