from pydantic import BaseModel, Field


class CompanyCreate(BaseModel):
    name: str = Field(..., min_length=2)
    description: str
    customers: str
    challenge: str
    memory: str


class CompanyResponse(BaseModel):
    id: str
    owner_id: str
    name: str
    description: str
    customers: str
    challenge: str
    memory: str