import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
const PORT = process.env.PORT || 3000
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: './src/main.tsx',
    },
  },
  server:{
    proxy:{
      '/api':{
        target: `http://localhost:${PORT}`,
        changeOrigin:true,
      },
      '/user':{
        target: `http://localhost:${PORT}`,
        changeOrigin:true,
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'./src'),
    },
  },
});
