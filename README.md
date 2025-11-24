# Portfolio

Next.js, React, TypeScript를 활용한 개발자 포트폴리오 웹사이트입니다.

## 주요 기능

- 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 프로젝트 카드 형식 목록 및 상세 페이지
- 현재 진행중인 프로젝트 표시
- 프로젝트 검색 기능 (이름, 태그, 프로그래밍 언어)
- 연도별 정렬 기능
- 태그 및 프로그래밍 언어 필터링
- 이메일 연락하기 폼 (Gmail SMTP)
- 다크 모드 지원
- 최적화된 이미지 로딩
- SEO 친화적 구조

## 기술 스택

### Frontend
- **Next.js 15** - App Router 사용
- **React 18** - 최신 React 기능 활용
- **TypeScript 5** - 타입 안정성
- **Tailwind CSS 3** - 유틸리티 퍼스트 CSS

### Backend
- **Nodemailer** - 이메일 발송 (Gmail SMTP)
- **Next.js API Routes** - 서버리스 API

### 개발 도구
- **ESLint** - 코드 품질 관리
- **Prettier** - 코드 포맷팅
- **PostCSS** - CSS 처리

## 프로젝트 구조

```
portfolio/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── project/[id]/        # 프로젝트 상세 페이지
│   │   ├── about/               # 프로필 페이지
│   │   ├── contact/             # 연락하기 페이지
│   │   ├── api/send-email/      # 이메일 발송 API
│   │   ├── layout.tsx           # 루트 레이아웃
│   │   ├── page.tsx             # 홈 페이지
│   │   └── globals.css          # 전역 스타일
│   ├── components/               # 재사용 가능한 컴포넌트
│   │   ├── common/              # 공통 컴포넌트
│   │   └── project/             # 프로젝트 관련 컴포넌트
│   ├── types/                   # TypeScript 타입 정의
│   ├── lib/                     # 유틸리티 함수
│   └── data/                    # Mock 데이터
├── public/                      # 정적 파일
├── .env.local                   # 환경 변수 (Gmail 설정)
└── package.json
```

## 시작하기

### 필수 요구사항

- Node.js 18.17 이상
- npm, yarn, 또는 pnpm

### 설치

```bash
# 의존성 설치
npm install

# 환경 변수 설정
# .env.local 파일을 생성하고 Gmail 설정을 입력하세요
cp .env.example .env.local
# .env.local 파일을 열어 EMAIL_PASSWORD에 Gmail App Password를 입력하세요

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### Gmail App Password 설정 방법

1. Google 계정 설정 > 보안으로 이동
2. "2단계 인증"을 활성화 (이미 활성화되어 있을 수 있음)
3. "앱 비밀번호" 검색 또는 [여기](https://myaccount.google.com/apppasswords)를 클릭
4. 앱 선택: "메일", 기기 선택: "기타(맞춤 이름)" 입력
5. 생성된 16자리 비밀번호를 `.env.local`의 `EMAIL_PASSWORD`에 입력

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

### 코드 품질

```bash
# ESLint 실행
npm run lint

# Prettier 포맷팅
npm run format
```

## 주요 페이지

- `/` - 프로젝트 목록 (검색, 필터, 정렬 기능)
- `/project/[id]` - 프로젝트 상세 페이지
- `/about` - 소개 페이지 (경력, 기술 스택, 학력)
- `/contact` - 연락하기 페이지 (이메일 폼)

## 개발 방식

이 프로젝트는 실무에서 널리 사용되는 개발 방식을 적용했습니다:

- **컴포넌트 기반 아키텍처**: 재사용 가능하고 유지보수가 쉬운 컴포넌트
- **타입 안정성**: TypeScript로 런타임 에러 방지
- **서버/클라이언트 컴포넌트 분리**: 최적의 성능을 위한 렌더링 전략
- **유틸리티 함수**: 공통 로직의 재사용 (필터링, 정렬, 날짜 포맷팅 등)
- **일관된 코드 스타일**: ESLint와 Prettier 적용
- **모바일 퍼스트**: 반응형 디자인
- **API Routes**: 서버리스 함수를 활용한 백엔드 기능

## 반응형 브레이크포인트

- **xs**: 475px
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 라이선스

MIT
