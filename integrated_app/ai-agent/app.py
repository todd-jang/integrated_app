from flask import Flask, request, jsonify
import gradio as gr
from langchain.agents import initialize_agent, Tool
from langchain.llms import OpenAI
import requests

def post_to_spring(data):
    res = requests.post("http://backend:8080/api/strategy", json=data)
    return res.text

tools = [Tool(name="PostStrategy", func=lambda x: post_to_spring({"name": x, "parameters": {}}), description="Send strategy")]
agent = initialize_agent(tools, OpenAI(temperature=0), agent="zero-shot-react-description")

def agent_ui(input_text):
    return agent.run(input_text)

app = Flask(__name__)

@app.route("/run", methods=["POST"])
def run():
    text = request.json.get("text")
    return jsonify({"result": agent.run(text)})

gr.Interface(fn=agent_ui, inputs="text", outputs="text").launch(server_name="0.0.0.0")

# gradio없이
# ai_agent/app.py
"""from flask import Flask, request, jsonify
from ai_agent.agent_logic import ask_agent

app = Flask(__name__)

@app.route("/ask", methods=["POST"])
def handle_question():
    data = request.json
    question = data.get("question", "")
    if not question:
        return jsonify({"error": "No question provided"}), 400
    try:
        answer = ask_agent(question)
        return jsonify({"answer": answer})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)"""
