from fastapi import FastAPI

from app.api.router import api_router
from app.core.config import APP_NAME, APP_VERSION

app = FastAPI(
    title="Code Archaeologist API",
    description="Backend for the Code Archaeologist software forensics platform.",
    version=APP_VERSION,
)

app.include_router(api_router)


@app.get("/")
def root() -> dict[str, str]:
    return {
        "service": APP_NAME,
        "message": "Code Archaeologist API is running.",
    }
