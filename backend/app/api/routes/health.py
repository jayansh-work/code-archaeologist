from fastapi import APIRouter

from app.core.config import APP_NAME, APP_VERSION

router = APIRouter(tags=["health"])


@router.get("/health")
def health_check() -> dict[str, str]:
    return {
        "status": "healthy",
        "service": APP_NAME,
        "version": APP_VERSION,
    }
