import os

def load_prompt(filename: str) -> str:
    # Get path to app/prompts directory
    current_dir = os.path.dirname(os.path.abspath(__file__))  # utils directory
    app_dir = os.path.dirname(current_dir)  # Go up 1 level to app directory
    prompts_dir = os.path.join(app_dir, "prompts")
    
    # Debugging output
    print(f"Current utils directory: {current_dir}")
    print(f"Calculated app directory: {app_dir}")
    print(f"Final prompts path: {prompts_dir}/{filename}")
    
    path = os.path.join(prompts_dir, filename)
    
    with open(path, "r", encoding="utf-8") as file:
        return file.read()