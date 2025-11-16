FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
WORKDIR /app
COPY . .
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
RUN pnpm run build

FROM base AS dokploy
WORKDIR /app

# Copia solo los archivos necesarios
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules

# Asume que robots.txt y sitemap.xml están en la carpeta 'public'
COPY public/robots.txt /app/robots.txt
COPY public/sitemap.xml /app/sitemap.xml

EXPOSE 3000

CMD ["pnpm", "start"]