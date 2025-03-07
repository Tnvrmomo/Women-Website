
#!/bin/bash

# Build for production
echo "Building for production..."
npm run build

# Output deployment instructions
echo "
==============================================
Deployment Instructions
==============================================

Your app has been built and is ready for deployment!
The built files are located in the 'dist' directory.

To deploy on various platforms:

1. Netlify:
   - Connect your repository or drag and drop the 'dist' folder
   - Set the publish directory to 'dist'
   - Set the build command to 'npm run build'

2. Vercel:
   - Import your repository
   - Vercel will automatically detect Vite and configure accordingly

3. Traditional web hosting:
   - Upload all files from the 'dist' directory to your server
   - Configure your server to handle SPA routing (see below)

For a traditional web server, create a .htaccess file (Apache):

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

For Nginx, add this to your server block:

location / {
  try_files $uri $uri/ /index.html;
}
"
