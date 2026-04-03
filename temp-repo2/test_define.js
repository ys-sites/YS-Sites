import { build } from 'vite';
build({
  define: {
    'process.env.GEMINI_API_KEY': undefined
  }
}).catch(console.error);
