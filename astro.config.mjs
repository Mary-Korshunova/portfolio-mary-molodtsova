import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Сайт живёт на GitHub Pages в подпапке репозитория.
// При подключении своего домена: site → домен, base → '/'.
export default defineConfig({
  site: 'https://mary-korshunova.github.io',
  base: '/portfolio-mary-molodtsova',
  trailingSlash: 'ignore',
  // Панель разработчика Astro внизу экрана в режиме npm run dev — не нужна.
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
