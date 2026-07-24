from fastapi import APIRouter, Depends

from app.auth.auth import get_current_user

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.get("/me")
async def me(
    current_user=Depends(get_current_user),
):
    return current_user