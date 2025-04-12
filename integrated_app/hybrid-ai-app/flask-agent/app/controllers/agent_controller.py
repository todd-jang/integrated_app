from flask import Blueprint, request, jsonify
from ..services.agent_logic import run_agent
from ..models.agent_log import db, AgentLog

agent_bp = Blueprint("agent_bp", __name__)

@agent_bp.route("/api/agent", methods=["POST"])
def handle_agent():
    data = request.get_json()
    input_text = data.get("input")
    result = run_agent(input_text)

    log = AgentLog(input=input_text, output=result)
    db.session.add(log)
    db.session.commit()

    return jsonify({"response": result})
