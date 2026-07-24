from fastapi import APIRouter

from app.database.supabase import supabase

router = APIRouter(
    prefix="/test",
    tags=["Test"]
)

@router.get("/")
async def test_db():

    response = (
        supabase
        .table("companies")
        .select("*")
        .limit(1)
        .execute()
    )

    return {
        "status": "connected",
        "rows": response.data
    }