# Step 1: Build stage
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]#npm run build 결과물이 /app/dist에 있다고 가정했어요 (Vite/CRA 기준). Next.js라면 /app/.next 혹은 next start 방식으로 다르게 구성
