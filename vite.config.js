import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // 1. BASE URL para subdirectorio de producción
  base: "/",

  plugins: [
    react(),
  ],

  resolve: {
    // 2. ALIAS DE RUTA
    alias: [
      { find: '@public', replacement: path.resolve(__dirname, './public') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
    ],
  },

  // 3. OPTIMIZACIÓN DE PRODUCCIÓN (BUILD)
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

  // 4. CONFIGURACIÓN DEL SERVIDOR
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