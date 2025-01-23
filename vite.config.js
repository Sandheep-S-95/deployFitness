import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:4000'  //USE WHILE RUNNING WITHOUT DOCKER
      //'/api': 'http://backend:4000' // Update this to refer to the backend container by its service name
    },
    host: '0.0.0.0', // This allows external access to the frontend
    port: 5173
},
})
