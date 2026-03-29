# AGENTS.md

> `src/components/detail` 작업 규칙

## 1. 역할

- 이 디렉터리는 `detailtype="html"` 제품의 상세 콘텐츠를 렌더링한다.
- 데이터 조회는 여기서 하지 않고, `src/pages/DetailPage.js`가 제품을 선택한 뒤 컴포넌트를 렌더링한다.

## 2. 새 HTML 상세 추가 규칙

1. 이 디렉터리에 새 상세 컴포넌트를 만든다.
2. `src/pages/DetailPage.js`에 import를 추가한다.
3. `src/pages/DetailPage.js`의 제품명 분기 로직에 새 조건을 추가한다.
4. `public/data/products.json`에서 해당 제품의 `detailtype`을 `"html"`로 설정한다.
5. `public/data/products.json`의 `name` 값이 분기 문자열과 정확히 일치하는지 확인한다.

## 3. 구현 패턴

- 대부분 정적 이미지 나열 또는 영상 임베드 중심이다.
- 복잡한 상태관리나 API 호출은 넣지 않는다.
- 폭은 기존처럼 `width="98%"` 수준의 단순한 풀폭 패턴을 우선 따른다.
- 모바일에서 영상 높이 등 차이가 필요할 때만 `useMediaQuery`를 쓴다.

## 4. 파일명 / 이름 규칙

- 현재 파일명은 제품명과 거의 1:1로 대응하며 공백과 하이픈이 포함될 수 있다.
- 파일명을 바꾸면 `DetailPage.js` import 경로를 반드시 함께 수정한다.
- 제품명 변경은 단순 문구 수정이 아니라 상세 분기 로직 변경일 수 있다.

## 5. 선택 기준

- 상세가 단일 이미지 한 장 또는 단순 이미지 URL이면 새 컴포넌트를 만들지 말고 `detailtype="img"`를 우선 고려한다.
- HTML형은 영상, 링크, 여러 이미지 블록 등 구조가 필요한 경우에만 사용한다.
