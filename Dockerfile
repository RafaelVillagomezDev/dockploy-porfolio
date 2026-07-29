# 1. ETAPA BASE
FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Librerías del sistema para optimización de imágenes
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

# PNPM 11 leerá directamente "onlyBuiltDependencies" desde la raíz de package.json
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install

COPY . .
RUN pnpm run build

# 3. ETAPA DOKPLOY (Servidor Web Nginx)
FROM nginx:alpine AS dokploy

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]fix: move onlyBuiltDependencies to root in package.json for PNPM 11