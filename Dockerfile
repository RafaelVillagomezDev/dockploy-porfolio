# 1. ETAPA BASE: Node 22 + Herramientas de sistema
FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

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

# Crear directamente el archivo pnpm-workspace.yaml autorizado dentro del contenedor
RUN printf "onlyBuiltDependencies:\n  - '@parcel/watcher'\n  - cwebp-bin\n  - esbuild\n  - gifsicle\n  - jpegtran-bin\n  - mozjpeg\n  - optipng-bin\n  - pngquant-bin\n" > pnpm-workspace.yaml

# Instalar dependencias con los scripts ya autorizados
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install

COPY . .
RUN pnpm run build

# 3. ETAPA FINAL DOKPLOY
FROM nginx:alpine AS dokploy

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]