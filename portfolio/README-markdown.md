# Minimal Markdown Portfolio

This is an ultra-minimal tech leader portfolio that uses only Markdown and Jekyll. This approach lets GitHub Pages do all the heavy lifting of generating HTML and CSS for you.

## How It Works

1. GitHub Pages uses Jekyll (a static site generator) to convert your Markdown files into a proper website
2. Jekyll applies a theme (styling) to make it look professional
3. You only need to write Markdown content - no HTML, CSS or JavaScript required

## Files in This Portfolio

- **index.md**: The main content of your portfolio written in simple Markdown
- **_config.yml**: Configuration settings for Jekyll, including theme selection

## Deployment Instructions

### Option 1: Using the GitHub Web Interface

1. Create a new repository on GitHub named `username.github.io` (replace 'username' with your GitHub username)
2. Upload the `index.md` and `_config.yml` files to this repository using the GitHub web interface
3. Wait a few minutes for GitHub Pages to build your site
4. Visit `https://username.github.io` to see your portfolio

### Option 2: Using Git Command Line

1. Create a new repository on GitHub named `username.github.io`
2. Clone this repository to your local machine:
   ```
   git clone https://github.com/username/username.github.io.git
   cd username.github.io
   ```
3. Copy the `index.md` and `_config.yml` files into this directory
4. Commit and push your changes:
   ```
   git add .
   git commit -m "Add minimal markdown portfolio"
   git push origin main
   ```
5. Wait a few minutes and visit `https://username.github.io`

## Customization

### Change Theme

Edit the `_config.yml` file and change the `theme` property to use any of the GitHub Pages supported themes:

- `minima` (default)
- `jekyll-theme-minimal`
- `jekyll-theme-cayman`
- `jekyll-theme-slate`
- `jekyll-theme-architect`
- `jekyll-theme-leap-day`
- `jekyll-theme-merlot`
- `jekyll-theme-midnight`
- `jekyll-theme-dinky`
- `jekyll-theme-hacker`
- `jekyll-theme-time-machine`
- `jekyll-theme-tactile`

For even more theme options, you can use the `remote_theme` property to use any Jekyll theme hosted on GitHub.

### Add a Custom Domain

1. Purchase a domain name from a registrar
2. Create a file named `CNAME` in your repository with your domain name:
   ```
   yourdomain.com
   ```
3. Configure your domain's DNS settings according to [GitHub's instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Why This Approach?

- **Simplicity**: No web development knowledge required, just basic Markdown
- **Maintenance**: Easy to update by editing a single Markdown file
- **Free Hosting**: GitHub Pages hosts your site for free
- **Performance**: Extremely fast loading times with static pages
- **SEO-Friendly**: Good structure for search engines
- **Responsive**: Works on all devices without extra coding

The result is a professional portfolio with minimal effort that you can create in minutes. 