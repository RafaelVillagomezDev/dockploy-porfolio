# 1. ETAPA BASE
FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Instalar dependencias del sistema necesarias
RUN apk add --no-cache \
    autoconf \
    automake \
    libtool \
    nasm \
    make \
    g++ \
    zlib-dev

RUN corepack enable

# 2. ETAPA DE BUILD
FROM base AS build
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

# Permite ejecutar todos los build scripts (evita ERR_PNPM_IGNORED_BUILDS)
ENV PNPM_ALLOW_BUILDS=all

# Instala las dependencias autorizando los scripts
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --unsafe-perm

COPY . .
RUN pnpm run build

# 3. ETAPA DOKPLOY
FROM nginx:alpine AS dokploy

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]