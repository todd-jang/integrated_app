from flask import Flask, request, jsonify
import asyncio
from agents.agent1 import get_response as agent1_response
from agents.agent2 import get_response as agent2_response

app = Flask(__name__)

@app.route("/ask", methods=["POST"])
async def ask():
    data = request.get_json()
    question = data.get("question")

    # 비동기 에이전트 병렬 호출
    agent_tasks = [
        agent1_response(question),
        agent2_response(question)
    ]
    results = await asyncio.gather(*agent_tasks)

    merged = {
        "agent_logs": [
            {"name": "agent1", "response": results[0]},
            {"name": "agent2", "response": results[1]}
        ],
        "final_response": merge_results(results)
    }
    return jsonify(merged)

def merge_results(responses):
    return " / ".join(responses)
