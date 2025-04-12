from flask import Flask, request, jsonify
from .agent_logic import run_agent

app = Flask(__name__)

@app.route("/api/agent", methods=["POST"])
def agent_endpoint():
    data = request.get_json()
    user_input = data.get("input", "")
    result = run_agent(user_input)
    return jsonify({"result": result})
