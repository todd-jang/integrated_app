1. 프젝 초기화
npx create-next-app@latest integrated_app/frontend --typescript
cd integrated_app/frontend

2. Tailwind 설치
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p

3. 프로젝트를 실행하기 위해서는 아래 명령어를 통해 Next.js 개발 서버를 시작합니다.
npm install
npm run dev


# docker-compose up --build후 

접속:

	•	React 앱: http://localhost:3000
	•	Flask API (예시 엔드포인트): http://localhost:5000/api/agent
