# 셀럽잇(Celuveat Renewal)

**셀럽잇**은 셀럽들이 추천하는 맛집 정보를 제공하는 웹 애플리케이션입니다.  
React, TypeScript, Vite, TailwindCSS, React Query 등 최신 프론트엔드 스택을 활용하여 빠르고 쾌적한 사용자 경험을 제공합니다.

<a href="https://celuveat.com/">
  <img width="1600" alt="Thumbnail" src="https://github.com/user-attachments/assets/d31f152b-0e78-4e33-bbb9-f51ae3e43dd3">
</a>

## 주요 기능

- **메인 페이지**

  - 셀럽 추천 맛집, 인기 맛집, 음식 카테고리별 탐색, 지역별 맛집 등 다양한 섹션 제공
  - 검색 기능 및 온보딩 지원

- **셀럽 상세 페이지**

  - 셀럽 소개 및 해당 셀럽이 추천한 맛집 리스트 제공

- **맛집 페이지**

  - 카테고리/지역/주간 업데이트/상세 정보 등 다양한 필터와 상세 정보 제공

- **리뷰**

  - 내 리뷰 관리, 리뷰 작성, 전체 리뷰 열람

- **마이페이지**

  - 내 정보, 프로필 관리

- **기타**
  - 지도 기반 맛집 탐색, 관심 맛집 관리, 소셜 로그인(OAuth) 지원

---

## 폴더 구조

```
src/
  components/         // 공통 컴포넌트
  hooks/              // 커스텀 훅
  lib/                // 라이브러리, 유틸, 색상 등
  pages/              // 라우트별 페이지
    celebs/           // 셀럽 관련 페이지
    interested/       // 관심 맛집
    main/             // 메인 페이지
    map/              // 지도
    my/               // 마이페이지
    oauth/            // 소셜 로그인
    restaurants/      // 맛집 관련
    reviews/          // 리뷰
    search/           // 검색
  remotes/            // 원격 데이터 관련
  utils/              // 유틸 함수
  App.tsx             // 라우터 및 전체 구조
  Provider.tsx        // 전역 Provider
```

---

## 사용 기술 스택

- **React 18**
- **TypeScript**
- **Vite** (vite + @vitejs/plugin-react-swc)
- **TailwindCSS** (커스텀 유틸리티 포함)
- **Emotion** (CSS-in-JS)
- **React Query** (비동기 상태 관리)
- **React Router v6**
- **Framer Motion** (애니메이션)
- **Lottie** (로딩 애니메이션)
- **Axios** (API 통신)
- **AWS SDK for JavaScript v3** (`@aws-sdk/client-s3`, `@aws-sdk/s3-request-presigner`) - S3 연동
- **ESLint, Prettier** (코드 품질 관리)
- **SVGR** (SVG 컴포넌트화)

---

## 개발 및 실행

```bash
# 의존성 설치
yarn install

# 개발 서버 실행
yarn dev

# 빌드
yarn build

# 린트 검사
yarn lint

# 빌드 결과 미리보기
yarn preview
```

개발 서버는 기본적으로 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

---

## 전역 상태 및 Provider

- **React Query**: 서버 상태 관리
- **OverlayProvider**: 오버레이 UI 관리
- **Suspense + Lottie**: 비동기 로딩 시 애니메이션 제공

---

## 스타일링

- **TailwindCSS**: 커스텀 폰트, 색상, 애니메이션, 유틸리티 클래스 확장
- **Emotion**: 컴포넌트 단위 스타일링

---

## 기타

- **AWS S3 연동**을 통한 파일 업로드/다운로드 지원
- **Vite**의 빠른 번들링과 HMR 지원
- **TypeScript** 기반의 타입 안정성
- **SVG 아이콘**을 컴포넌트로 활용
