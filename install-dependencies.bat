@echo off
REM Install dependencies for Solidify project
REM This script installs all npm dependencies needed for the project

echo Installing npm dependencies...
npm install

if %errorlevel% equ 0 (
    echo.
    echo ✓ Dependencies installed successfully!
    echo.
    echo To start the development server, run: npm run dev
    echo To build the project, run: npm run build
) else (
    echo.
    echo ✗ Installation failed. Please check the error messages above.
    exit /b 1
)

pause
