
# EZ SHOP - E-commerce Platform

A modern e-commerce platform with user and admin interfaces, product management, and checkout functionality.

## Features

- User authentication (login/signup)
- Product browsing and searching
- Shopping cart management
- Checkout with shipping information
- Admin dashboard for product and payment method management

## Tech Stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- React Router
- TanStack Query

## Development

1. Clone the repository
```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies
```sh
npm install
```

3. Start the development server
```sh
npm run dev
```

## Building for Production

```sh
npm run build
```

The build output will be in the `dist` directory.

## Deployment Options

### Option 1: Netlify

1. Connect your GitHub repository to Netlify
2. Set the build command to `npm run build`
3. Set the publish directory to `dist`

Netlify will automatically detect the SPA settings from the `netlify.toml` file.

### Option 2: Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration

### Option 3: Traditional Hosting

1. Build the project with `npm run build`
2. Upload the contents of the `dist` directory to your web server
3. Configure your server to redirect all requests to `index.html` for client-side routing

#### Apache (.htaccess)
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx
```
location / {
  try_files $uri $uri/ /index.html;
}
```

## Demo Accounts

- Admin: admin@example.com / admin123
- User: user@example.com / user123
