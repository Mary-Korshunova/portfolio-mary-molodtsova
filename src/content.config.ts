import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Каждый кейс — markdown-файл в src/content/cases/. Имя файла = адрес страницы.
const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    lead: z.string(),
    excerpt: z.string(),
    org: z.string(),
    year: z.number(),
    yearEnd: z.number().optional(),
    comingSoon: z.boolean().default(false),
    platforms: z.array(z.string()),
    format: z.enum(['Сервис', 'Фича', 'Лендинг', 'Мессенджер', 'Паттерн', 'Редполитика', 'ИИ-прототип']),
    home: z.boolean().default(false),
    order: z.number(),
    // Подпись к заглушке обложки — что должно быть на картинке.
    cover: z.string(),
    // Путь к реальной обложке в public/covers/, когда она появится.
    coverImage: z.string().optional(),
  }),
});

export const collections = { cases };
