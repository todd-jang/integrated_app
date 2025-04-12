import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "postgresql://user:pass@localhost:5432/mydb")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
