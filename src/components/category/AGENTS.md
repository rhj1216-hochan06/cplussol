# AGENTS.md

> `src/components/category` 작업 규칙

## 1. 역할

- `categoryall.js`가 카테고리 목록, 검색, 페이지네이션을 모두 담당한다.
- 이 영역은 `public/data/products.json` 구조에 직접 의존한다.

## 2. 카테고리 규칙

- 현재 카테고리 필터 버튼은 하드코딩되어 있다.
- 새 카테고리를 추가하면 다음을 함께 수정한다.
1. `public/data/category.json`
2. `public/data/products.json`의 `category` 값
3. `categoryall.js` 필터 함수와 버튼 UI

## 3. 목록 동작 규칙

- 제품 카드 클릭 경로는 `/products/:id`다.
- 검색은 현재 `name`과 `category` 기준으로 동작한다.
- 페이지네이션 개수는 `useMediaQuery`로 모바일/데스크톱이 다르다.
- 목록 카드 레이아웃은 `Products.module.css` 기준으로 유지한다.

## 4. 수정 시 주의

- `id`는 문자열 비교 기반이므로 숫자로 바꾸지 않는다.
- 카드 수, 이미지 크기, breakpoints를 바꾸면 모바일 가독성을 같이 확인한다.
- 데이터 필드명을 바꾸면 상세 페이지까지 영향이 갈 수 있다.
