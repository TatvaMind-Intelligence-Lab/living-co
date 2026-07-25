from fastapi import APIRouter, Depends, HTTPException

from app.auth.auth import get_current_user
from app.schemas.company import CompanyCreate
from app.services.company_service import company_service

router = APIRouter(
    prefix="/company",
    tags=["Company"],
)


@router.post("")
async def create_company(
    payload: CompanyCreate,
    current_user=Depends(get_current_user),
):
    """
    Create a company and its profile for the authenticated user.
    """

    owner_id = current_user["id"]

    company = company_service.create_company(
        owner_id=owner_id,
        payload=payload,
    )

    return company


@router.get("")
async def get_company(
    current_user=Depends(get_current_user),
):
    """
    Return the authenticated user's company.
    """

    company = company_service.get_company(
        owner_id=current_user["id"]
    )

    if company is None:
        raise HTTPException(
            status_code=404,
            detail="Company not found",
        )

    return company