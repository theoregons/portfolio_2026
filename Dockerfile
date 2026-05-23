# Stage 1: Build Image
FROM node:20-alpine AS builder

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies dengan clean install agar lebih stabil
RUN npm ci

# Copy seluruh source code
COPY . .

# Jalankan proses build Vite (menghasilkan folder /dist)
RUN npm run build

# Stage 2: Production Image (Nginx)
FROM nginx:alpine

# Copy konfigurasi custom Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Bersihkan default html Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy hasil build statis dari tahap builder ke direktori Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Ekspos port 80 (port internal container Nginx)
EXPOSE 80

# Jalankan Nginx di foreground
CMD ["nginx", "-g", "daemon off;"]