from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class AgentLog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    input = db.Column(db.String(512))
    output = db.Column(db.Text)
