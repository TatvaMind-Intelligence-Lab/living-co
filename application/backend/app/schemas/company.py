from typing import List

from pydantic import BaseModel, Field


# -----------------------------
# Company Table
# -----------------------------
class CompanyModel(BaseModel):
    id: str
    owner_id: str
    name: str
    description: str
    industry: str
    company_size: str

    class Config:
        from_attributes = True


# -----------------------------
# Company Profile Table
# -----------------------------
class CompanyProfileModel(BaseModel):
    company_id: str

    customers: List[str]
    acquisition_channels: List[str]

    annual_goal: str
    challenges: List[str]

    decision_style: str
    company_values: List[str]

    ai_expectations: str
    proactivity_level: int
    ai_boundaries: str

    onboarding_completed: bool

    class Config:
        from_attributes = True


# -----------------------------
# Create Company Request
# -----------------------------
class CompanyCreate(BaseModel):

    # Company Information
    name: str = Field(..., min_length=2)
    description: str = Field(..., min_length=20)

    industry: str
    company_size: str

    # Business Information
    customers: List[str]
    acquisition_channels: List[str]

    # Goals
    annual_goal: str = Field(..., min_length=20)
    challenges: List[str]

    # Company DNA
    decision_style: str
    company_values: List[str]

    # AI Preferences
    ai_expectations: str = Field(..., min_length=20)
    proactivity_level: int = Field(..., ge=1, le=10)
    ai_boundaries: str = ""


# -----------------------------
# Update Company
# -----------------------------
class CompanyUpdate(CompanyCreate):
    pass


# -----------------------------
# API Response
# -----------------------------
class CompanyResponse(BaseModel):
    company: CompanyModel
    profile: CompanyProfileModel