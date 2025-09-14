<!-- ---
title: My Second Post
date: 2025-02-01
---

This is the body of my first blog post.   -->

---
title: Deploying a React + Vite Site to Netlify
date: 2025-09-10
---

One of the best feelings as a developer is hitting **deploy** and seeing your project live on the internet. Recently, I deployed this portfolio site — built with React and Vite — to **Netlify**. In this post, I’ll walk through the key steps and a few gotchas I ran into.

### Step 1: Push to GitHub
Netlify works best when your code lives in a Git repository. I made sure to include:
- `src/` (React components)  
- `public/` (images, resume, favicon, etc.)  
- `package.json`, `vite.config.js`  

Important: never commit the `dist/` folder. Netlify runs `npm run build` for you.

### Step 2: Connect Netlify
- Logged into Netlify → **Add new site → Import from GitHub**  
- Selected my repo  
- Netlify auto-detected the build settings:  
  - **Build command:** `npm run build`  
  - **Publish directory:** `dist`

### Step 3: Handle Routing
Since this site uses **React Router**, refreshing on `/about` or `/blog/post` broke at first. The fix was adding a `_redirects` file in the `public/` folder:

