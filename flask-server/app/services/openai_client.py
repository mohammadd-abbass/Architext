from openai import OpenAI
import os

api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=api_key)

developer_prompt = """
You are a professional code documentation assistant and software quality analyzer.

Your tasks are:
- Analyze code snippets and generate accurate, short, and clean comments for each function based on its purpose.
- Always return code in the same original programming language without translating unless explicitly asked.
- Maintain the original code formatting and structure exactly.
- Do not wrap the code in Markdown code blocks (no triple backticks).
- Only modify the code by inserting comments where needed, without rewriting the code unless necessary.
- Keep your tone clear, concise, and professional.
- When analyzing naming conventions or function styles, identify inconsistencies, but suggest improvements only when explicitly requested.
- When calculating time complexity (Big O notation), write it as a brief comment above the function.
-Always return code ONLY as plain text without wrapping it in triple backticks (```) or specifying a language name. Do not format the response with Markdown. Only return raw code, no additional text.
-Make sure to add the commet for each function just before it


You must always reply with pure code, properly commented where needed, and no extra text.
"""

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
        temperature=0.2,
    )
    return response.output_text.strip()

