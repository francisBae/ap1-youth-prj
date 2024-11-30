import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/main/ap1logo.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';

const StyledToolbar = styled(Toolbar)`
	display: flex;
	justify-content: space-between;
	background-color: white; /* GNB 배경색 흰색 */
`;

const LogoContainer = styled.div`
	height: 60px; /* 로고 높이 설정 */
	background-color: white; /* 로고 배경색 흰색 */
	display: flex;
	align-items: center; /* 중앙 정렬 */
	justify-content: center; /* 중앙 정렬 */
`;

const Logo = styled.img`
	height: 40px; /* 로고 크기 조정 */
`;

const MenuButton = styled(IconButton)`
	position: absolute;
	left: 20px;
	top: 5px; /* 햄버거 버튼 살짝 위로 위치 조정 */
`;

const DrawerContainer = styled.div`
	width: 250px; /* Drawer 너비 설정 */
	background-color: #333; /* 어두운 배경색 */
	height: 100%;
	display: flex;
	flex-direction: column; /* 세로로 배치 */
`;

const LogoArea = styled.div`
	background-color: white; /* 흰색 배경 */
	padding: 15px 0; /* 상하 여백 추가 */
	text-align: center; /* 중앙 정렬 */
	position: relative; /* 버튼을 절대 위치시키기 위한 설정 */
`;

const MenuArea = styled.div`
	background-color: #444; /* 회색 배경 */
	flex-grow: 1; /* 남은 공간을 차지하도록 설정 */
	display: flex;
	flex-direction: column; /* 세로로 배치 */
	align-items: flex-start; /* 왼쪽 정렬 */
	padding: 10px; /* 패딩 추가 */
`;

const MenuItem = styled(Link)`
	color: white; /* 메뉴 버튼 글자 색상 흰색 */
	width: 100%; /* 전체 너비 */
	text-align: left; /* 왼쪽 정렬 */
	margin: 5px 0; /* 위아래 여백 추가 */
	padding: 10px; /* 패딩 추가 */
	font-family: '가톨릭체', Arial, sans-serif; /* 폰트 적용 */
	text-decoration: none; /* 기본 링크 스타일 제거 */

	&:hover {
		background-color: #555; /* Hover 시 배경색 변경 */
	}
`;

const Divider = styled.div`
	width: 100%; /* 전체 너비 */
	height: 1px;
	background-color: white; /* 구분선 색상 흰색 */
	margin: 0; /* 여백 제거 */
`;

const CloseButton = styled(IconButton)`
	position: absolute; /* 절대 위치 */
	top: -10px; /* 위쪽 여백 */
	left: 60px; /* 오른쪽 여백 */
	color: white; /* X 버튼 색상 흰색 */
`;

const Header: React.FC = () => {
	const [drawerOpen, setDrawerOpen] = useState(false); // Drawer 상태 관리

	const toggleDrawer = (open: boolean) => () => {
		setDrawerOpen(open);
	};

	return (
		<AppBar position='static'>
			<StyledToolbar>
				<MenuButton onClick={toggleDrawer(true)}>
					<FaBars />
				</MenuButton>
				<LogoContainer>
					<Logo src={logo} alt='압구정1동 청년부 로고' />
				</LogoContainer>
				<Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
					<DrawerContainer>
						<LogoArea>
							<Logo src={logo} alt='압구정1동 청년부 로고' />
							<CloseButton onClick={toggleDrawer(false)}>
								<FaTimes />
							</CloseButton>
						</LogoArea>
						<MenuArea>
							<MenuItem to='/summary'>본당소개</MenuItem>
							<Divider />
							<MenuItem to='/organization'>단체나눔공간</MenuItem>
							<Divider />
							<MenuItem to='/precedent'>정보나눔</MenuItem>
							<Divider />
							<MenuItem to='/gallery'>사진갤러리</MenuItem>
							<Divider />
							<MenuItem to='/location'>찾아오시는길</MenuItem>
							<Divider />
						</MenuArea>
					</DrawerContainer>
				</Drawer>
			</StyledToolbar>
		</AppBar>
	);
};

export default Header;
