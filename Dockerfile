# syntax=docker/dockerfile:1

ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

FROM node:${NODE_VERSION}-alpine AS builder
WORKDIR /app
RUN apk add --no-cache libc6-compat
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:${NODE_VERSION}-alpine AS runner
WORKDIR /app
RUN apk add --no-cache libc6-compat
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
# Copy standalone production build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]

