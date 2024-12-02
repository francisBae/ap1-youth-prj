import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import invitationImg from '../assets/images/welcome/invitation.jpg';

// 스타일 컴포넌트
const Container = styled.div`
	display: flex; /* Flexbox를 사용하여 중앙 정렬 */
	justify-content: center; /* 수평 중앙 정렬 */
	align-items: center; /* 수직 중앙 정렬 */
	height: 100vh; /* 화면 높이의 100% */
	max-width: 600px; /* 최대 너비 600px */
	margin: 0 auto; /* 중앙 정렬을 위한 여백 */
	perspective: 1000px; /* 3D 효과를 위한 perspective 설정 */
	background-color: #eaeaea; /* 앞면 배경색 */
`;

const Invitation = styled.div<{ isopen: string }>`
	position: relative;
	width: 220px; /* 초대장 너비 */
	height: 240px; /* 초대장 높이 */
	/* border: 1px solid black; */
	background-color: #fffaf4; //뒷면 배경색

	//box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
	perspective: 1000px;
	transform-style: preserve-3d;
	animation: show-invitation 1s; /* 처음에 회전하면서 날아오는 효과 */

	@keyframes show-invitation {
		0% {
			transform: translate(-100%, -100%) rotate(480deg);
		}
		100% {
			transform: translate(0, 0) rotate(0);
		}
	}

	/* 클릭 시 아래에서 위로 열리는 효과 및 크기 조정 */
	transform: ${({ isopen }) =>
		isopen === 'true' ? 'scale(1.2) translateY(120px)' : 'scale(1) translateY(0)'}; /* 열릴 때 크기 조정 및 아래로 이동 */
	transition: transform 0.5s ease; /* 위치 이동 및 크기 변화 시 애니메이션 효과 */
`;

const Page = styled.div<{ isopen: string }>`
	position: absolute;
	top: 0; /* 상단에 위치 */
	left: 0;
	width: 100%;
	height: 100%;
	transition: transform 1.1s ease; /* 회전 시 애니메이션 효과 */
	transform-style: preserve-3d;
	transform-origin: top; /* 회전 중심을 위쪽으로 설정 */
	/* border-top: ${({ isopen }) => (isopen ? '1px solid black' : '0px')}; */

	/* 클릭 시 회전 효과 */
	transform: ${({ isopen }) => (isopen === 'true' ? 'rotateX(-180deg)' : 'rotateX(0)')}; /* -90도 회전하여 위로 열리는 효과 */
`;

// 카드 컴포넌트
const FacePageFront: React.FC = () => (
	<FrontContainer>
		{/* <p>당신을 초대합니다.</p>
		<p>2024년 12월 29일(일)</p> */}
		<img src={invitationImg} />
	</FrontContainer>
);

const FacePageBack: React.FC = () => (
	<BackContainer>
		<img src='https://img.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg' alt='크리스마스 트리' width={'180px'} />
	</BackContainer>
);

const InvitationContent = ({ isopen }: { isopen: boolean }) => {
	const navigate = useNavigate();

	return (
		// <ContentContainer>

		<InvitationContainer>
			<Title>2024 홈커밍데이</Title>
			<Subtitle>초대장</Subtitle>
			<Content>
				2024년 홈커밍데이에 초대합니다.
				<br />한 해를 마무리하는 지금, 함께 모여 소중한 추억을 나눠요.
			</Content>
			<DateTime>일시: 2024.12.29 6시 청년미사 후</DateTime>
			<Location>장소: 압구정1동 성당 2층 파티마홀</Location>
			<StyledButton
				isopen={isopen.toString()}
				onClick={() => {
					navigate('/main');
				}}
			>
				함께하기
			</StyledButton>
		</InvitationContainer>
	);
};

const InvitationContainer = styled.div`
	width: 220px;
	height: 240px;
	margin-top: 22px;
	//border: 2px solid #4a90e2; /* 테두리 색상 */
	/* border-radius: 10px; 모서리 둥글게 */
	padding: 16px;
	//box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
	font-family: '나눔고딕', 'Arial', sans-serif;

	text-align: center;
	//background-color: #f9f9f9; /* 배경색 */
`;

const Title = styled.h1`
	font-size: 15px;
	font-weight: 600;
	color: #b62a60; /* 제목 색상 */
	margin: 0;
`;

const Subtitle = styled.h2`
	font-size: 14px;

	color: #333;
	margin: 10px 0;
`;

const Content = styled.p`
	font-size: 11px;
	color: #555;
	margin: 10px 0;
`;

const DateTime = styled.p`
	font-size: 10px;
	color: #333;
	margin: 4px 0;
	font-weight: 600;
`;

const Location = styled.p`
	font-size: 10px;
	color: #333;
	margin: 4px 0;
	font-weight: 600;
`;

// 스타일 컴포넌트 추가
const FrontContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white; /* 앞면 배경색 */
`;

const BackContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fffaf4; //뒷면 배경색
	transform: rotateX(180deg); /* 위로 90도 회전하여 숨김 */
`;

const StyledHr = styled.hr`
	border: none; /* 기본 테두리 제거 */
	height: 0.5px; /* 높이 설정 */
	background-color: #e0e3d5; /* 색상 설정 */
	/* margin: 20px 0; 상하 여백 설정 */
	border-radius: 5px; // 모서리 둥글게
`;
// const ContentContainer = styled.div`
// 	position: absolute;
// 	top: 150px; /* V 체크한 곳의 Y좌표에 맞게 조정 */
// 	left: 50%; /* 수평 중앙 정렬 */
// 	transform: translateX(-50%); /* 수평 중앙 정렬을 위한 변환 */
// 	width: 100%;

// 	backface-visibility: hidden;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	background-color: #fffaf4; //뒷면 배경색
// `;

const StyledButton = styled.button<{ isopen: string }>`
	margin-top: 10px;
	background-color: #d3a775; /* 배경색 */
	color: white; /* 글자색 */
	border: none; /* 테두리 제거 */
	/* border-radius: 5px; 모서리 둥글게 */
	padding: 4px 8px; /* 안쪽 여백 */
	cursor: pointer; /* 커서 모양 변경 */
	font-size: 11px;
	transition: background-color ease 0.3s ease; /* 배경색 변화 애니메이션 */

	opacity: ${({ isopen }) => (isopen === 'true' ? 1 : 0)}; /* -90도 회전하여 위로 열리는 효과 */
`;

const WelcomePage: React.FC = () => {
	const [isopen, setIsopen] = useState(false);
	// const navigate = useNavigate();

	const isAnimating = useRef(false);

	const handleClick = () => {
		// if (isopen) return;

		if (isAnimating.current) return;
		isAnimating.current = true;

		setIsopen(!isopen); // 클릭 시 상태 변경
	};

	useEffect(() => {
		isAnimating.current = false;
	}, [isopen]);

	return (
		<Container>
			<Invitation isopen={isopen.toString()} onClick={handleClick}>
				<Page isopen={isopen.toString()}>
					<FacePageFront />
					<FacePageBack />
				</Page>
				<StyledHr />
				{isopen && <InvitationContent isopen />} {/* 펼쳐졌을 때 보여지는 내용 */}
				{/* 당신을 초대합니다 */}
				{/* {isopen && ( */}
				{/* )} */}
			</Invitation>
		</Container>
	);
};

export default WelcomePage;
