from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.company import router as company_router
from app.routes.test import router as test_router
from app.routes.auth import router as auth_router

app = FastAPI(
    title="The Living Company API",
    description="AI Co-Founder Backend",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(test_router)
app.include_router(company_router)

@app.get("/")
async def root():
    return {"message": "🚀 The Living Company API"}

@app.get("/health")
async def health():
    return {"status": "healthy"}

@app.get("/ping")
async def ping():
    return {
        "message": "auth router works"
    }