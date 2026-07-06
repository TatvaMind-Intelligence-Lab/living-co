#!/bin/bash

echo "========================================"
echo "Setting up Living Company Frontend"
echo "========================================"

npm create vite@latest frontend -- --template react

cd frontend

echo "Installing Dependencies..."

npm install

npm install \
react-router-dom \
axios \
tailwindcss \
@tailwindcss/vite \
@supabase/supabase-js \
react-hot-toast \
lucide-react \
framer-motion \
clsx

echo "Initializing Tailwind..."

mkdir -p src/assets
mkdir -p src/components
mkdir -p src/components/layout
mkdir -p src/components/ui
mkdir -p src/pages
mkdir -p src/pages/Landing
mkdir -p src/pages/Login
mkdir -p src/pages/Dashboard
mkdir -p src/pages/CompanySetup
mkdir -p src/pages/Chat
mkdir -p src/services
mkdir -p src/context
mkdir -p src/hooks
mkdir -p src/routes
mkdir -p src/utils

touch src/services/api.js
touch src/services/supabase.js
touch src/services/auth.js

touch src/context/AuthContext.jsx

touch src/routes/AppRoutes.jsx

touch src/hooks/useAuth.js

touch src/utils/constants.js

touch src/components/layout/Navbar.jsx
touch src/components/layout/Sidebar.jsx

touch src/components/ui/Button.jsx
touch src/components/ui/Card.jsx
touch src/components/ui/Input.jsx

touch src/pages/Landing/Landing.jsx
touch src/pages/Login/Login.jsx
touch src/pages/Dashboard/Dashboard.jsx
touch src/pages/CompanySetup/CompanySetup.jsx
touch src/pages/Chat/Chat.jsx

touch .env

echo "Frontend Setup Complete!"