import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Yeh import add karo

export default defineConfig({
  plugins: [react(), tailwindcss()], // Yahan tailwindcss() add karo
})