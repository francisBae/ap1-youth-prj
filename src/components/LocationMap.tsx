import React from 'react';
import styled from 'styled-components';
import locationMap from '../assets/images/location/location.png';

const LocationContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 40px 20px; /* 상단 마진 추가 */
	font-family: '가톨릭체', Arial, sans-serif; /* 폰트 적용 */
	font-size: 12px;
	margin: 60px;
`;

const MapImage = styled.img`
	margin-top: 30px;
	width: 100%; /* 필요에 따라 크기 조정 */
	max-width: 800px; /* 최대 너비 설정 */
	height: auto; /* 비율 유지 */
	border: 2px solid #ddd; /* 기본 테두리 스타일 */
	//border-radius: 8px; /* 모서리 둥글게 */
	//box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* 음영 효과 */
	transition: transform 0.3s ease; /* 호버 효과를 위한 트랜지션 */

	&:hover {
		transform: scale(1.05); /* 호버 시 확대 효과 */
	}
`;

const LocationMap = () => {
	return (
		<LocationContainer>
			<h1>찾아 오시는 길</h1>
			<MapImage
				src={locationMap}
				alt='우리 위치 지도'
				onClick={() => {
					window.open('https://naver.me/FW6Ogrfo');
				}}
			/>
		</LocationContainer>
	);
};

export default LocationMap;
