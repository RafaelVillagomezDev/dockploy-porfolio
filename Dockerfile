# 1. ETAPA BASE
FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

# 2. ETAPA DE BUILD
FROM base AS build
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

# Omite la ejecución de scripts bloqueados por PNPM 11
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --ignore-scripts

COPY . .

# Construye directamente los archivos estáticos de React/Vite
RUN pnpm run build

# 3. ETAPA FINAL DOKPLOY (Nginx)
FROM nginx:alpine AS dokploy

# A. Copiamos nuestra configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# B. Copiamos el dist DENTRO de la carpeta /porfolio para que coincida con Vite
COPY --from=build /app/dist /usr/share/nginx/html/porfolio

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]