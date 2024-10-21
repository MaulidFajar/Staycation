import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      name: 'firefox',
      provider: 'playwright',
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
})