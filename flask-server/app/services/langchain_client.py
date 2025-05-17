from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser, JsonOutputParser
from langchain_core.runnables import RunnablePassthrough
from langchain.memory import ConversationBufferMemory
from openai import BaseModel
from utils.prompts_loader import load_prompt 

class LangChainClient:
    def __init__(self):
        self.system_prompt = load_prompt("developer.md")
        self.llm = ChatOpenAI(model="gpt-4o-2024-08-06")
        self.memory_store = {} 

    def _build_base_chain(self, task_prompt: str):
        """Core chain builder with system + task prompts"""
        return (
            ChatPromptTemplate([
                ("system", self.system_prompt),
                ("human", task_prompt)
            ])
            | self.llm
        )

    def get_structured_chain(self, task_prompt: str, output_model: BaseModel):
        """For APIs needing structured output"""
        parser = JsonOutputParser(pydantic_object=output_model)
        return (
            self._build_base_chain(task_prompt)
            | parser
        )

    def get_text_chain(self, task_prompt: str):
        """For simple text output APIs"""
        return (
            self._build_base_chain(task_prompt)
            | StrOutputParser()
        )

