# tests/test_agent.py
from ai_agent.agent_logic import ask_agent

def test_simple_math():
    result = ask_agent("What is 2 + 2?")
    assert "4" in result
