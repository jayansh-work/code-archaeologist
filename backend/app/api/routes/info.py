from fastapi import APIRouter

from app.core.config import APP_NAME, APP_VERSION

router = APIRouter(tags=["service"])


@router.get("/info")
def service_info() -> dict[str, str]:
    """Return the current API version and Milestone 1 service scope."""
    return {
        "service": APP_NAME,
        "version": APP_VERSION,
        "stage": "milestone-1-foundation",
    }
