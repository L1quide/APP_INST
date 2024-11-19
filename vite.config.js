import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'dashes',
      generateScopedName: '[folder][local][hash:base64:5]',
    },
  },
});
