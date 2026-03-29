# PROJECT_CONTEXT.md

> 목적: 기능 추가, 수정, 커스터마이징 시 AI와 개발자가 공통으로 참조하는 프로젝트 컨텍스트 문서
> 최종 업데이트: 2026-03-29
> 대상 독자: Codex, 신규 개발자, 프론트엔드 엔지니어

## 1. 프로젝트 개요

- 프로젝트명: `cplussol`
- 형태: 기업 소개 및 제품 카탈로그용 프론트엔드 웹사이트
- 목적: 회사 소개, 주요 고객/회사 이미지 노출, 오시는 길 안내, 제품 카테고리 탐색, 제품 상세 정보 제공
- 앱 타입: React 기반 SPA
- 운영 성격상 CMS나 관리자 기능은 보이지 않으며, 콘텐츠는 코드와 정적 JSON으로 관리한다.

## 2. 개발 환경 및 실행 방법

### 기본 명령

- 개발 서버: `npm start`
- 프로덕션 빌드: `npm run build`
- 테스트: `npm test`

### 빌드 관련

- `package.json`의 빌드 명령은 `env-cmd -f .env.production react-scripts build`다.
- 즉, 빌드 시 `.env.production` 값을 읽는다.
- 현재 저장소에서 확인되는 자동 배포 스크립트나 CI 설정은 없다.

### 전제 사항

- CRA 기반이므로 Node.js / npm 환경이 필요하다.
- `public/index.html`에서 Kakao Maps SDK 스크립트를 직접 로드한다.

## 3. 디렉터리 / 파일 구조와 각 역할

### 루트

- `package.json`: 의존성과 스크립트 정의
- `.env.production`: 프로덕션 환경변수
- `AGENTS.md`: AI 자동 로드용 요약 지침
- `PROJECT_CONTEXT.md`: 상세 컨텍스트 문서

### public

- `public/index.html`: HTML 템플릿, 메타 정보, Kakao Maps SDK 스크립트 로드
- `public/data/category.json`: 메인 화면의 카테고리 목록 데이터
- `public/data/products.json`: 제품 목록 및 상세 공통 데이터
- `public/images/...`: 로고, 메인 배너, 회사소개 이미지, 고객사 이미지, 제품 이미지

### src

- `src/index.js`: 앱 엔트리
- `src/App.js`: 라우팅 및 앱 공통 레이아웃
- `src/pages/*`: 화면 단위 페이지 컴포넌트
- `src/components/main/*`: 헤더, 네비게이션, 푸터, 메인 공통 UI
- `src/components/category/*`: 카테고리 목록 및 필터/검색 UI
- `src/components/detail/*`: 제품 상세 HTML형 렌더링 컴포넌트
- `src/components/introduction/*`: 회사소개/주요고객 영역
- `src/components/map/Map.js`: Kakao 지도 렌더링

## 4. 주요 화면 및 라우팅 구조

라우팅은 `src/App.js`에서 정의한다.

- `/` 또는 `/home`
  - 메인 페이지
  - 구현 파일: `src/pages/MainPage.js`
  - 역할: 메인 배너 노출, 카테고리 카드 노출
- `/introduction`
  - 회사소개 페이지
  - 구현 파일: `src/pages/IntroductionPage.js`
  - 역할: 회사소개 이미지, 주요 고객, 지도 섹션 표시
- `/map`
  - 오시는 길 페이지
  - 구현 파일: `src/pages/MapPage.js`
  - 역할: Kakao 지도, 주소, 연락처 표시
- `/products/:id`
  - 제품 상세 페이지
  - 구현 파일: `src/pages/DetailPage.js`
  - 역할: 제품 기본 정보 + 이미지형/HTML형 상세 렌더링
- `/category/:category`
  - 카테고리 목록 페이지
  - 구현 파일: `src/pages/CategoryPage.js`
  - 역할: 카테고리별 제품 필터, 검색, 페이지네이션
- `*`
  - 잘못된 경로 처리
  - 구현 파일: `src/pages/RedirectPage.js`
  - 역할: 잠시 로딩 표시 후 홈으로 리다이렉트

## 5. 앱 레이아웃 구조

- `src/App.js`에서 전체 앱을 감싼다.
- `BrowserRouter` 내부 상단에 `Header1`이 항상 렌더링된다.
- `Routes` 아래에 페이지가 바뀐다.
- `Footer1`은 라우터 밖에서 고정으로 렌더링된다.
- 즉, 대부분의 페이지 작업은 헤더/푸터를 개별 페이지에서 직접 다루지 않는다.

## 6. 상태관리 방식과 데이터 흐름

### 현재 방식

- Redux, Zustand 같은 전역 상태관리 도구는 사용하지 않는다.
- 대부분의 상태는 `useState`, `useEffect`, `useParams`, `useMediaQuery`로 처리한다.
- 페이지 단위 또는 컴포넌트 단위 지역 상태가 중심이다.

### 실제 데이터 흐름

- 메인 페이지 `src/pages/MainPage.js`
  - `axios.get("/data/category.json")`
  - 카테고리 목록 로드 후 카드 UI 렌더링
- 카테고리 페이지 `src/pages/CategoryPage.js`
  - URL 파라미터 `category`를 읽고 `Categoryall`에 전달
- 카테고리 목록 컴포넌트 `src/components/category/categoryall.js`
  - `axios.get("/data/products.json")`
  - category 필터 + 검색어 필터 + 페이지네이션 처리
- 상세 페이지 `src/pages/DetailPage.js`
  - URL 파라미터 `id`를 읽음
  - `axios.get("/data/products.json")` 후 해당 제품 1건을 찾음
  - `detailtype`과 제품명에 따라 상세 컴포넌트 또는 이미지 렌더링

### 정리

- 데이터는 서버 상태라기보다 정적 자산에 가깝다.
- 따라서 “데이터 구조 변경”은 API 계약 변경보다 JSON 스키마 변경에 가깝게 다뤄야 한다.

## 7. API 호출 구조 및 공통 처리 방식

### 현재 구조

- `axios`를 사용하지만 실제 호출 대상은 정적 파일 경로 `/data/*.json`이다.
- 공통 API 클라이언트, interceptor, 에러 핸들러, 로딩 상태 추상화는 없다.
- 페이지별로 직접 호출하는 형태다.

### 향후 API 연동 시 권장 방식

- 새 외부 API를 붙일 경우 `src/api` 또는 `src/services` 레이어를 먼저 만든다.
- 각 페이지에서 직접 URL 문자열을 중복 작성하지 않는다.
- base URL은 `.env.production` 포함 환경변수 기반으로 관리한다.
- 성공/실패/로딩 상태 규칙을 공통화한 뒤 페이지에 적용한다.

### 현재 주의 포인트

- `.env.production`에 `REACT_APP_API_ROOT`, `REACT_APP_HOME_URL`가 있으나 현재 코드 사용 흔적은 거의 없다.
- 환경변수가 있다고 해서 이미 API 구조가 공통화된 것은 아니다.

## 8. 공통 컴포넌트 / 유틸 / 훅 구조

### 공통 레이아웃

- `src/components/main/Header.js`
  - 상단 로고 / 연락처 / AppBar 포함
- `src/components/main/CustomAppBar.js`
  - 상단 메뉴 네비게이션
  - 모바일 Drawer 포함
- `src/components/main/Footer.js`
  - 하단 연락처 / 카피라이트

### 메인 화면 관련

- `src/pages/MainPage.js`
  - Swiper 메인 슬라이드
  - 카테고리 카드 목록

### 소개 / 지도 관련

- `src/components/introduction/CompanyIntroduction.js`
  - 회사 소개 이미지 중심 섹션
- `src/components/introduction/MainCustomer.js`
  - 주요 고객 로고 섹션
- `src/components/map/Map.js`
  - Kakao 지도 렌더링

### 상품 관련

- `src/components/category/categoryall.js`
  - 카테고리별 제품 목록, 검색, 페이지네이션
- `src/components/detail/*.js`
  - 일부 제품의 HTML 상세 설명 화면

### 공통 훅/유틸

- 별도 커스텀 훅이나 공통 유틸 디렉터리는 현재 확인되지 않는다.

## 9. 코딩 규칙 및 개발 패턴

### 현재 프로젝트에서 지켜야 할 규칙

- 함수형 컴포넌트 기준으로 작업한다.
- 기존 파일이 MUI `sx` 중심이면 그 패턴을 유지한다.
- 기존 파일이 CSS Module을 쓰면 같은 파일에서는 CSS Module을 유지한다.
- 반응형 UI는 `useMediaQuery` 사용 패턴을 우선 따른다.
- 공통 레이아웃은 `Header1`, `Footer1` 구조를 유지한다.
- 카테고리/제품 관련 콘텐츠는 JSON 우선으로 관리한다.

### 신규 작업 시 권장 패턴

- 페이지 추가 시 `src/pages`에 새 파일을 만들고 `src/App.js`에 라우트 추가
- 메뉴 노출이 필요하면 `CustomAppBar.js`까지 함께 수정
- 데이터가 재사용되면 한 페이지 안에만 묶지 말고 공통 레이어로 분리
- 새 외부 API 연동은 공통 파일로 추상화 후 페이지에서 사용
- 대규모 문자열 수정 전 한글 인코딩/렌더링 상태를 브라우저에서 먼저 확인

## 10. 스타일링 방식

현재 스타일링은 혼합형이다.

- MUI 컴포넌트 + `sx`
- CSS Modules
  - 예: `src/components/main/Header.module.css`
  - 예: `src/components/main/Products.module.css`
  - 예: `src/components/category/Products.module.css`
- `styled-components`
  - `CustomAppBar.js`에서 사용 흔적 있음

### 스타일 작업 가이드

- 수정하는 파일의 기존 방식에 맞춘다.
- 단순 레이아웃/여백/정렬은 MUI `sx`가 자연스럽다.
- 반복되는 카드/리스트 스타일은 기존 CSS Module을 재사용한다.
- 전역 CSS 추가는 최소화한다.

## 11. 환경변수 및 설정 파일 설명

### `.env.production`

- `NODE_PATH=src/`
- `REACT_APP_API_ROOT="http://cplussol.com/"`
- `REACT_APP_HOME_URL="http://cplussol.com/"`

### `public/index.html`

- Kakao Maps SDK 스크립트가 직접 삽입되어 있다.
- OG 메타 태그, description, naver site verification 등이 포함되어 있다.

### 실제 운영 시 확인 포인트

- 도메인이 바뀌면 env 값과 OG URL을 같이 점검
- Kakao Maps app key 교체 시 `public/index.html`도 함께 수정
- SEO 텍스트 수정은 메타 태그와 화면 문구를 같이 본다

## 12. 빌드 / 배포 관련 구조

### 현재 저장소에서 확실히 보이는 내용

- CRA 빌드 결과물 생성 방식이다.
- 프로덕션 빌드는 `.env.production`을 사용한다.
- 정적 자산 기반 사이트이므로 일반적인 정적 호스팅 배포 구조와 잘 맞는다.

### 배포 시 반드시 알아야 할 점

- `BrowserRouter`를 사용하므로 직접 URL 진입 시 서버 rewrite가 없으면 404가 날 수 있다.
- 새 호스팅 환경으로 옮길 때는 SPA fallback 설정이 있는지 확인해야 한다.
- 이미지 경로와 정적 JSON 경로는 절대 경로(`/images/...`, `/data/...`)에 의존한다.

## 13. 추후 개발 시 반드시 알아야 할 주의사항

- `src/pages/DetailPage.js`는 제품명 문자열로 HTML 상세 컴포넌트를 분기한다.
- 즉, 제품명 변경은 단순 텍스트 수정이 아니라 상세 렌더링 분기에도 영향을 줄 수 있다.
- `src/components/detail` 내부 파일명에 공백이 포함된 경우가 있다.
- 파일명 리팩터링 시 import 경로 전부를 확인해야 한다.
- 카테고리 문자열은 `category.json`, `products.json`, 라우트 파라미터가 서로 일치해야 한다.
- `Map.js`는 글로벌 `window.kakao` 존재를 전제로 하므로 SDK 로딩이 깨지면 지도도 깨진다.
- 일부 한글 문자열은 현재 콘솔/터미널에서 깨져 보일 수 있다.

## 14. AI 우선 참고 핵심 요약

- 이 프로젝트는 기업 소개 + 제품 카탈로그형 React SPA다.
- 화면 추가는 `src/pages` 생성 후 `src/App.js` 라우트 등록이 기본이다.
- 제품 데이터는 `public/data/products.json`, 카테고리 데이터는 `public/data/category.json`을 기준으로 본다.
- 제품 상세 `detailtype=html`은 별도 상세 컴포넌트와 `DetailPage.js` 분기가 필요하다.
- 새 API를 붙일 때는 기존처럼 페이지마다 직접 호출을 늘리지 말고 공통 API 레이어를 먼저 만든다.

## 15. 통합 방식 (외부 시스템 연동)

### Kakao Maps

- `public/index.html`에서 SDK 스크립트 로드
- `src/components/map/Map.js`에서 `window.kakao` 사용
- 지도 중심 좌표, 마커, 인포윈도우 모두 코드에 하드코딩

### 외부 이미지 / 링크

- 일부 제품 상세는 외부 Canon 이미지 URL을 `detail` 필드로 사용
- 전화 링크(`tel:`)와 Kakao 길찾기 링크가 포함됨

## 16. 디자인 시스템 / UI 성격

- 기업 소개 사이트 성격이라 정보 전달형, 이미지 중심, 비교적 직관적인 UI다.
- 헤더와 푸터는 공통 프레임으로 유지된다.
- 메인 화면은 슬라이드 + 카테고리 카드 구조다.
- 소개 화면은 이미지 배치 중심이다.
- 상품 화면은 카드 목록 + 검색 + 페이지네이션 구조다.

## 17. UI 제약 사항

- 공통 헤더/푸터 레이아웃을 깨지 않도록 작업한다.
- 모바일과 데스크톱 분기 UI가 이미 여러 곳에 있으므로 한쪽만 수정하지 않는다.
- 제품 카드 리스트와 페이지네이션은 가독성을 유지해야 한다.
- 상세 페이지는 제품 기본 정보와 상세 영역 구성이 계속 유지되어야 한다.

## 18. 실무 체크리스트

### 새 페이지 추가

1. `src/pages`에 페이지 컴포넌트를 만든다.
2. `src/App.js`에 라우트를 추가한다.
3. 메뉴 노출이 필요하면 `src/components/main/CustomAppBar.js`를 수정한다.
4. 페이지 내부는 기존처럼 `Box`, `Container`, `CssBaseline` 조합을 우선 고려한다.
5. 모바일 레이아웃까지 확인한다.

### 새 카테고리 추가

1. `public/data/category.json`에 카테고리와 대표 이미지를 추가한다.
2. `public/data/products.json`의 `category` 값들과 문자열이 정확히 일치하는지 확인한다.
3. 카테고리 필터 UI가 하드코딩되어 있으면 `categoryall.js` 수정 범위도 확인한다.

### 새 제품 추가

1. `public/data/products.json`에 제품 객체를 추가한다.
2. 목록용 이미지를 `public/images/products`에 넣는다.
3. `detailtype`을 `img` 또는 `html` 중 하나로 정한다.
4. `html`이면 `src/components/detail`에 상세 컴포넌트를 만들고 `src/pages/DetailPage.js`에 분기 로직을 추가한다.
5. `img`이면 `detail` 이미지 경로 또는 URL을 정확히 넣는다.
6. 카테고리 페이지와 상세 페이지에서 모두 열리는지 확인한다.

### 정적 JSON에서 실제 API로 전환

1. `src/api` 또는 `src/services` 폴더를 만든다.
2. category / products 조회 함수를 공통 파일로 분리한다.
3. base URL은 환경변수 기반으로 정리한다.
4. 각 페이지에서는 공통 함수만 호출하도록 바꾼다.
5. 에러/로딩/빈 상태 UI 규칙을 함께 정한다.

## 19. 문서 유지보수 규칙

- 구조가 바뀌면 `AGENTS.md`와 `PROJECT_CONTEXT.md`를 함께 갱신한다.
- 라우팅, 데이터 구조, 외부 연동, 배포 방식이 바뀌면 문서 업데이트 우선순위를 높게 둔다.
- 새 작업 규칙이 생기면 먼저 `AGENTS.md`에 요약하고, 상세는 `PROJECT_CONTEXT.md`에 남긴다.
