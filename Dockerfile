# 1. ETAPA BASE
FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Desactivar la restricción estricta de scripts en PNPM / Corepack
ENV COREPACK_ENABLE_STRICT=0
ENV PNPM_CONFIG_ONLY_BUILT_DEPENDENCIES_FILE=false

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

# 2. ETAPA DE BUILD
FROM base AS build
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

# Desactivar la validación de build scripts durante la instalación
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm config set only-built-dependencies-file false && \
    pnpm install --no-frozen-lockfile

COPY . .
RUN pnpm run build

# 3. ETAPA FINAL DOKPLOY
FROM nginx:alpine AS dokploy

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]