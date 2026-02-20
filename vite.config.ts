import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        philosophy: path.resolve(__dirname, 'philosophy.html'),
        journey: path.resolve(__dirname, 'journey.html'),
        goal: path.resolve(__dirname, 'goal.html'),
        hobbies: path.resolve(__dirname, 'hobbies.html'),
        gallery: path.resolve(__dirname, 'gallery.html'),
        join: path.resolve(__dirname, 'join.html'),
      },
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: false,
  },
});
