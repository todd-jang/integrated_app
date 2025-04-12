# 1단계: Build 단계
FROM node:20 AS build
WORKDIR /usr/src/app

# 의존성 설치
COPY package.json package-lock.json ./
RUN npm install

# 소스 복사 및 빌드
COPY . .
RUN npm run build

# 2단계: Serve 단계 (NGINX 사용)
FROM nginx:stable-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# 선택적으로 NGINX 설정 커스터마이징
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
