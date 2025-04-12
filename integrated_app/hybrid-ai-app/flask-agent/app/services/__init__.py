from flask import Flask
from .config import Config
from .models.agent_log import db
from .controllers.agent_controller import agent_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    app.register_blueprint(agent_bp)

    return app
