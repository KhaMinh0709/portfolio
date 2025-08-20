# Stage 1: Build Astro
FROM node:18-alpine AS builder

# Tạo thư mục app
WORKDIR /app

# Copy package.json và package-lock.json (hoặc pnpm/yarn lock nếu có)
COPY package*.json ./

# Cài dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Build dự án
RUN npm run build

# Stage 2: Serve với Nginx
FROM nginx:alpine

# Copy file build từ builder sang thư mục public của Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy file cấu hình Nginx tùy chỉnh (nếu cần)
# Ví dụ để hỗ trợ SPA fallback:
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
