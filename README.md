<h1>하루건강<br></br></h1>

<h3>🔖 프로젝트 개요</h3>
   
<h4>1. 프로젝트 주제</h4>
건강기능식품정보 및 의약품개요정보 API를 활용한 영양제 정보 제공 반응형 웹서비스
<h4>2. 프로젝트 목표</h4>
• 영양제를 섭취하거나 섭취하고자 하는 소비자가 필요로 하는 정보(성분, 주의사항, 섭취방법 등)을 직관적이면서도 쉬운 UI로 제공하는 영양제 정보 제공 웹사이트 개발<br></br>
• 정보를 통합하고 사용자가 꼭 필요로 하며 많이 검색하는 정보가 무엇인지 데이터를 분석하여 소비자가 원하는 정보를 빠르고 쉽게 제공<br></br>
• 분석 데이터를 다양한 그래프, 그래픽을 활용하여 사용자가 쉽게 이해할 수 있도록 시각화
<h4>3. 프로젝트 기간</h4>
• 2023.05.27 ~ 2023.06.27

<h3>🔖 주요기능</h3>

1. 간단 설문조사를 통한 영양성분 추천
2. 크롤링을 통해 정보 수집 → 데이터 가공하여 화면 구현
3. 네이버 쇼핑 API 활용하여 해당 영양성분에 대한 상위 랭킹 제품 리스트업 및 제품 상세 정보 제공
4. 제품 찜하기 후 장바구니에 담기 → 그래프, 테이블을 활용하여 제품 비교
5. SNS로그인 (네이버, 카카오, 구글)

<br></br>
<h3>🔖 시연영상</h3>
   
https://github.com/2023-SMHRD-SW-Fullstack-1/HaruGungang/assets/130349912/77bf6a63-1731-4b6d-ac1b-d585714c0231


<br></br>  
<h3>🔖 개발환경</h3>
<img width="1000px" src="https://github.com/2023-SMHRD-SW-Fullstack-1/HaruGungang/assets/130349912/d1fb6d57-eeaa-4b82-ab79-4fd172f0ecc0"/>

<br></br>  
<h3>🔖 유스케이스</h3>
<img width="1000px" src="https://github.com/2023-SMHRD-SW-Fullstack-1/HaruGungang/assets/130349912/d1fb6d57-eeaa-4b82-ab79-4fd172f0ecc0"/>

<br></br>
<h3>🔖 웹구성도</h3>
<img width="1000px" src="https://github.com/2023-SMHRD-SW-Fullstack-1/HaruGungang/assets/130349912/e7f2d1f9-69d2-4fba-9534-c96fb124fe3c"/>

<br></br>  
<h3>🔖 ER DIAGRAM</h3>
<img width="1000px" src="https://github.com/2023-SMHRD-SW-Fullstack-1/HaruGungang/assets/130349912/d1fb6d57-eeaa-4b82-ab79-4fd172f0ecc0"/>

<br></br>
<h3>🔖 업무분담</h3>
<img width="1000px" src="https://github.com/2023-SMHRD-SW-Fullstack-1/HaruGungang/assets/130349912/1b6787f2-c821-4a0f-af1a-0cf247fa0f69"/>
<h4>신지영(팀장)</h4> 
- 기획 : 목업 제작<br></br>
- 리액트 템플릿 적용 > 최신 문법 적용 (react-router-dom 5ver > 6ver)<br></br>
- 설문조사 페이지 : 설문 조사 진행 및 결과(영양성분 추천) 로직 코드 작성 및 화면 구현<br></br>
- 메인페이지 : 성별, 연령 선택 필터 기능 구현 및 필터 선택 후 성별/연령별 추천 영양성분 파이 차트로 보여주는 기능 구현<br></br>
- 영양성분 상세페이지 : 영양성분DB에서 정보 불러와 화면에 카드 형식으로 구현<br></br>
- 제품 상세페이지 : 제품DB에서 정보 불러와 카드 형식으로 화면 구현, 찜하기 버튼 클릭시 위시리스트에 저장되도록 기능 구현 및 DB 저장, 찜하기 취소 기능 구현<br></br>
- 위시리스트 : DB에 저장된 위시리스트를 불러와 카드 형태로 화면 구현, 각 제품을 기능성별로 분류하여 배치<br></br>
- 동일 영양성분군 비교하기 & 서로 다른 영양성분 종합 정보 조회 : 위시리스트에서 체크박스로 선택한 1~3개의 상품을 하나의 페이지에서 비교할 수 있도록 화면 구현, DB에 저장된 정보를 rechart라이브러리로 구현할 수 있도록 데이터 가공, rechars 및 테이블 활용하여 제품 비교 페이지 구현<br></br>
- 결과 발표<br></br>
<h4>서현록</h4> 
<h4>김신영</h4> 
<h4>안영석</h4> 

