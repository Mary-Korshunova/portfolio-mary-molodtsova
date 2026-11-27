export const person = {
  name: 'Мария Молодцова',
  role: 'Продуктовый дизайнер',
  email: 'marykors.designer@gmail.com',
  telegram: 'marykorshun',
};

export const telegramUrl = `https://t.me/${person.telegram}`;

export const linkedinUrl = 'https://www.linkedin.com/in/мария-коршунова-8704a8365';

export const experienceLabel = '3+ года';

export const facts = [
  { label: 'Город', value: 'Москва' },
  { label: 'Опыт', value: experienceLabel },
  { label: 'Ключевые навыки', value: 'Продуктовый дизайн, UX/UI' },
  { label: 'Формат', value: 'Удалённо или гибрид' },
];

export const nav = [
  { href: '/work', label: 'Все работы' },
  { href: '/about', label: 'Обо мне' },
  { href: '/contacts', label: 'Контакты' },
  { href: '/resume', label: 'Резюме' },
];

/** Ссылка с учётом подпапки GitHub Pages. */
export const url = (path = '/') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
