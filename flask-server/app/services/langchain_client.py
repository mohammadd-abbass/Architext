from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser, JsonOutputParser
from langchain_core.runnables import RunnablePassthrough

llm = ChatOpenAI(model="gpt-4o-2024-08-06")
base_prompt = ChatPromptTemplate.from_template("System: {system_prompt}\nUser: {input}")

client = {
    "llm": llm,
    "base_prompt": base_prompt,
    "default_parser": StrOutputParser()
}