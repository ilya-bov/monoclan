# Инструкция по развертыванию на VPS

## Быстрый старт

1. **Перейти в директорию проекта:**
   ```bash
   cd ~/iishenka-landing/monoclan
   # или
   cd ~/monoclan
   ```

2. **Создать файл `.env` с переменными окружения:**
   ```bash
   nano .env
   ```
   
   Добавить:
   ```
   NEXT_PUBLIC_SUPABASE_URL=ваш_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=ваш_key
   ```

3. **Собрать и запустить:**
   ```bash
   docker compose build --no-cache
   docker compose up -d
   ```

4. **Проверить логи:**
   ```bash
   docker logs pro-monoclan-app --tail=50 -f
   ```

## Решение проблем с памятью

Если получаете ошибку `exit code 137` (нехватка памяти):

1. **Освободить память:**
   ```bash
   # Остановить другие контейнеры
   docker stop $(docker ps -q)
   
   # Очистить Docker
   docker system prune -a -f --volumes
   ```

2. **Проверить доступную память:**
   ```bash
   free -h
   ```

3. **Если памяти мало, можно уменьшить лимит в Dockerfile:**
   Изменить `--max-old-space-size=2048` на `--max-old-space-size=1024`

## Полезные команды

```bash
# Пересобрать образ
docker compose build --no-cache

# Перезапустить контейнер
docker compose restart

# Остановить
docker compose down

# Посмотреть статус
docker compose ps

# Логи в реальном времени
docker logs pro-monoclan-app -f
```

