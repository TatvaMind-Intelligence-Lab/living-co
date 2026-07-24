from fastapi import APIRouter

from app.schemas.company import CompanyCreate
from app.services.company_service import CompanyService
from fastapi import APIRouter, Depends, HTTPException

from app.auth.auth import get_current_user
from app.services.company_service import company_service

router = APIRouter(
    prefix="/company",
    tags=["Company"]
)


@router.post("/")
async def create_company(payload: CompanyCreate):

    owner_id = "dev-user"

    company = await CompanyService.create_company(
        owner_id,
        payload
    )

    return company


@router.get("")
async def get_company(
    current_user=Depends(get_current_user),
):
    company = company_service.get_company(
        current_user["id"]
    )

    if company is None:
        raise HTTPException(
            status_code=404,
            detail="Company not found"
        )

    return company