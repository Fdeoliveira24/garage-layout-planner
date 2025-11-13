#!/bin/bash

echo "🚀 GitHub Repository Setup Script"
echo "=================================="
echo ""
echo "This repository is ready to push to GitHub!"
echo ""
echo "📋 Step 1: Create the repository on GitHub"
echo "   1. Go to: https://github.com/new"
echo "   2. Repository name: Garage-Layout-Planner"
echo "   3. Description: Professional browser-based garage layout planning tool"
echo "   4. Choose: Public (recommended) or Private"
echo "   5. DO NOT check 'Add a README file'"
echo "   6. Click 'Create repository'"
echo ""
echo "📋 Step 2: Push to GitHub"
echo ""
read -p "Press ENTER once you've created the repository on GitHub..."
echo ""
echo "Pushing to GitHub..."
echo ""

cd "/Users/franciscooliveira/Library/CloudStorage/Dropbox/360Virtual Tour Solutions/Projects/Garage Layout/Replit"

# Remove old remote if exists
git remote remove github 2>/dev/null

# Add GitHub remote
git remote add github https://github.com/Fdeoliveira24/Garage-Layout-Planner.git

# Push to GitHub
git push -u github main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS! Repository uploaded to GitHub!"
    echo ""
    echo "🌐 View your repository at:"
    echo "   https://github.com/Fdeoliveira24/Garage-Layout-Planner"
    echo ""
    echo "📝 Next steps:"
    echo "   - Add topics/tags to your repository"
    echo "   - Enable GitHub Pages if you want to host it"
    echo "   - Share the link!"
else
    echo ""
    echo "❌ Push failed. Possible reasons:"
    echo "   1. Repository not created yet on GitHub"
    echo "   2. Authentication required"
    echo ""
    echo "💡 Try running: git push -u github main"
    echo "   You may be prompted for your GitHub credentials"
fi
