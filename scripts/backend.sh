#!/bin/bash

echo "========================================"
echo "Setting up Living Company Backend"
echo "========================================"

# Create Backend
mkdir backend
cd backend

echo "Creating Python Virtual Environment..."
python -m venv venv

echo "Activating Virtual Environment..."

# Windows
if [[ "$OS" == "Windows_NT" ]]; then
    source venv/Scripts/activate
else
    source venv/bin/activate
fi

echo "Installing Dependencies..."

pip install --upgrade pip

pip install \
fastapi \
uvicorn \
sqlalchemy \
psycopg2-binary \
python-dotenv \
supabase \
google-genai \
python-multipart \
pydantic \
alembic \
pgvector \
httpx \
passlib[bcrypt] \
python-jose \
email-validator

echo "Creating Folder Structure..."

mkdir app

cd app

mkdir api
mkdir auth
mkdir core
mkdir database
mkdir middleware
mkdir models
mkdir routes
mkdir schemas
mkdir services
mkdir utils

touch __init__.py

touch main.py

touch api/__init__.py

touch auth/__init__.py
touch auth/auth.py

touch core/__init__.py
touch core/config.py

touch database/__init__.py
touch database/db.py

touch middleware/__init__.py

touch models/__init__.py
touch models/company.py
touch models/user.py
touch models/document.py
touch models/conversation.py
touch models/message.py

touch routes/__init__.py
touch routes/company.py
touch routes/document.py
touch routes/chat.py
touch routes/auth.py

touch schemas/__init__.py
touch schemas/company.py
touch schemas/document.py
touch schemas/chat.py
touch schemas/user.py

touch services/__init__.py
touch services/gemini.py
touch services/company_service.py
touch services/document_service.py
touch services/chat_service.py

touch utils/__init__.py
touch utils/helpers.py

cd ..

touch .env
touch requirements.txt

pip freeze > requirements.txt

echo "Backend Setup Complete!"