import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist", // Ensure Vite outputs the build files to 'dist'
    rollupOptions: {
      input: "index.html", // Explicitly set the entry point
    },
  },

})
