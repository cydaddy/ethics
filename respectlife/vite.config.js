import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ethics/', // IMPORTANT: Change this to '/ethics/' if your repository is not at the root domain.
})
