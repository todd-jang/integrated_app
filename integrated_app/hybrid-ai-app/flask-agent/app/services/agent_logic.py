from langchain.llms import OpenAI

def run_agent(user_input):
    llm = OpenAI(temperature=0.5)
    response = llm.invoke(user_input)
    return response
