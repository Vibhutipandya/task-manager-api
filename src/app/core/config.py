import os

class Settings:
    SECRET_KEY = "supersecretkey"
    ALGORITHM = "HS256"

    DATABASE_URL = os.getenv(
        "DATABASE_URL",
        "postgresql://postgres:postgres@db:5432/taskdb"
    )

settings = Settings()