# 1. ETAPA BASE: Node 22 + Herramientas de compilación
FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Instalar herramientas para que imagemin compile sin errores
RUN apk add --no-cache \
    autoconf \
    automake \
    libtool \
    nasm \
    make \
    g++ \
    zlib-dev

RUN corepack enable

# 2. ETAPA DE BUILD: Instalar dependencias y compilar
FROM base AS build
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
# Añade el flag para ignorar la restricción de scripts en entornos CI/Docker
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --config.only-built-dependencies=false

COPY . .
RUN pnpm run build

# 3. ETAPA FINAL: Servidor Nginx llamado "dokploy"
FROM nginx:alpine AS dokploy

# Copiar el build compilado por Vite
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]