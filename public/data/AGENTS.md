# AGENTS.md

> `public/data` 정적 데이터 수정 규칙

## 1. 파일 역할

- `category.json`: 메인 화면 카테고리 카드 데이터
- `products.json`: 제품 목록과 상세 공통 데이터

## 2. `category.json` 규칙

- 각 항목은 아래 구조를 따른다.
- `category`: 카테고리 문자열
- `img`: 대표 이미지 경로
- `category` 값은 라우트 파라미터와 목록 필터에서 그대로 사용될 수 있으므로 문자열을 신중하게 바꾼다.

## 3. `products.json` 규칙

- 각 제품은 아래 필드를 기본으로 가진다.
- `id`
- `category`
- `name`
- `img`
- `detailtype`
- `detail`
- `fromdate`
- `text1` ~ `text5`

## 4. 중요한 데이터 규칙

- `id`는 현재 문자열로 비교되므로 문자열로 유지한다.
- `category`는 `category.json`, 카테고리 페이지, 필터 버튼과 일치해야 한다.
- `img`는 보통 `/images/products/...` 경로를 사용한다.
- `detailtype="img"`이면 `detail`에 이미지 URL 또는 이미지 경로를 넣는다.
- `detailtype="html"`이면 `detail`은 비어 있을 수 있지만 `name`은 `src/pages/DetailPage.js` 분기 문자열과 정확히 일치해야 한다.

## 5. 제품 추가 체크리스트

1. `products.json`에 새 제품 객체를 추가한다.
2. 목록 이미지를 `public/images/products`에 추가한다.
3. 카테고리가 새 값이면 `category.json`도 함께 수정한다.
4. 상세 타입이 `html`이면 `src/components/detail`과 `DetailPage.js`도 함께 수정한다.
5. 상세 타입이 `img`이면 `detail` 이미지가 실제로 열리는지 확인한다.

## 6. 편집 주의사항

- JSON 문법 오류가 나면 전체 목록 페이지가 깨질 수 있다.
- 경로는 기존처럼 루트 기준 절대 경로를 우선 유지한다.
- 한글 편집 후 저장 인코딩은 UTF-8 기준으로 확인한다.
