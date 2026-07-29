# 1. ETAPA BASE: Node 22 + Herramientas de compilación Linux
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

# 2. ETAPA DE BUILD: Instalar y Compilar Vite
FROM base AS build
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install

COPY . .
RUN pnpm run build

# 3. ETAPA DE PRODUCCIÓN: Nginx para servir la Web
FROM nginx:alpine AS production

# Copia los archivos estáticos generados por Vite a Nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]