import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';

export default defineConfig({
  // serve static assets (build/client directory) from custom express server (static-assets.js)
  base: 'http://localhost:3000/',
  plugins: [remix()],
});
