# AGENTS.md

> `src/components/main` 작업 규칙

## 1. 역할

- 이 디렉터리는 사이트 전체 공통 프레임을 담당한다.
- `Header.js`, `CustomAppBar.js`, `Footer.js` 수정은 전체 화면에 영향을 준다.

## 2. 메뉴 변경 규칙

- 상단 메뉴 항목을 추가하거나 제거할 때는 모바일 Drawer와 데스크톱 버튼을 함께 수정한다.
- 라우트 이동 경로가 바뀌면 `CustomAppBar.js`의 `navigate` 함수들도 같이 바꾼다.
- 메뉴 라벨과 실제 이동 경로가 서로 어긋나지 않도록 확인한다.

## 3. 헤더 / 푸터 수정 규칙

- 로고, 연락처, 회사명은 공통 정보이므로 임의로 흩어진 위치에 중복 추가하지 않는다.
- 주소나 전화번호 정책이 바뀌면 `Header.js`, `Footer.js`, `MapPage.js`를 함께 확인한다.
- 헤더 높이와 로고 크기를 크게 바꾸면 모든 페이지 첫 화면 간격에 영향이 간다.

## 4. 스타일 규칙

- `Header.js`는 CSS Module과 MUI를 함께 사용한다.
- `CustomAppBar.js`는 MUI와 일부 `styled-components`를 사용한다.
- 공통 UI는 화려한 개별 디자인보다 사이트 전체 일관성을 우선한다.
