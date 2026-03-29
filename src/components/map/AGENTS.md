# AGENTS.md

> `src/components/map` 작업 규칙

## 1. 역할

- Kakao Maps JavaScript SDK 기반으로 회사 위치 지도를 렌더링한다.

## 2. 의존성 규칙

- SDK 스크립트는 `public/index.html`에서 로드한다.
- 여기서는 `window.kakao` 존재를 전제로 동작한다.
- SDK 로딩 위치를 이 파일 안으로 옮기지 않는다.

## 3. 수정 규칙

- 좌표를 바꾸면 마커 위치와 인포윈도우 링크를 함께 수정한다.
- 회사명이나 주소가 바뀌면 `Map.js`만이 아니라 `MapPage.js`, `Header.js`, `Footer.js`도 함께 확인한다.
- 지도 컨테이너 id와 기본 크기를 바꾸면 실제 렌더링 결과를 꼭 확인한다.

## 4. 주의사항

- 지도 문제는 코드 문제만이 아니라 SDK 키, 외부 스크립트 로드, 배포 도메인 설정 문제일 수 있다.
- 지도 깨짐 이슈가 있으면 `public/index.html`과 브라우저 콘솔도 함께 확인한다.
