import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@apis': '/src/apis',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@hooks': '/src/hooks',
    },
  },
});
