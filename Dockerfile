# 1. ETAPA BASE
FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# 2. ETAPA DE BUILD
FROM base AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --ignore-scripts
COPY . .
RUN pnpm run build

# 3. ETAPA FINAL DOKPLOY (Nginx)
FROM nginx:alpine AS dokploy
COPY nginx.conf /etc/nginx/conf.d/default.conf

# MODIFICACIÓN: Creamos y copiamos los archivos a la carpeta del subdirectorio
COPY --from=build /app/dist /usr/share/nginx/html/porfolio

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]