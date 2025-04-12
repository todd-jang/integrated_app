#!/bin/bash

# 기본 설정
CLUSTER_NAME="local-ai-cluster"
NAMESPACE="ai-app"
MINIKUBE_DRIVER="docker"

echo "🚀 Minikube 클러스터 $CLUSTER_NAME 시작 중..."

# 1. Minikube 클러스터 시작
minikube start --driver=$MINIKUBE_DRIVER --profile=$CLUSTER_NAME

# 2. 네임스페이스 생성
kubectl create namespace $NAMESPACE || echo "이미 존재함"

# 3. Ingress 활성화
minikube addons enable ingress --profile=$CLUSTER_NAME

# 4. Dashboard도 켜볼까?
minikube dashboard --profile=$CLUSTER_NAME &

# 5. 기본 정보 출력
echo "✅ 클러스터 생성 완료!"
echo "🌐 네임스페이스: $NAMESPACE"
echo "📦 Docker Registry: $(minikube ip):5000"

# 6. 테스트용 리소스 샘플 설치 (옵션)
echo "🧪 테스트용 NGINX 배포 예시"
kubectl apply -n $NAMESPACE -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-test
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx-test
  template:
    metadata:
      labels:
        app: nginx-test
    spec:
      containers:
      - name: nginx
        image: nginx:stable
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: nginx-test
spec:
  selector:
    app: nginx-test
  ports:
  - port: 80
    targetPort: 80
EOF

echo "🌐 접속: minikube service nginx-test -n $NAMESPACE --url"
