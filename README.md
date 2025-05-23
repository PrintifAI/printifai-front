# PrintifAI-front

Фронт проекта PrintifAI.

Развернут по адресу https://printifai.ru

## Требования для запуска

- node.js 18+
- yarn 4+
- запущенный бекенд https://github.com/PrintifAI/printifai-back

## Env-переменные

- NEXT_PUBLIC_BACK_HOST - адрес запущеннего бекенда

## Локальный запуск проекта

- Настроить env переменные
    - Скопировать .env.example в .env и заполнить
    - Либо заполнить env переменные любым доступным в OS способом
- Установить зависимости
    - corepack enable
    - yarn install
- Запустить проект
    - yarn dev

## Команды запуска инструментов

- yarn lint - запуск линтинга
- yarn build - сборка продакшен версии

## Сборка в Docker

Проект содержит Dockerfile для сборки проекта. Актуальный образ заливается на DockerHub с тегом vanchenkin/printifai:front-latest

Команда для запуска Docker контейнера

```
docker run -d -t -i \
--restart=always \
-e PORT=3000 \
-p 3000:3000 \
--name pritinfai-front vanchenkin/printifai:front-latest
```
