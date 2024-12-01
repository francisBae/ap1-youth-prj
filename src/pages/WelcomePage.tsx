import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// 스타일 컴포넌트
const Container = styled.div`
	display: flex; /* Flexbox를 사용하여 중앙 정렬 */
	justify-content: center; /* 수평 중앙 정렬 */
	align-items: center; /* 수직 중앙 정렬 */
	height: 100vh; /* 화면 높이의 100% */
	max-width: 600px; /* 최대 너비 600px */
	margin: 0 auto; /* 중앙 정렬을 위한 여백 */
	perspective: 1000px; /* 3D 효과를 위한 perspective 설정 */
`;

const Invitation = styled.div<{ isOpen: boolean }>`
	position: relative;
	width: 200px; /* 초대장 너비 */
	height: 200px; /* 초대장 높이 */
	border: 1px solid black;
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
	transform: ${({ isOpen }) => (isOpen ? 'scale(1.1) translateY(20px)' : 'scale(1) translateY(0)')}; /* 열릴 때 크기 조정 및 아래로 이동 */
	transition: transform 0.5s ease; /* 위치 이동 및 크기 변화 시 애니메이션 효과 */
`;

const Page = styled.div<{ isOpen: boolean }>`
	position: absolute;
	top: 0; /* 상단에 위치 */
	left: 0;
	width: 100%;
	height: 100%;
	transition: transform 0.5s ease; /* 회전 시 애니메이션 효과 */
	transform-style: preserve-3d;
	transform-origin: top; /* 회전 중심을 위쪽으로 설정 */

	/* 클릭 시 회전 효과 */
	transform: ${({ isOpen }) => (isOpen ? 'rotateX(180deg)' : 'rotateX(0)')}; /* -90도 회전하여 위로 열리는 효과 */
`;

// 카드 컴포넌트
const FacePageFront: React.FC = () => (
	<FrontContainer>
		<p>당신을 초대합니다.</p>
		<p>2024년 12월 29일(일)</p>
	</FrontContainer>
);

const FacePageBack: React.FC = () => (
	<BackContainer>
		<img src='https://img.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg' alt='크리스마스 트리' width={'180px'} />
	</BackContainer>
);

const InvitationContent: React.FC = () => (
	<ContentContainer>
		<p>초대장</p>
	</ContentContainer>
);

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
	background-color: blue; /* 뒷면 배경색 */
	transform: rotateX(180deg); /* 위로 90도 회전하여 숨김 */
`;

const ContentContainer = styled.div`
	position: absolute;
	top: 150px; /* V 체크한 곳의 Y좌표에 맞게 조정 */
	left: 50%; /* 수평 중앙 정렬 */
	transform: translateX(-50%); /* 수평 중앙 정렬을 위한 변환 */
	width: 100%;
	backface-visibility: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: lightgrey; /* 펼쳐졌을 때 배경색 */
`;

const WelcomePage: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	const handleClick = () => {
		setIsOpen(!isOpen); // 클릭 시 상태 변경
	};

	return (
		<Container>
			<Invitation isOpen={isOpen} onClick={handleClick}>
				{isOpen && (
					<Button
						onClick={() => {
							navigate('/');
						}}
					>
						메인으로 가기
					</Button>
				)}
				<Page isOpen={isOpen}>
					<FacePageFront />
					<FacePageBack />
				</Page>
				{isOpen && <InvitationContent />} {/* 펼쳐졌을 때 보여지는 내용 */}
				{/* 당신을 초대합니다 */}
			</Invitation>
		</Container>
	);
};

export default WelcomePage;
