var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(37.5297133, 126.9647528), // 지도의 중심좌표
        level: 9 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
var positions = [
    {
        content: '<div>토이포커스</div>', 
        latlng: new kakao.maps.LatLng(37.6315428, 126.7861029)
    },
    {
        content: '<div>토이박스 송파점</div>', 
        latlng: new kakao.maps.LatLng(37.4917553, 127.1177857)
    },
    {
        content: '<div>토이박스 서울역점</div>', 
        latlng: new kakao.maps.LatLng(37.5558166, 126.9703942)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스 사하점</div>',
        latlng: new kakao.maps.LatLng(35.0850346, 128.9720975)
    },
    {
        content: '<div>포유키즈(분당점)</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>씽크박스</div>',
        latlng: new kakao.maps.LatLng(37.5104893, 126.8894187)
    },
    {
        content: '<div>토이파크(씽크)</div>',
        latlng: new kakao.maps.LatLng(37.5297133, 126.9647528)
    },
    {
        content: '<div>포유키즈(마리오점)</div>',
        latlng: new kakao.maps.LatLng(37.4806318, 126.8805702)
    },
    {
        content: '<div>알파㈜건대점</div>',
        latlng: new kakao.maps.LatLng(37.5406191, 127.0713688)
    },
    {
        content: '<div>알파㈜</div>',
        latlng: new kakao.maps.LatLng(37.5603638, 126.9765163)
    },
    {
        content: '<div>포유(강남점)</div>',
        latlng: new kakao.maps.LatLng(37.4961236, 127.0404161)
    },
    {
        content: '<div>아셈하비</div>',
        latlng: new kakao.maps.LatLng(37.5116828, 127.059151)
    },
    {
        content: '<div>CNH캐릭터 (센트럴파크점)</div>',
        latlng: new kakao.maps.LatLng(37.503503, 127.0045674)
    },
    {
        content: '<div>CNH캐릭터(종로점)</div>',
        latlng: new kakao.maps.LatLng(37.57079, 126.98356)
    },
    {
        content: '<div>알파 중계점</div>',
        latlng: new kakao.maps.LatLng(37.649542, 127.0763583)
    },
    {
        content: '<div>와치필드</div>',
        latlng: new kakao.maps.LatLng(37.5587572, 126.9448741)
    },
    {
        content: '<div>화인애듀(강남교보점)</div>',
        latlng: new kakao.maps.LatLng(37.5037208, 127.0240967)
    },
    {
        content: '<div>화인애듀(여의도영풍점)</div>',
        latlng: new kakao.maps.LatLng(37.5251644, 126.9255491)
    },
    {
        content: '화인애듀(종로영풍점)</div>',
        latlng: new kakao.maps.LatLng(37.5696304, 126.9821706)
    },
    {
        content: '<div>화인애듀(잠실교보점)</div>',
        latlng: new kakao.maps.LatLng(37.5142479, 127.1012726)
    },
    {
        content: '<div>화곡콤마</div>',
        latlng: new kakao.maps.LatLng(37.5411987, 126.8403437)
    },
    {
        content: '<div>포유(남대문)</div>',
        latlng: new kakao.maps.LatLng(37.5601221, 126.9765898)
    },
    {
        content: '<div>자전거장난감나라</div>',
        latlng: new kakao.maps.LatLng(37.6914826, 126.7497385)
    },
    {
        content: '<div>아지트</div>',
        latlng: new kakao.maps.LatLng(37.3604375, 126.9299469)
    },
    {
        content: '<div>파주첼시아울렛</div>',
        latlng: new kakao.maps.LatLng(37.7691847, 126.6970148)
    },
    {
        content: '<div>여주첼시아울렛</div>',
        latlng: new kakao.maps.LatLng(37.2420669, 127.6127672)
    },
    {
        content: '<div>에이윈즈</div>',
        latlng: new kakao.maps.LatLng(37.756011, 127.0437907)
    },
    {
        content: '<div>프론티어(드림플러스)</div>',
        latlng: new kakao.maps.LatLng(37.6604276, 126.7695979)
    },
    {
        content: '<div>부천씨엔에이</div>',
        latlng: new kakao.maps.LatLng(37.4874717, 126.7837829)
    },
    {
        content: '<div>제주도 토이파크</div>',
        latlng: new kakao.maps.LatLng(33.3190856, 126.3457347)
    },
    {
        content: '<div>한토이 춘천점</div>',
        latlng: new kakao.maps.LatLng(37.8448085, 127.7136852)
    },
    {
        content: '<div>토이저러스 수지점</div>',
        latlng: new kakao.maps.LatLng(37.3125522, 127.0816343)
    },
    {
        content: '<div>토이저러스 삼산점</div>',
        latlng: new kakao.maps.LatLng(37.5079543, 126.7319952)
    },
    {
        content: '<div>토이저러스 청라점</div>',
        latlng: new kakao.maps.LatLng(37.5312717, 126.6486955)
    },
    {
        content: '<div>토이저러스 안산점</div>',
        latlng: new kakao.maps.LatLng(37.3180115, 126.8461214)
    },
    {
        content: '<div>토이박스 판교점</div>',
        latlng: new kakao.maps.LatLng(37.3955596, 127.1133731)
    },
    {
        content: '<div>이마트 와라토이 - 하월곡점</div>',
        latlng: new kakao.maps.LatLng(37.6048142, 127.0309347)
    },
    {
        content: '<div>이마트 천안서북점</div>',
        latlng: new kakao.maps.LatLng(36.8386264, 127.1224198)
    },
    {
        content: '<div>이마트 양산점</div>',
        latlng: new kakao.maps.LatLng(35.3369609, 129.0262743)
    },
    {
        content: '<div>AK플라자 분당점</div>',
        latlng: new kakao.maps.LatLng(37.3852633, 127.123259)
    },
    {
        content: '<div>에버프랜드(수도권총판)</div>',
        latlng: new kakao.maps.LatLng(37.2467756, 126.8887933)
    },
    {
        content: '<div>현대백화점 충청점</div>',
        latlng: new kakao.maps.LatLng(36.6443683, 127.4264979)
    },
    {
        content: '<div>한토이 여주점</div>',
        latlng: new kakao.maps.LatLng(37.2421137, 127.6163334)
    },
    {
        content: '<div>이마트 서수원점</div>',
        latlng: new kakao.maps.LatLng(37.2826703, 126.9701394)
    },
    {
        content: '<div>토이탑 (지방총판)</div>',
        latlng: new kakao.maps.LatLng(37.1207488, 127.029478)
    },
    {
        content: '<div>이마트 통영점</div>',
        latlng: new kakao.maps.LatLng(34.887126, 128.418048)
    },
    {
        content: '<div>토이저러스 제주점</div>',
        latlng: new kakao.maps.LatLng(33.4824201, 126.4819325)
    },
    {
        content: '<div>현대백화점 압구정본점</div>',
        latlng: new kakao.maps.LatLng(37.5273268, 127.0274265)
    },
    {
        content: '<div>한국토이즈 광주본점</div>',
        latlng: new kakao.maps.LatLng(37.3488889, 127.1713889)
    },
    {
        content: '<div>신세계백화점 본점</div>',
        latlng: new kakao.maps.LatLng(37.5611141, 126.9812404)
    },
    {
        content: '<div>신세계백화점 강남점</div>',
        latlng: new kakao.maps.LatLng(37.5041299, 127.0030692)
    },
    {
        content: '<div>신세계백화점 타임스퀘어점</div>',
        latlng: new kakao.maps.LatLng(37.5171482, 126.9055629)
    },
    {
        content: '<div>신세계 경기점</div>',
        latlng: new kakao.maps.LatLng(37.3249213, 127.1081315)
    },
    {
        content: '<div>신세계백화점(인천터미널)</div>',
        latlng: new kakao.maps.LatLng(37.4432605, 126.7016755)
    },
    {
        content: '<div>신세계백화점 충청점</div>',
        latlng: new kakao.maps.LatLng(36.8197484, 127.1567895)
    },
    {
        content: '<div>신세계백화점 센텀시티점</div>',
        latlng: new kakao.maps.LatLng(35.1687032, 129.1297466)
    },
    {
        content: '<div>신세계백화점 천호점</div>',
        latlng: new kakao.maps.LatLng(37.538851, 127.124463)
    },
    {
        content: '<div>현대백화점 신촌점</div>',
        latlng: new kakao.maps.LatLng(37.5559992, 126.9358069)
    },
    {
        content: '<div>현대백화점 미아점</div>',
        latlng: new kakao.maps.LatLng(37.6080757, 127.0288683)
    },
    {
        content: '<div>현대백화점 목동점</div>',
        latlng: new kakao.maps.LatLng(37.5263828, 126.8752357)
    },
    {
        content: '<div>토이저러스 김포공항점</div>',
        latlng: new kakao.maps.LatLng(37.5636432, 126.8038755)
    },
    {
        content: '<div>토이저러스 잠실점</div>',
        latlng: new kakao.maps.LatLng(37.5118851, 127.0978694)
    },
    {
        content: '<div>토이저러스 권선점</div>',
        latlng: new kakao.maps.LatLng(37.2502133, 127.0346673)
    },
    {
        content: '<div>토이저러스 대덕점</div>',
        latlng: new kakao.maps.LatLng(36.4269499, 127.3868538)
    },
    {
        content: '<div>토이저러스 광주수완점</div>',
        latlng: new kakao.maps.LatLng(35.1903337, 126.8208785)
    },
    {
        content: '<div>토이저러스 롯데마트구미점</div>',
        latlng: new kakao.maps.LatLng(36.1137596, 128.3653763)
    },
    {
        content: '<div>토이저러스 대구율하점</div>',
        latlng: new kakao.maps.LatLng(35.8687434, 128.6927972)
    },
    {
        content: '<div>토이저러스 동래점</div>',
        latlng: new kakao.maps.LatLng(35.2115968, 129.0778067)
    },
    {
        content: '<div>토이저러스 진장점</div>',
        latlng: new kakao.maps.LatLng(35.5760407, 129.3589929)
    },
    {
        content: '<div>토이저러스 키즈마트 부산점</div>',
        latlng: new kakao.maps.LatLng(35.163306, 129.0495611)
    },
    {
        content: '<div>현대백화점 킨텍스점</div>',
        latlng: new kakao.maps.LatLng(37.667941, 126.751797)
    },
    {
        content: '<div>더현대 대구</div>',
        latlng: new kakao.maps.LatLng(35.8667125, 128.5906406)
    },
    {
        content: '<div>알파 본점</div>',
        latlng: new kakao.maps.LatLng(37.5601221, 126.9765898)
    },
    {
        content: '<div>현대백화점 무역센터점</div>',
        latlng: new kakao.maps.LatLng(37.5086154, 127.0597808)
    },
    {
        content: '<div>토이박스 부평점</div>',
        latlng: new kakao.maps.LatLng(37.5049264, 126.7040813)
    },
    {
        content: '<div>토이박스 의왕점</div>',
        latlng: new kakao.maps.LatLng(37.3805035, 126.9728853)
    },
    {
        content: '<div>토이박스 평택점</div>',
        latlng: new kakao.maps.LatLng(36.9883806, 127.11173)
    },
    {
        content: '<div>토이박스 고양점</div>',
        latlng: new kakao.maps.LatLng(37.6251676, 126.8362978)
    },
    {
        content: '<div>토이박스 장유점</div>',
        latlng: new kakao.maps.LatLng(35.1930323, 128.8013109)
    },
    {
        content: '<div>토이박스 목포점</div>',
        latlng: new kakao.maps.LatLng(34.7971852, 126.429506)
    },
    {
        content: '<div>토이박스 성정점</div>',
        latlng: new kakao.maps.LatLng(36.8261834, 127.1399744)
    },
    {
        content: '<div>토이박스 서산점</div>',
        latlng: new kakao.maps.LatLng(36.7733491, 126.4392421)
    },
    {
        content: '<div>토이박스 충주점</div>',
        latlng: new kakao.maps.LatLng(36.9814605, 127.9143552)
    },
    {
        content: '<div>토이박스 울산점</div>',
        latlng: new kakao.maps.LatLng(35.5340072, 129.3159148)
    },
    {
        content: '<div>토이박스 첨단점</div>',
        latlng: new kakao.maps.LatLng(35.2173359, 126.8519747)
    },
    {
        content: '<div>토이박스 군산점</div>',
        latlng: new kakao.maps.LatLng(35.9647244, 126.7163921)
    },
    {
        content: '<div>토이박스 화정점</div>',
        latlng: new kakao.maps.LatLng(37.6330518, 126.8315097)
    },
    {
        content: '<div>토이박스 양주점</div>',
        latlng: new kakao.maps.LatLng(37.8274486, 127.0525381)
    },
    {
        content: '<div>토이박스 동두천점</div>',
        latlng: new kakao.maps.LatLng(37.8804864, 127.0532714)
    },
    {
        content: '<div>토이박스 오산점</div>',
        latlng: new kakao.maps.LatLng(37.1494108, 127.0730348)
    },
    {
        content: '<div>토이박스 주엽점</div>',
        latlng: new kakao.maps.LatLng(37.6733388, 126.7553321)
    },
    {
        content: '<div>토이박스 춘천점</div>',
        latlng: new kakao.maps.LatLng(37.8687924, 127.7180194)
    },
    {
        content: '<div>토이박스 안성점</div>',
        latlng: new kakao.maps.LatLng(37.0076786, 127.1993728)
    },
    {
        content: '<div>토이박스 익산점</div>',
        latlng: new kakao.maps.LatLng(35.9590907, 126.9742635)
    },
    {
        content: '<div>이마트 대형매장- 죽전점</div>',
        latlng: new kakao.maps.LatLng(37.3253501, 127.1100725)
    },
    {
        content: '<div>토이박스 장암점</div>',
        latlng: new kakao.maps.LatLng(37.7236292, 127.0530165)
    },
    {
        content: '<div>토이박스 노은점</div>',
        latlng: new kakao.maps.LatLng(36.3843, 127.3216)
    },
    {
        content: '<div>토이박스 화명점</div>',
        latlng: new kakao.maps.LatLng(35.2351857, 129.0130903)
    },
    {
        content: '<div>토이박스 원주점</div>',
        latlng: new kakao.maps.LatLng(37.3456011, 127.9274613)
    },
    {
        content: '<div>토이박스 검단점</div>',
        latlng: new kakao.maps.LatLng(37.5943198, 126.6644513)
    },
    {
        content: '<div>토이박스 상무점</div>',
        latlng: new kakao.maps.LatLng(35.1523232, 126.8524468)
    },
    {
        content: '<div>토이박스 여천점</div>',
        latlng: new kakao.maps.LatLng(34.7767926, 127.6519465)
    },
    {
        content: '<div>토이박스 시티세븐점</div>',
        latlng: new kakao.maps.LatLng(35.2401976, 128.6543374)
    },
    {
        content: '<div>토이박스 서현점</div>',
        latlng: new kakao.maps.LatLng(37.3859761, 127.1205718)
    },
    {
        content: '<div>토이박스 덕소점</div>',
        latlng: new kakao.maps.LatLng(37.584648, 127.2146126)
    },
    {
        content: '<div>토이박스 마석점</div>',
        latlng: new kakao.maps.LatLng(37.650166, 127.3093975)
    },
    {
        content: '<div>토이박스 연수점</div>',
        latlng: new kakao.maps.LatLng(37.4150567, 126.6751684)
    },
    {
        content: '<div>토이박스 시화점</div>',
        latlng: new kakao.maps.LatLng(37.3369196, 126.7297779)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    },
    {
        content: '<div>토이박스샵 웅상점</div>',
        latlng: new kakao.maps.LatLng(35.3152135, 129.0237496)
    }
];

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





// 탭구조
let tabButtons = document.querySelectorAll('.tabbtn > button'); // 탭버튼
Array.from(tabButtons).forEach((eachButton, index) => {
	eachButton.addEventListener('click', function () {
		let tabBoxs = document.querySelectorAll('.contents'); // 탭박스
		for (var i = 0; i < tabBoxs.length; i++) {
			tabBoxs[i].classList.remove("on");
			tabButtons[i].classList.remove("on");
			// 모든 버튼과 박스에서 on제거
		}
		tabBoxs[index].classList.add("on");
		// 내가 누른 탭버튼과 인덱스번호가 같은 탭박스에 class on추가
		this.classList.add("on");
        map.relayout();
        // 클릭이벤트 후에 지도를 다시 잡히게 하기
	});
});
tabButtons[0].click(); // 첫번째 탭 켜기
