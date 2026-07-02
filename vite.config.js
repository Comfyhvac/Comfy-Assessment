import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/Comfy-Assessment/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'Comfy Home Comfort Assessment',
        short_name: 'Comfy Assessment',
        description: 'Comfy Heating & Air Conditioning — Home Comfort Assessment Tool',
        theme_color: '#1B3D6E',
        background_color: '#1B3D6E',
        display: 'standalone',
        orientation: 'landscape',
        start_url: '/Comfy-Assessment/',
        scope: '/Comfy-Assessment/',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,svg,ico}']
      }
    })
  ]
})
