export const person = {
  name: 'Мария Молодцова',
  role: 'Продуктовый дизайнер',
  email: 'marykors.designer@gmail.com',
  telegram: 'marykorshun',
};

export const telegramUrl = `https://t.me/${person.telegram}`;

export const facts = [
  { label: 'Город', value: 'Москва' },
  { label: 'Опыт', value: 'От 3 лет' },
  { label: 'Ключевые навыки', value: 'UX/UI-дизайн, продуктовый дизайн' },
  { label: 'Формат', value: 'Удалённо или гибрид' },
];

export const nav = [
  { href: '/work', label: 'Работы' },
  { href: '/about', label: 'Обо мне' },
  { href: '/resume', label: 'Резюме' },
  { href: '/contacts', label: 'Контакты' },
];

/** Ссылка с учётом подпапки GitHub Pages. */
export const url = (path = '/') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
