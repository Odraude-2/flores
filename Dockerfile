# Etapa 1: Builder - Compilar la aplicación
FROM node:20-alpine AS builder
WORKDIR /app

# Copiar archivos de dependencias y instalarlas
COPY package*.json ./
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa 2: Runner - Crear la imagen final de producción
FROM node:20-alpine AS runner
WORKDIR /app

# Copiar solo los artefactos necesarios desde la etapa de builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Exponer el puerto en el que corre Next.js
EXPOSE 3000

# Comando para iniciar la aplicación en modo producción
CMD ["npm", "start"]
