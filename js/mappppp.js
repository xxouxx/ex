// var container = document.getElementById('map');
// var options = {
//     center: new kakao.maps.LatLng(33.450701, 126.570667),
//     level: 3
// };

// var map = new kakao.maps.Map(container, options);






var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(37.5406191, 127.0713688),
        // center: positions[0].latlng, // 지도의 중심좌표
        level: 10 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
    {
        content: '<div>알파(주)건대점</div>',
        // title: '알파(주)건대점', 
        latlng: new kakao.maps.LatLng(37.5406191, 127.0713688)
    },
    {
        // title: '포유키즈(마리오점)', 
        content: '<div>포유키즈(마리오점)</div>',
        latlng: new kakao.maps.LatLng(37.4785992, 126.8851547)
    },
    {
        // title: '토이박스 송파점', 
        content: '<div>토이박스 송파점',
        latlng: new kakao.maps.LatLng(37.4917553, 127.1177857)
    },
    {
        // title: '토이포커스',
        content: '<div>토이포커스</div>',
        latlng: new kakao.maps.LatLng(37.631888, 126.7865029)
    },
    {
        // title: '화인애듀(강남교보점)',
        content: '<div>화인애듀(강남교보점)</div>',
        latlng: new kakao.maps.LatLng(37.5037059, 127.0241346)
    },
    {
        // title: '와치필드',
        content: '<div>와치필드</div>',
        latlng: new kakao.maps.LatLng(37.5587572, 126.9448741)
    },
    {
        // title: '그린오피스(중계점)',
        content: '<div>그린오피스(중계점)</div>',
        latlng: new kakao.maps.LatLng(37.5193749, 127.0351875)
    },
    {
        // title: '화인애듀(여의도영풍점)',
        content: '<div>화인애듀(여의도영풍점)</div>',
        latlng: new kakao.maps.LatLng(37.5259791, 126.9258273)
    },
    {
        // title: '화인애듀(종로영풍점)',
        content: '<div>화인애듀(종로영풍점)</div>',
        latlng: new kakao.maps.LatLng(37.5696304, 126.9821706)
    },
    {
        // title: '화인애듀(잠실교보점)',
        content: '<div>화인애듀(잠실교보점)</div>',
        latlng: new kakao.maps.LatLng(37.5142479, 127.1012726)
    },
    {
        // title: '자전거장난감나라',
        content: '<div>자전거장난감나라</div>',
        latlng: new kakao.maps.LatLng(37.6914826, 126.7497385)
    },
    {
        // title: '파주첼시아울렛',
        content: '<div>파주첼시아울렛</div>',
        latlng: new kakao.maps.LatLng(37.7691847, 126.6970148)
    },
    // {
    //     // title: '여주첼시아울렛',
    //     content: '<div>여주첼시아울렛</div>',
    //     latlng: new kakao.maps.LatLng(37.2420391, 127.6127551)
    // },
    {
        // title: '토이저러스 수지점',
        content: '<div>토이저러스 수지점</div>',
        latlng: new kakao.maps.LatLng(37.3125522, 127.0816343)
    }
    
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
// for (var i = 0; i < positions.length; i ++) {
    
//     // 마커 이미지의 이미지 크기 입니다
//     var imageSize = new kakao.maps.Size(24, 35); 
    
//     // 마커 이미지를 생성합니다    
//     var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
//     // 마커를 생성합니다
//     var marker = new kakao.maps.Marker({
//         map: map, // 마커를 표시할 지도
//         position: positions[i].latlng, // 마커를 표시할 위치
//         title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
//         image : markerImage // 마커 이미지 
//     });
    
// }
for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
    });

    // 마커에 표시할 인포윈도우를 생성합니다 
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
    });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}




// 크루혜택 탭구조
let tabButtons = document.querySelectorAll('.tabButton > button'); // 탭버튼
Array.from(tabButtons).forEach((eachButton, index) => {
	eachButton.addEventListener('click', function () {
		let tabBoxs = document.querySelectorAll('.benefit'); // 탭박스
		for (var i = 0; i < tabBoxs.length; i++) {
			tabBoxs[i].classList.remove("on");
			tabButtons[i].classList.remove("on");
			// 모든 버튼과 박스에서 on제거
		}
		tabBoxs[index].classList.add("on");
		// 내가 누른 탭버튼과 인덱스번호가 같은 탭박스에 class on추가
		this.classList.add("on");
	});
});
tabButtons[0].click(); // 첫번째 탭 켜기


