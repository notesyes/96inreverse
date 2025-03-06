# 96 in Reverse Podcast Website

This is the official website for the "96 in Reverse" podcast. The website features a modern, futuristic design with sections for podcast episodes, host information, about the show, and social media links.

## Features

- Responsive design that works on all devices
- Embedded RSS.com podcast player
- Episode listings with descriptions
- Host profiles section
- About the show section
- Social media links
- Modern, futuristic design with custom color scheme

## File Structure

```
96inreverse/
├── index.html          # Main homepage
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── images/
│   ├── logo.png        # Podcast logo
│   └── hosts/          # Host photos directory
│       ├── host1.jpg   # Placeholder for Host 1
│       ├── host2.jpg   # Placeholder for Host 2
│       ├── host3.jpg   # Placeholder for Host 3
│       └── host4.jpg   # Placeholder for Host 4
├── README.md           # This documentation file
```

## Updating Host Information

### Updating Host Photos

1. Prepare square photos for each host (recommended size: at least 300x300 pixels)
2. Replace the placeholder images in the `images/hosts/` directory:
   - `host1.jpg` - First host
   - `host2.jpg` - Second host
   - `host3.jpg` - Third host
   - `host4.jpg` - Fourth host
3. Make sure to keep the same filenames to maintain compatibility with the website

### Updating Host Bios

1. Open `index.html` in a text editor
2. Locate the "Meet the Hosts" section (around line 100)
3. For each host profile, update:
   - The host name (between `<h3>` and `</h3>` tags)
   - The host bio (between `<p>` and `</p>` tags)
4. Save the file

Example:
```html
<!-- HOST 1 -->
<div class="host-profile">
    <div class="host-image">
        <img src="images/hosts/host1.jpg" alt="Peter Smith">
    </div>
    <h3>Peter Smith</h3>
    <p>Peter is the founder and lead host of 96 in Reverse. With his background in journalism and passion for storytelling, he brings insightful perspectives to every episode.</p>
</div>
```

## Adding New Episodes

To add a new episode:

1. Open `index.html` in a text editor
2. Locate the "Latest Episodes" section
3. Copy an existing episode card and update:
   - Episode number
   - Episode title
   - Episode description
4. Place the new episode at the top of the list for the most recent episode
5. Save the file

## Deployment Instructions

### GitHub Deployment

1. Make sure you have Git installed on your computer
2. Open a terminal/command prompt
3. Navigate to the website directory
4. Initialize a Git repository (if not already done):
   ```
   git init
   ```
5. Add all files to the repository:
   ```
   git add .
   ```
6. Commit the changes:
   ```
   git commit -m "Initial website commit"
   ```
7. Add the remote repository:
   ```
   git remote add origin https://github.com/notesyes/96inreverse.git
   ```
8. Push to GitHub:
   ```
   git push -u origin main
   ```

### Coolify Deployment

Once the website is pushed to GitHub, Coolify will automatically pull and deploy it based on your Coolify configuration. Make sure your Coolify is set up to watch the GitHub repository.

If you need to manually trigger a deployment in Coolify:

1. Log in to your Coolify dashboard
2. Navigate to your 96 in Reverse project
3. Click "Deploy" or "Redeploy" button

## Customization

### Changing Colors

The website uses a custom color scheme defined in `css/styles.css`. The main colors are:

- `#252a34` - Dark blue-gray (primary background)
- `#e2e8f2` - Light blue-gray
- `#eef1f7` - Very light blue-gray
- `#f5793b` - Vibrant orange (accent color)

To change these colors, edit the CSS variables in the `:root` section of `css/styles.css`.

### Adding Social Media Links

To add more social media links:

1. Open `index.html` in a text editor
2. Locate the "Social Media" section
3. Add a new link following the format of the existing Instagram link
4. Use Font Awesome icons for the social media platform
5. Save the file

Example for adding a Twitter link:
```html
<a href="https://twitter.com/96inreversepod" target="_blank" rel="noopener noreferrer" class="social-link">
    <i class="fab fa-twitter"></i>
    <span>Twitter</span>
</a>
```

## Support

For any questions or issues with the website, please contact the website administrator.
