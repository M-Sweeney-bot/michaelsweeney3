#!/bin/bash
# Setup script for git repository

cd "$(dirname "$0")"

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Personal website"

echo ""
echo "✅ Git repository initialized!"
echo ""
echo "Next steps:"
echo "1. Create a new repository on GitHub/GitLab/etc (don't initialize with README)"
echo "2. Then run these commands:"
echo ""
echo "   git remote add origin <your-repo-url>"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
