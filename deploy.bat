@echo off
echo 96 in Reverse - GitHub Deployment Script
echo ========================================
echo.

REM Check if Git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Error: Git is not installed or not in your PATH.
    echo Please install Git from https://git-scm.com/downloads
    exit /b 1
)

echo Initializing Git repository...
git init

echo.
echo Adding files to repository...
git add .

echo.
echo Committing files...
git commit -m "Initial commit of 96 in Reverse podcast website"

echo.
echo Setting up remote repository...
git remote add origin https://github.com/notesyes/96inreverse.git

echo.
echo Pushing to GitHub...
git push -u origin main

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Note: If you received an error, you might need to:
    echo 1. Create a personal access token on GitHub
    echo 2. Use the token as your password when prompted
    echo 3. Make sure the repository exists at https://github.com/notesyes/96inreverse
    echo.
    echo You can also try running these commands manually:
    echo git push -u origin master
    echo.
    echo If you're still having issues, please refer to GitHub documentation.
)

echo.
echo Deployment process completed!
echo Your website should now be available on GitHub.
echo Coolify should automatically detect the changes and deploy the website.
echo.
echo Press any key to exit...
pause >nul
