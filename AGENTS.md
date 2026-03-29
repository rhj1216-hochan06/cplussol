# AGENTS.md

> Codex / AI 자동 로드용 핵심 작업 가이드
> 상세 구조와 배경 설명은 `PROJECT_CONTEXT.md`를 우선 참고한다.

## 1. 프로젝트 요약

- 이 저장소는 씨플러스솔루션 소개 및 제품 안내용 React SPA이다.
- 성격은 관리자 시스템보다 기업 소개 + 카탈로그형 웹사이트에 가깝다.
- 주요 사용자 흐름은 메인, 회사소개, 오시는 길, 카테고리 목록, 제품 상세 조회다.

## 2. 기술 스택

- React 18 + `react-scripts` (CRA)
- `react-router-dom` v6
- MUI v5 (`@mui/material`, `sx` 사용 비중 높음)
- `axios`를 통한 정적 JSON 로드
- `swiper` 메인 배너
- Kakao Maps JavaScript SDK
- CSS Modules + 일부 `styled-components`

## 3. 작업 전 우선 확인 파일

- `src/App.js`
- `src/pages/MainPage.js`
- `src/pages/CategoryPage.js`
- `src/pages/DetailPage.js`
- `src/components/category/categoryall.js`
- `src/components/main/CustomAppBar.js`
- `public/data/category.json`
- `public/data/products.json`
- `PROJECT_CONTEXT.md`

## 4. 이 프로젝트의 핵심 규칙

- 페이지를 추가하면 반드시 `src/App.js`에 라우트를 등록한다.
- 상단 메뉴에 노출할 페이지라면 `src/components/main/CustomAppBar.js`도 함께 수정한다.
- 제품/카테고리 변경은 먼저 `public/data/*.json` 기준으로 검토한다.
- 제품 상세의 `detailtype`이 `html`이면 `src/components/detail`에 컴포넌트가 필요하고, `src/pages/DetailPage.js`에 분기 로직도 추가해야 한다.
- 제품 상세의 `detailtype`이 `img`이면 상세 이미지 URL 또는 경로만으로 렌더링된다.
- 레이아웃 수정 시 기존의 모바일 대응 방식인 `useMediaQuery` 패턴을 우선 존중한다.
- 현재는 전역 상태관리 없이 페이지/컴포넌트 단위 `useState`, `useEffect`로 동작한다.
- 현재 데이터 소스는 실제 API보다 정적 JSON에 가깝다. 새 백엔드 연동을 도입할 때는 페이지마다 직접 호출을 늘리지 말고 공통 API 레이어를 먼저 만든다.
- 스타일은 수정하는 파일의 기존 방식에 맞춘다. MUI `sx`, CSS Module, `styled-components`를 섞되 새로운 스타일링 체계를 추가로 도입하지 않는다.
- Kakao Maps SDK와 프로덕션 환경변수는 배포 민감 영역으로 취급한다.

## 5. 작업 유형별 체크포인트

### 페이지 추가

- `src/pages`에 페이지 컴포넌트 생성
- `src/App.js`에 라우트 추가
- 필요 시 `CustomAppBar.js` 메뉴 추가
- `Header1` / `Footer1` 포함 구조를 유지
- 모바일 레이아웃까지 같이 점검

### 제품 추가

- `public/data/products.json`에 항목 추가
- 필요 시 `public/data/category.json`도 갱신
- 목록 이미지 파일을 `public/images/products`에 추가
- `detailtype`이 `html`이면 상세 컴포넌트 생성 및 `DetailPage.js` 분기 추가
- `detailtype`이 `img`이면 `detail` 필드 경로 또는 URL 확인

### 데이터 구조 변경

- `MainPage.js`, `DetailPage.js`, `categoryall.js` 소비 방식까지 함께 수정
- 라우트 파라미터와 JSON 필드명이 계속 일치하는지 확인

## 6. 주의사항

- `BrowserRouter`를 사용하므로 배포 서버는 SPA fallback 또는 rewrite 설정이 필요하다.
- `src/components/detail` 내부 파일명에 공백과 하이픈이 있으므로 이름 변경 시 import 경로를 특히 조심한다.
- 콘솔 출력에서는 일부 한글이 깨져 보일 수 있으니, 대규모 문자열 수정 전 실제 파일/브라우저 렌더링 기준으로 확인한다.
- `public/index.html`에 Kakao Maps SDK app key가 직접 들어 있다. 운영 설정 변경 시 이 파일도 확인한다.

## 7. 하위 세부 규칙 파일

- `src/AGENTS.md`: `src` 전체 공통 코드 규칙
- `src/pages/AGENTS.md`: 페이지 컴포넌트 작업 규칙
- `src/components/AGENTS.md`: 컴포넌트 공통 규칙
- `src/components/main/AGENTS.md`: 헤더, 네비게이션, 푸터 규칙
- `src/components/category/AGENTS.md`: 카테고리 목록, 검색, 페이지네이션 규칙
- `src/components/detail/AGENTS.md`: HTML형 제품 상세 컴포넌트 규칙
- `src/components/introduction/AGENTS.md`: 회사소개/주요고객 섹션 규칙
- `src/components/map/AGENTS.md`: Kakao 지도 관련 규칙
- `public/data/AGENTS.md`: 정적 JSON 데이터 수정 규칙
