#!/usr/bin/env bash
# Запуск dev-сервера. Когда стек выбран — обновить этот скрипт под него.
set -e
cd "$(dirname "$0")"

if [ -f package.json ]; then
  [ -d node_modules ] || npm install
  npm run dev
else
  # Заглушка до выбора стека: статический сервер на src/
  echo "Сайт: http://localhost:8000"
  python -m http.server 8000 --directory src
fi
