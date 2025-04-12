from langchain.llms import Ollama
llm = Ollama(model="llama3")

async def get_response(question: str) -> str:
    return llm(question)
