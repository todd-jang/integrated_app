# 🔧 1단계: React 빌드
FROM node:20 AS frontend-build
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend .
RUN npm run build

# ☕️ 2단계: Spring Boot 빌드
FROM maven:3.9.4-amazoncorretto-17 AS backend-build
WORKDIR /app
COPY backend/pom.xml .
COPY backend/src ./src
RUN mvn clean package -DskipTests

# 🚀 3단계: 최종 실행 이미지
FROM openjdk:17
WORKDIR /app

# React 정적 파일 복사
COPY --from=frontend-build /app/build ./static

# Spring Boot JAR 복사
COPY --from=backend-build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
