# 1. ETAPA BASE
FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Herramientas de compilación para gifsicle y mozjpeg
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

# Copia los manifestos Y el archivo .npmrc
COPY package.json pnpm-lock.yaml .npmrc ./

# Instala dependencias (ahora leerá la regla del .npmrc automáticamente)
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install

COPY . .
RUN pnpm run build

# 3. ETAPA DOKPLOY (Nginx)
FROM nginx:alpine AS dokploy

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]