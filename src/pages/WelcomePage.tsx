import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import invitationImg from '../assets/images/welcome/invitation.jpg';

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
	transform: translate3d(0, 0, 0);
`;

const Invitation = styled.div<{ isopen: string }>`
	position: relative;
	width: 242px; /* 초대장 너비 */
	height: 264px; /* 초대장 높이 */
	/* border: 1px solid black; */
	background-color: #fffaf4; //뒷면 배경색

	//box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
	perspective: 1000px;
	-webkit-perspective: 1000px;
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	animation: show-invitation 1s; /* 처음에 회전하면서 날아오는 효과 */

	@keyframes show-invitation {
		0% {
			-webkit-transform: translate(-100%, -100%) rotate(480deg);
			transform: translate(-100%, -100%) rotate(480deg);
		}
		100% {
			-webkit-transform: translate(0, 0) rotate(0);
			transform: translate(0, 0) rotate(0);
		}
	}

	/* 클릭 시 아래에서 위로 열리는 효과 및 크기 조정 */
	-ms-transform: ${({ isopen }) =>
		isopen === 'true' ? 'scale(1.2) translateY(120px) rotate(0)' : 'scale(1) translateY(0) rotate(0)'}; /* 열릴 때 크기 조정 및 아래로 이동 */
	-webkit-transform: ${({ isopen }) =>
		isopen === 'true' ? 'scale(1.2) translateY(120px) rotate(0)' : 'scale(1) translateY(0) rotate(0)'}; /* 열릴 때 크기 조정 및 아래로 이동 */
	-moz-transform: ${({ isopen }) =>
		isopen === 'true' ? 'scale(1.2) translateY(120px) rotate(0)' : 'scale(1) translateY(0) rotate(0)'}; /* 열릴 때 크기 조정 및 아래로 이동 */
	-o-transform: ${({ isopen }) =>
		isopen === 'true' ? 'scale(1.2) translateY(120px) rotate(0)' : 'scale(1) translateY(0) rotate(0)'}; /* 열릴 때 크기 조정 및 아래로 이동 */

	transform: ${({ isopen }) =>
		isopen === 'true' ? 'scale(1.2) translateY(120px) rotate(0)' : 'scale(1) translateY(0) rotate(0)'}; /* 열릴 때 크기 조정 및 아래로 이동 */

	-webkit-transition: -webkit-transform 0.5s ease;
	transition: transform 0.5s ease; /* 위치 이동 및 크기 변화 시 애니메이션 효과 */
`;

const Page = styled.div<{ isopen: string }>`
	position: absolute;
	top: 0; /* 상단에 위치 */
	left: 0;
	width: 100%;
	height: 100%;
	-webkit-transition: -webkit-transform 1.1s ease; /* 회전 시 애니메이션 효과 */
	transition: transform 1.1s ease; /* 회전 시 애니메이션 효과 */
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;

	-ms-transform-origin: top; /* 회전 중심을 위쪽으로 설정 */
	-webkit-transform-origin: top; /* 회전 중심을 위쪽으로 설정 */
	-moz-transform-origin: top; /* 회전 중심을 위쪽으로 설정 */
	-o-transform-origin: top; /* 회전 중심을 위쪽으로 설정 */
	transform-origin: top; /* 회전 중심을 위쪽으로 설정 */
	/* border-top: ${({ isopen }) => (isopen ? '1px solid black' : '0px')}; */
	/* -webkit-backface-visibility: hidden;
	backface-visibility: hidden; */
	-webkit-will-change: transform; /* 성능 최적화 */
	will-change: transform; /* 성능 최적화 */
	/* 클릭 시 회전 효과 */
`;

// 카드 컴포넌트
const FacePageFront: React.FC = () => (
	<FrontContainer>
		{/* <p>당신을 초대합니다.</p>
		<p>2024년 12월 29일(일)</p> */}
		{/* <img src={invitationImg} /> */}
		<InvitationCard>
			<InvitationTitle>Invitation</InvitationTitle>
			<InvitationDate>2024년 12월 29일</InvitationDate>
		</InvitationCard>
	</FrontContainer>
);

const FacePageBack: React.FC = () => (
	<>
		<BackContainer>
			<Title>2024 홈커밍데이</Title>
			{/* <br /> */}

			<img src='https://img.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg' alt='크리스마스 트리' width={'180px'} />
			{/* <br /> */}
		</BackContainer>
	</>
);

const InvitationContent = ({ isopen }: { isopen: boolean }) => {
	// const navigate = useNavigate();

	return (
		// <ContentContainer>

		<InvitationContainer>
			{/* <Title>2024 홈커밍데이</Title> */}
			<Subtitle>초대장</Subtitle>

			<Content>
				2024년 홈커밍데이에 초대합니다.
				<br />한 해를 마무리하는 지금,
				<br />
				함께 모여 소중한 추억을 나눠요.
			</Content>
			<DateTime>일시: 2024.12.29 6시 청년미사 후</DateTime>
			<Location>장소: 압구정1동 성당 2층 파티마홀</Location>
			<StyledButton
				isopen={isopen.toString()}
				onClick={() => {
					// navigate('/main');
					window.open('https://docs.google.com/forms/d/e/1FAIpQLSfIxt5hfI-nV3xe_-qDvfZjDXQ27r1nXb-bO51fFXcjCNaD7A/viewform?usp=sf_link');
				}}
			>
				함께하기
			</StyledButton>
		</InvitationContainer>
	);
};

const InvitationContainer = styled.div`
	width: 242px;
	height: 264px;
	margin-top: 12px;
	//border: 2px solid #4a90e2; /* 테두리 색상 */
	/* border-radius: 10px; 모서리 둥글게 */
	padding: 16px;
	//box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
	/* font-family: '나눔고딕', 'Arial', sans-serif; */
	font-family: 'Pretendard', Arial, sans-serif; /* 폰트 적용 */

	text-align: center;
	//background-color: #f9f9f9; /* 배경색 */

	//transform: translateZ(0) rotateX(0); /* 위로 90도 회전하여 숨김 */
`;

const Title = styled.h1`
	font-size: 18px;
	font-weight: 600;
	color: #b62a60; /* 제목 색상 */
	font-family: 'PretendardSemiBold', Arial, sans-serif; /* 폰트 적용 */

	margin: 0 0 10px 0;
	/* margin */
`;

const Subtitle = styled.h2`
	font-size: 20px;
	font-family: 'PretendardSemiBold', Arial, sans-serif; /* 폰트 적용 */

	color: #333;
	margin: 0;
`;

const Content = styled.p`
	font-size: 11px;
	color: #555;
	margin: 12px 0 20px 0;
`;

const DateTime = styled.p`
	font-size: 12px;
	color: #333;
	margin: 4px 0;
	font-weight: 600;
	font-family: 'PretendardSemiBold', Arial, sans-serif; /* 폰트 적용 */
`;

const Location = styled.p`
	font-size: 12px;
	color: #333;
	margin: 4px 0;
	font-weight: 600;
	font-family: 'PretendardSemiBold', Arial, sans-serif; /* 폰트 적용 */
`;

// 스타일 컴포넌트 추가
const FrontContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	/* -webkit-backface-visibility: hidden;
	backface-visibility: hidden; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white; /* 앞면 배경색 */
	transform: translate3d(0, 0, 0) rotateX(0);
`;

// const FrontContainer = styled.div`
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100%;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;
// 	background-color: white; /* 앞면 배경색 */
// 	transform: translate3d(0, 0, 0) rotateX(0);
// `;

const InvitationCard = styled.div`
	width: 200px; /* 실제 내용의 너비 */
	height: 242px; /* 실제 내용의 높이 */
	background-color: white;
	border: 2px solid black; /* 검은 선 테두리 굵기 증가 */
	padding: 16px; /* 패딩 추가 */
	box-sizing: border-box; /* 박스 모델 설정 */
	display: flex;
	flex-direction: column;
	justify-content: center; /* 중앙 정렬 */
	align-items: center;
	font-family: '가톨릭체', sans-serif; /* 폰트 설정 */
`;

const InvitationTitle = styled.h2`
	margin: 0;
	margin-bottom: 50px; /* 아래쪽 여백 조정 (간격 늘리기) */
	font-weight: bold; /* 볼드체 설정 */
`;

const InvitationDate = styled.p`
	margin: 0;
`;
const BackContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	/* padding: 10px; */
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #fffaf4; //뒷면 배경색
	-moz-transform: translateZ(0) rotateX(180deg); /* 위로 90도 회전하여 숨김 */
	-webkit-transform: translateZ(0) rotateX(180deg); /* 위로 90도 회전하여 숨김 */
	-ms-transform: translateZ(0) rotateX(180deg); /* 위로 90도 회전하여 숨김 */
	-o-transform: translateZ(0) rotateX(180deg); /* 위로 90도 회전하여 숨김 */
	transform: translateZ(0) rotateX(180deg); /* 위로 90도 회전하여 숨김 */
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
	/* border: none; 테두리 제거 */
	border-radius: 8px;
	border-style: none;
	/* box-shadow: 0 0 10px; */
	/* border-radius: 5px; 모서리 둥글게 */
	padding: 8px 12px; /* 안쪽 여백 */
	/* padding-bottom: ; */
	cursor: pointer; /* 커서 모양 변경 */
	font-size: 16px;
	transition: background-color ease 0.3s ease; /* 배경색 변화 애니메이션 */
	-webkit-transition: background-color ease 0.3s ease; /* 배경색 변화 애니메이션 */
	opacity: ${({ isopen }) => (isopen === 'true' ? 1 : 0)}; /* -90도 회전하여 위로 열리는 효과 */
`;

const WelcomePage: React.FC = () => {
	const [isopen, setIsopen] = useState(false);
	// const navigate = useNavigate();

	const isAnimating = useRef(false);
	const isOpenRef = useRef(false);

	useEffect(() => {
		const page = document.getElementById('page'); // DOM 요소 선택
		if (!page) return;
		page.style.transform = 'rotateX(0)';
	}, []);

	const handleClick = () => {
		// if (isopen) return;

		if (isopen) return;

		if (isAnimating.current) return;
		isAnimating.current = true;

		isOpenRef.current = !isOpenRef.current;

		const page = document.getElementById('page'); // DOM 요소 선택
		if (!page) return;
		//TODO : 아이폰 이슈면 그냥 반대로 먹여보기
		page.style.transform = !isopen ? 'rotateX(180deg)' : 'rotateX(0)';

		setIsopen(!isopen); // 클릭 시 상태 변경
	};

	useEffect(() => {
		// setTimeout(() => {
		// }, 5000);

		setTimeout(() => {
			// console.log("1초 지연.");
			handleClick();
		}, 1000);
	}, []);

	useEffect(() => {
		isAnimating.current = false;
	}, [isopen]);

	// useEffect(() => {

	// }, []); // 빈 배열로 의존성 설정

	return (
		<Container>
			<Invitation isopen={isOpenRef.current.toString()} onClick={handleClick}>
				<Page id='page' isopen={isOpenRef.current.toString()}>
					<FacePageFront />
					<FacePageBack />
				</Page>
				<StyledHr />
				<InvitationContent isopen /> {/* 펼쳐졌을 때 보여지는 내용 */}
				{/* 당신을 초대합니다 */}
				{/* {isopen && ( */}
				{/* )} */}
			</Invitation>
		</Container>
	);
};

export default WelcomePage;
