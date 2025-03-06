# Setting Up Coolify for 96 in Reverse Website

This guide will help you set up Coolify to deploy your 96 in Reverse podcast website from GitHub.

## Prerequisites

- Access to your Coolify dashboard
- Your GitHub repository: https://github.com/notesyes/96inreverse.git

## Steps to Deploy with Coolify

1. **Log in to your Coolify dashboard**

2. **Create a new service**
   - Click on "Create new resource" or similar button
   - Select "Static Site" as the resource type

3. **Connect to your GitHub repository**
   - Select GitHub as the source
   - Choose the repository: `notesyes/96inreverse`
   - Select the branch: `master`

4. **Configure deployment settings**
   - Coolify should automatically detect the configuration from the `coolify.json` file
   - The configuration specifies:
     - Type: static
     - Publish Directory: . (root directory)
     - No build or install commands needed

5. **Deploy the website**
   - Click "Deploy" or "Save and Deploy"
   - Coolify will pull the code from GitHub and deploy it

6. **Access your website**
   - Once deployment is complete, Coolify will provide a URL to access your website
   - You can configure a custom domain in the Coolify settings if needed

## Making Updates

When you make changes to your website:

1. Commit and push changes to GitHub:
   ```
   git add .
   git commit -m "Description of changes"
   git push
   ```

2. Coolify will automatically detect the changes and redeploy your website
   - You can also manually trigger a deployment from the Coolify dashboard

## Troubleshooting

If you encounter any issues with deployment:

1. Check the deployment logs in Coolify dashboard
2. Verify that all necessary files are in the GitHub repository
3. Make sure the `coolify.json` file is properly formatted
4. Check if Coolify has the necessary permissions to access your GitHub repository

For more detailed information, refer to the Coolify documentation.
