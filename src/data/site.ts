export const person = {
  name: 'Мария Молодцова',
  role: 'Продуктовый дизайнер',
  email: 'marykors.designer@gmail.com',
  telegram: 'marykorshun',
  behance: 'https://www.behance.net/marykorshunova',
};

export const telegramUrl = `https://t.me/${person.telegram}`;

export const facts = [
  { label: 'Город', value: 'Москва' },
  { label: 'Ищу', value: 'Команду, которая любит свой продукт' },
  { label: 'Языки', value: 'Русский, английский для путешествий' },
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
