import React,{useEffect} from "react";
const {kakao}=window;
const Map = () => {
    useEffect(()=>{
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { 
            center: new kakao.maps.LatLng(37.46877499136315, 126.88754810027754), //지도의 중심좌표.
            level: 3 
        };
        
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        //마커가  표시될 위치
        let markerPosition = new kakao.maps.LatLng(
            37.46877499136315,
            126.88754810027754
          );
        let marker = new kakao.maps.Marker({
            position:markerPosition,
        })
        marker.setMap(map);
    },[])
    

  return (
    <>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
      
    </>
  );
};

export default Map;
