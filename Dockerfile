# Этап сборки
FROM node:20-alpine AS builder
WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./
# Устанавливаем ВСЕ зависимости (включая devDependencies) для сборки
RUN npm ci

# Копируем исходный код и собираем приложение
COPY . .
RUN npm run build

# Финальный этап - nginx для статики
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]