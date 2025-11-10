import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import imagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  // 1. BASE URL para subdirectorio de producción
  base: "/porfolio/",

  plugins: [
    react(),

    // 2. COMPRESIÓN DE IMÁGENES (Ejecuta npm install -D vite-plugin-imagemin)
    imagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      svgo: {
        plugins: [{
          name: 'removeViewBox',
          active: false,
        },
        {
          name: 'addAttributesToSVGElement',
          params: {
            attributes: [{
              xmlns: 'http://www.w3.org/2000/svg'
            }],
          },
        }],
      },
      verbose: true,
    }),
  ],

  resolve: {
    // 3. ALIAS DE RUTA
    alias: [
      { find: '@public', replacement: path.resolve(__dirname, './public') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
    ],
  },

  // 4. OPTIMIZACIÓN DE PRODUCCIÓN (BUILD)
  build: {
    sourcemap: false, // Desactiva sourcemaps en producción por defecto
    cssMinify: 'esbuild', // Minificación rápida de CSS
    
    rollupOptions: {
      output: {
        // Formato de nombre de archivos con hash para mejor caching
        entryFileNames: `assets/[name]-[hash].js`, 
        chunkFileNames: `assets/[name]-[hash].js`, 
        assetFileNames: `assets/[name]-[hash].[ext]`, 
        
        // CODE SPLITTING AVANZADO (Separación de Vendors)
        manualChunks(id) {
          // 4.1. React Core (Núcleo de React)
          if (id.includes('node_modules') && id.includes('react')) {
            return 'react-core';
          }

          // 4.2. Librerías Grandes (Ej. styled-components)
          if (id.includes('node_modules/styled-components')) {
            return 'styled-vendor';
          }
          
          // 4.3. Chunk genérico (resto de las dependencias pequeñas)
          if (id.includes('node_modules')) {
            return 'vendor-common';
          }
        },
      },
    },
  },

  // 5. CONFIGURACIÓN DEL SERVIDOR DE DESARROLLO
  server: {
    port: 8080,
    strictPort: true,
    host: true, // Permite acceso externo (útil para desarrollo móvil)
    origin: "http://0.0.0.0:8080",
  },

  preview: {
    port: 8080,
    strictPort: true,
  },
});