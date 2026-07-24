from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import jwt

security = HTTPBearer()


async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
):
    token = credentials.credentials

    try:
        payload = jwt.decode(
            token,
            options={"verify_signature": False},
        )

        return {
            "id": payload["sub"],
            "email": payload["email"],
            "role": payload["role"],
        }

    except Exception:
        raise HTTPException(
            status_code=401,
            detail="Invalid authentication token.",
        )