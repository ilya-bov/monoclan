FROM node:20-alpine AS builder
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Build arguments for environment variables
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY

# Set environment variables for build
ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY

# Copy package files
COPY package.json pnpm-lock.yaml ./
# Increase Node.js memory limit to avoid OOM (exit code 137)
ENV NODE_OPTIONS="--max-old-space-size=2048"
RUN pnpm install --frozen-lockfile

# Copy source code and build
COPY . .
RUN pnpm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built application
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js

USER node
# Use node directly to run next start (use the actual binary path)
CMD ["node", "node_modules/next/dist/bin/next", "start"]