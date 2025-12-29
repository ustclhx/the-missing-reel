import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    // GitHub Pages 部署时需要设置 base 路径
    // 本地开发时为 '/'，部署时为 '/仓库名/'
    base: process.env.NODE_ENV === 'production' ? '/the-missing-reel/' : '/',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
