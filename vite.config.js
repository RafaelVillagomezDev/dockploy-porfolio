import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// 🔑 Importar el plugin de compresión de imágenes
import imagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/porfolio/",

  plugins: [
    react(),

    // 🔑 1. COMPRESIÓN DE IMÁGENES
    imagemin({
      // Puedes configurar qué tipos de compresión usar
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
      // Habilita la compresión durante el build
      verbose: true,
    }),
  ],

  resolve: {
    alias: [
      { find: '@public', replacement: path.resolve(__dirname, './public') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
    ],
  },

  // 🔑 2. OPTIMIZACIÓN DEL BUILD (Code Splitting y CSS)
  build: {
    // Genera sourcemaps para facilitar la depuración de producción
    sourcemap: false,

    // Configuración para el Code Splitting
    rollupOptions: {
      output: {
        // Separa las librerías grandes (como React, React Router) en un chunk separado.
        // Esto ayuda al caching del navegador.
        manualChunks(id) {
          // 1. Chunk para React Core
          if (id.includes('node_modules') && id.includes('react')) {
            // Agrupa react, react-dom, y sus paquetes relacionados
            return 'react-core';
          }

          // 2. Chunk para librerías grandes (Ej. styled-components)
          // Busca el nombre de tu librería en la ruta.
          if (id.includes('node_modules/styled-components')) {
            return 'styled-vendor';
          }

          // 3. Chunk genérico (resto de las dependencias)
          if (id.includes('node_modules')) {
            return 'vendor-common';
          }
        },
      },
    },

    // 🔑 3. MINIFICACIÓN Y CSS
    // Vite usa Terser por defecto, que comprime automáticamente JS.
    // CSS: Vite comprime CSS automáticamente usando esbuild/PostCSS.
    cssMinify: 'esbuild',
  },

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