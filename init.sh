#!/usr/bin/env bash
# Запуск dev-сервера: http://localhost:4321/portfolio-mary-molodtsova/
set -e
cd "$(dirname "$0")"
[ -d node_modules ] || npm install
npm run dev
