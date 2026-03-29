# cplussol

[cplussol.com](http://cplussol.com/)  
프로젝트 기간: 2023.03.10 ~ 2023.03.26

씨플러스솔루션 기업 소개 및 제품 안내용 React SPA입니다.  
회사 소개, 주요 고객, 오시는 길, 제품 카테고리 목록, 제품 상세 페이지를 제공합니다.

## 프로젝트 문서

- [AGENTS.md](./AGENTS.md): Codex / AI 작업용 핵심 규칙 요약
- [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md): 프로젝트 구조, 데이터 흐름, 개발 패턴 상세 문서

프로젝트 수정이나 기능 추가 전에는 위 문서를 먼저 확인하는 것을 권장합니다.

## 주요 기능

- 메인 페이지 배너 및 카테고리 진입
- 회사 소개 / 주요 고객 섹션
- Kakao Maps 기반 오시는 길 안내
- 카테고리별 제품 목록 조회
- 제품 검색 기능
- 모바일 버전 화면 대응 (`useMediaQuery` 기반)
- 제품 상세 페이지 제공

## 기술 스택

| 분류 | 기술 | 비고 |
| --- | --- | --- |
| 프론트엔드 | React 18 | CRA 기반 SPA |
| 라우팅 | react-router-dom v6 | 페이지 라우팅 |
| UI | MUI v5 | `@mui/material`, `@mui/icons-material` |
| 스타일 | CSS Modules, styled-components | 파일별 혼합 사용 |
| 데이터 로드 | axios | `public/data/*.json` 정적 데이터 조회 |
| 슬라이더 | swiper | 메인 페이지 배너 |
| 지도 | Kakao Maps JavaScript SDK | `public/index.html`에서 로드 |
| 개발 환경 | npm / yarn, Node.js | 기존 기록 기준 Node v18.15.0 |

## 실행 방법

```bash
npm install
npm start
```

### 주요 명령어

- 개발 서버: `npm start`
- 프로덕션 빌드: `npm run build`
- 테스트: `npm test`

## 배포 정보

기존 배포 방식은 아래와 같습니다.

- `npm run build`로 빌드 결과물을 생성
- 빌드 파일을 GitHub Pages용 저장소에 업로드
- GitHub Pages 주소를 가비아에서 포워딩하여 운영

관련 저장소:

- 빌드용 프로젝트 주소: [rhj1216-1216/rhj1216-1216.github.io](https://github.com/rhj1216-1216/rhj1216-1216.github.io)
- 업로드 대상 주소: [https://rhj1216-1216.github.io](https://rhj1216-1216.github.io)

## 라우팅 구조

- `/`, `/home`: 메인 페이지
- `/introduction`: 회사 소개
- `/map`: 오시는 길
- `/category/:category`: 카테고리별 제품 목록
- `/products/:id`: 제품 상세
- `*`: 잘못된 경로 접근 시 홈으로 리다이렉트

## 디렉터리 개요

```text
public/
  data/
    category.json
    products.json
  images/
src/
  components/
    category/
    detail/
    introduction/
    main/
    map/
  pages/
  App.js
```

## 제품 / 데이터 관리 방식

현재 제품 데이터는 정적 JSON 기반으로 관리합니다.

- 카테고리 데이터: `public/data/category.json`
- 제품 데이터: `public/data/products.json`
- 제품 목록 이미지: `public/images/products`
- HTML형 제품 상세: `src/components/detail`

제품 상세 설명은 현재 두 가지 방식으로 구성됩니다.

- `detailtype: "img"`
  - 상세 이미지 URL 또는 경로를 직접 사용
- `detailtype: "html"`
  - `src/components/detail`의 개별 상세 컴포넌트를 사용

즉, 새 제품을 추가할 때는 JSON 데이터만 수정하면 되는 경우와, 상세 컴포넌트까지 함께 추가해야 하는 경우가 나뉩니다.

## 개발 시 참고 사항

- 페이지 추가 시 `src/pages`에 파일을 만들고 `src/App.js`에 라우트를 등록합니다.
- 상단 메뉴에 노출할 페이지라면 `src/components/main/CustomAppBar.js`도 함께 수정해야 합니다.
- 현재 데이터는 실제 API보다 정적 JSON에 가깝습니다.
- 새 API 연동이 필요하면 페이지마다 직접 호출을 늘리기보다 공통 API 레이어를 먼저 만드는 것을 권장합니다.
- `BrowserRouter`를 사용하므로 배포 환경에서 SPA fallback 또는 rewrite 설정이 필요할 수 있습니다.

## 메모

- 기존 README에 있던 모바일 버전 구성과 제품 검색 기능 내용은 현재 프로젝트 구조에도 반영되어 있습니다.
- 프로젝트 규칙과 세부 작업 방식은 루트 및 하위 `AGENTS.md` 문서에 정리되어 있습니다.

