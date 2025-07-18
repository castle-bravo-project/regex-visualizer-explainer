import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    // Important: Set the base path for GitHub Pages
    // Replace 'your-repo-name' with your actual repository name
    base: mode === 'production' ? '/regex-visualizer-explainer/' : '/',
    
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    
    // Ensure proper building for GitHub Pages
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      // Generate source maps for debugging (optional)
      sourcemap: false,
    }
  };
});
