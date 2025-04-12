# ai_agent/agent_logic.py
from langchain.agents import AgentType, initialize_agent, load_tools
from langchain.llms import Ollama

llm = Ollama(model="llama2")

tools = load_tools(["llm-math"], llm=llm)

agent = initialize_agent(tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True)

def ask_agent(query: str) -> str:
    return agent.run(query)
