# Используем Node.js для сборки приложения
FROM node:20 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock) для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект в контейнер
COPY . .

# Создаем production-сборку React-приложения
RUN npm run build

# Используем минималистичный сервер для раздачи статических файлов
FROM nginx:stable-alpine

# Копируем сборку в папку Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Копируем кастомный конфигурационный файл Nginx (опционально)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
