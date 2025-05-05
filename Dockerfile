# Build stage
FROM oven/bun:1 AS build

WORKDIR /app

# 의존성 설치를 위한 파일 복사
COPY package.json bun.lockb ./

# 의존성 설치
RUN bun install

# 소스 코드 복사
COPY . .

# 애플리케이션 빌드
RUN bun run build

# Production stage
FROM nginx:alpine

# Nginx 설정 복사
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 