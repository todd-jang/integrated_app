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