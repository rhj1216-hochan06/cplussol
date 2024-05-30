import React, { useEffect } from "react";
const { kakao } = window;
const Map = () => {
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      center: new kakao.maps.LatLng(37.46877499136315, 126.88754810027754), //지도의 중심좌표.
      level: 2,
    };

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    //마커가  표시될 위치
    let markerPosition = new kakao.maps.LatLng(
      37.46877499136315,
      126.88754810027754
    );
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    var iwContent =
      '<div style="padding:5px;">씨플러스 솔루션<br><a href="https://kko.to/XBX0AplYXh" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/씨플러스솔루션,37.46877499136315,126.88754810027754" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwPosition = new kakao.maps.LatLng(37.46877499136315, 126.88754810027754); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);
  }, []);

  return (
    <>
      <div id="map" style={{ width: "100vh", height: "60vh" }}></div>
    </>
  );
};

export default Map;
