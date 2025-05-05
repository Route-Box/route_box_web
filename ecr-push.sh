#!/bin/bash

# 사용법 출력 함수
usage() {
    echo "사용법: $0 [dev|prod]"
    echo "  dev: 개발 환경 이미지 빌드 및 푸시 (기본값)"
    echo "  prod: 프로덕션 환경 이미지 빌드 및 푸시"
    exit 1
}

# 환경 설정 (기본값: dev)
ENV=${1:-dev}

# 유효한 환경 값인지 확인
if [[ "$ENV" != "dev" && "$ENV" != "prod" ]]; then
    echo "Error: 유효하지 않은 환경입니다. 'dev' 또는 'prod'를 사용하세요."
    usage
fi

# 환경에 따른 변수 설정
AWS_ACCOUNT_ID="445570920688"
AWS_REGION="ap-northeast-2"

if [ "$ENV" == "dev" ]; then
    ECR_REPOSITORY="routebox-web-dev"
    DOCKERFILE="Dockerfile.dev"
    COMPOSE_FILE="docker-compose.dev.yml"
else
    ECR_REPOSITORY="routebox-web-prod"
    DOCKERFILE="Dockerfile"
    COMPOSE_FILE="docker-compose.prod.yml"
fi

IMAGE_TAG="latest"

# AWS 로그인
echo "AWS ECR 로그인 중..."
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

# 레포지토리가 없는 경우 생성
echo "ECR 레포지토리 확인/생성 중..."
aws ecr describe-repositories --repository-names $ECR_REPOSITORY --region $AWS_REGION || aws ecr create-repository --repository-name $ECR_REPOSITORY --region $AWS_REGION

# Docker Compose로 이미지 빌드
echo "$ENV 환경용 이미지 빌드 중..."
docker-compose -f $COMPOSE_FILE build

# 이미지 이름 확인
FULL_IMAGE_NAME="route_box_web-web"
echo "빌드된 이미지 확인 중: $FULL_IMAGE_NAME..."

# 이미지가 빌드되었는지 확인
if ! docker image inspect $FULL_IMAGE_NAME:latest > /dev/null 2>&1; then
    echo "Error: 이미지를 찾을 수 없습니다: $FULL_IMAGE_NAME:latest"
    echo "가능한 이미지 목록:"
    docker images
    exit 1
fi

# ECR 태그 지정
echo "ECR 태그 지정 중..."
docker tag $FULL_IMAGE_NAME:latest $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:$IMAGE_TAG

# ECR 푸시
echo "ECR로 이미지 푸시 중..."
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:$IMAGE_TAG

echo "완료! $ENV 환경용 이미지가 성공적으로 푸시되었습니다."
echo "이미지: $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:$IMAGE_TAG" 