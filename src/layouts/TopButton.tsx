// src/components/TopButton.tsx

import TopArrow from '@/components/atoms/icons/TopArrow';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
	position: fixed;
	bottom: 40px; /* 하단에서의 위치 */
	right: 20px; /* 우측에서의 위치 */
	background-color: #4a90e2; /* 버튼 색상 */
	color: white; /* 텍스트 색상 */
	border: none;
	border-radius: 5px;
	padding: 10px 15px;
	cursor: pointer;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	font-size: 16px;
	transition: background-color 0.3s;

	&:hover {
		background-color: #357ab8; /* 마우스 오버 시 색상 변화 */
	}

	&:hidden {
		display: none; /* 숨김 상태 */
	}

	display: flex; /* 중앙 정렬을 위해 Flexbox 사용 */
	align-items: center; /* 세로 중앙 정렬 */
	justify-content: center; /* 가로 중앙 정렬 */
`;

const TopButton: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 150) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	return (
		<>
			{isVisible && (
				<Button onClick={scrollToTop}>
					<TopArrow style={{ width: '16px', height: '16px' }} /> {/* 아이콘 크기 조정 */}
				</Button>
			)}
		</>
	);
};

export default TopButton;
