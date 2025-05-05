#!/bin/bash

# 사용법 출력 함수
usage() {
    echo "사용법: $0 [dev|prod]"
    echo "  dev: 개발 환경으로 빌드 및 실행 (기본값)"
    echo "  prod: 프로덕션 환경으로 빌드 및 실행"
    exit 1
}

# 환경 설정 (기본값: dev)
ENV=${1:-dev}

# 유효한 환경 값인지 확인
if [[ "$ENV" != "dev" && "$ENV" != "prod" ]]; then
    echo "Error: 유효하지 않은 환경입니다. 'dev' 또는 'prod'를 사용하세요."
    usage
fi

# .env.prod 파일이 있는지 확인
if [ ! -f .env.prod ]; then
    echo "Error: .env.prod 파일이 존재하지 않습니다."
    exit 1
fi

# 이미 실행 중인 컨테이너 중지
echo "이전 컨테이너 중지 중..."
docker-compose -f docker-compose.$ENV.yml down

# Docker Compose로 빌드 및 실행
echo "Docker Compose로 $ENV 환경 빌드 및 실행 중..."
docker-compose -f docker-compose.$ENV.yml up -d --build

# 환경에 따라 다른 포트 사용
if [ "$ENV" == "dev" ]; then
    PORT=5173
else
    PORT=80
fi

echo "완료! 애플리케이션이 http://localhost:$PORT 에서 실행 중입니다."
echo "로그를 보려면: docker-compose -f docker-compose.$ENV.yml logs -f web"
echo "중지하려면: docker-compose -f docker-compose.$ENV.yml down"