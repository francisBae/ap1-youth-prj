import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ChurchIcon from './atoms/icons/ChurchIcon';
import Bulletin from './atoms/icons/Bulletin';
import PrayingHands from './atoms/icons/PrayingHands';
import CommunityIcon from './atoms/icons/CommunityIcon';

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px; /* 카드 간의 간격을 10px로 조정 (가로 및 세로 동일) */
	max-width: 300px;
	//margin: auto; /* 중앙 정렬 */
	margin: 60px auto;
	//padding: 75px; /* 전체 여백 */
	justify-items: center; /* 카드가 가운데 정렬되도록 설정 */
	/* padding: 30px; */
`;

const Card = styled.div`
	background-color: #f0f0f0; /* 기본 배경색 */
	//border-radius: 15px; /* 둥근 모서리 */
	padding: 16px; /* 패딩 조정 */
	text-align: center;
	transition: background-color 0.3s, color 0.3s; /* 부드러운 전환 효과 */
	min-width: 140px; /* 카드 가로 길이 조정 */
	max-width: 240px; /* 카드 가로 길이 조정 */
	aspect-ratio: 1; /* 정사각형 유지 */
	height: auto; /* 카드 높이 조정 */
	display: flex; /* Flexbox를 사용하여 내용 정렬 */
	flex-direction: column; /* 세로 방향으로 정렬 */
	justify-content: center; /* 세로 중앙 정렬 */
	align-items: center; /* 가로 중앙 정렬 */

	&:hover {
		background-color: #4a90e2; /* 마우스 오버 시 배경색 */
		color: white; /* 마우스 오버 시 텍스트 색상 */
	}
`;

const Title = styled.h2`
	margin: 8px 0; /* 제목 여백 */
	font-size: 14px; /* 글자 크기 유지 */
`;

const MainIntro: React.FC = () => {
	const contents = [
		{ title: '본당 소개', icon: <ChurchIcon /> },
		{ title: '주보', icon: <Bulletin /> },
		{ title: '미사 시간', icon: <PrayingHands /> },
		{ title: '모임 안내', icon: <CommunityIcon /> }
	];

	return (
		<Container data-aos='fade-up' data-aos-duration='800' data-aos-easing='ease-out'>
			{contents.map((content, index) => (
				<Card key={index}>
					{content.icon} {/* SVG 이미지 */}
					<Title>{content.title}</Title>
				</Card>
			))}
		</Container>
	);
};

export default MainIntro;
