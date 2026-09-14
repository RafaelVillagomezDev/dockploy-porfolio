import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


export default defineConfig({
  
  base: "/porfolio/",

  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80, lossless: false },
    }),
  ],

  resolve: {
  
    alias: [
      { find: '@public', replacement: path.resolve(__dirname, './public') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
    ],
  },

  
  build: {
    sourcemap: false, 
    cssMinify: 'esbuild', 
    
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-[hash].js`, 
        chunkFileNames: `assets/[name]-[hash].js`, 
        assetFileNames: `assets/[name]-[hash].[ext]`, 
        
        manualChunks(id) {
          if (id.includes('node_modules') && id.includes('react')) {
            return 'react-core';
          }
          if (id.includes('node_modules/styled-components')) {
            return 'styled-vendor';
          }
          if (id.includes('node_modules')) {
            return 'vendor-common';
          }
        },
      },
    },
  },

  //  CONFIGURACIÓN DEL SERVIDOR
  server: {
    port: 8080,
    strictPort: true,
    host: true, 
    origin: "http://0.0.0.0:8080",
  },

  preview: {
    port: 8080,
    strictPort: true,
  },
});