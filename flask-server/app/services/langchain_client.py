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
            ChatPromptTemplate([("system", self.system_prompt), ("human", task_prompt)])
            | self.llm
        )

    def get_structured_chain(self, task_prompt: str, output_model: BaseModel):
        """For APIs needing structured output"""
        parser = JsonOutputParser(pydantic_object=output_model)
        prompt_template = ChatPromptTemplate.from_messages([
            ("system", self.system_prompt),
            ("human", task_prompt),
            ("human", "Respond ONLY with valid JSON matching this schema:\n{format_instructions}")
        ])
        return (
            prompt_template.partial(format_instructions=parser.get_format_instructions())
            | self.llm
            | parser
        )

    def get_text_chain(self, task_prompt: str):
        """For simple text output APIs"""
        return self._build_base_chain(task_prompt) | StrOutputParser()

    def get_assistant_chain(self, task_prompt: str, session_id: str):
        """For stateful assistant APIs"""
        if session_id not in self.memory_store:
            self.memory_store[session_id] = ConversationBufferMemory()

        return (
            RunnablePassthrough.assign(
                history=lambda _: self.memory_store[session_id].load_memory_variables(
                    {}
                )
            )
            | self._build_base_chain(task_prompt)
            | StrOutputParser()
        )


langchain_client = LangChainClient()
