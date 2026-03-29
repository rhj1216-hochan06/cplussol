# AGENTS.md

> `src/pages` 작업 규칙

## 1. 페이지 파일 역할

- 이 디렉터리 파일은 라우트 단위 화면이다.
- 공통 헤더와 푸터는 `src/App.js`에서 감싸므로 페이지 파일 안에서 중복 구현하지 않는다.

## 2. 페이지 추가 규칙

1. `src/pages`에 새 페이지 파일을 만든다.
2. `src/App.js`에 라우트를 등록한다.
3. 상단 메뉴 노출이 필요하면 `src/components/main/CustomAppBar.js`를 함께 수정한다.
4. 페이지 내부는 기존 페이지처럼 `Box`, `CssBaseline`, `Container` 조합을 우선 사용한다.

## 3. 기존 페이지별 주의점

- `MainPage.js`
  - 카테고리 목록은 `public/data/category.json`을 읽는다.
  - 카테고리 카드 링크는 `/category/:category` 형식이다.
- `CategoryPage.js`
  - URL 파라미터 `category`를 받아 `Categoryall`에 넘긴다.
- `DetailPage.js`
  - URL 파라미터 `id`는 문자열 비교로 사용된다.
  - `products.json`에서 제품을 찾고 `detailtype`에 따라 상세를 분기한다.
  - `detailtype="html"`이면 제품명과 상세 컴포넌트 분기가 정확히 맞아야 한다.
- `IntroductionPage.js`
  - 회사소개, 주요고객, 지도 섹션을 한 페이지에 조합한다.
- `MapPage.js`
  - 주소와 연락처 표시도 함께 포함한다.
- `RedirectPage.js`
  - 잘못된 경로를 홈으로 보내는 용도다.

## 4. 페이지 수정 시 체크리스트

- 라우트가 바뀌면 `src/App.js`와 메뉴를 같이 확인한다.
- 데이터 의존 페이지는 JSON 스키마 영향 여부를 같이 확인한다.
- 모바일 레이아웃 분기와 데스크톱 레이아웃 분기를 모두 점검한다.
