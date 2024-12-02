import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/main/ap1logo.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';

const StyledToolbar = styled(Toolbar)`
	display: flex;
	justify-content: space-between;
	background-color: white; /* GNB 배경색 흰색 */
	height: 60px;
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

const DrawerLogo = styled.img`
	height: 50px; /* 로고 크기 조정 */
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

// const MenuItem = styled(Link)`
// 	color: white; /* 메뉴 버튼 글자 색상 흰색 */
// 	width: 100%; /* 전체 너비 */
// 	text-align: left; /* 왼쪽 정렬 */
// 	margin: 5px 0; /* 위아래 여백 추가 */
// 	padding: 10px; /* 패딩 추가 */
// 	font-family: '가톨릭체', Arial, sans-serif; /* 폰트 적용 */
// 	text-decoration: none; /* 기본 링크 스타일 제거 */

// 	&:hover {
// 		background-color: #555; /* Hover 시 배경색 변경 */
// 	}
// `;

const MenuItem = styled.div<{ isOpen: boolean }>`
	color: white; /* 메뉴 버튼 글자 색상 흰색 */
	width: 100%; /* 전체 너비 */
	text-align: left; /* 왼쪽 정렬 */
	margin: 5px 0; /* 위아래 여백 추가 */
	padding: 10px; /* 패딩 추가 */
	font-family: '나눔고딕', Arial, sans-serif; /* 폰트 적용 */
	text-decoration: none; /* 기본 링크 스타일 제거 */
	cursor: pointer;

	&:hover {
		/* background-color: #555; Hover 시 배경색 변경 */
	}
`;

const SubMenu = styled.div<{ isOpen: boolean }>`
	background-color: rgb(85, 85, 85); /* 소메뉴 배경색 */
	padding: 0; /* 패딩 제거 */
	width: 100%;
	//transform: ${({ isOpen }) => (isOpen ? 'scaleY(1)' : 'scaleY(0)')}; /* 펼쳐지는 효과 */
	//transform-origin: top; /* 위쪽에서부터 확장 */
	//max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')}; /* 필요에 따라 높이 조정 */

	//transition: max-height 0.3s ease, transform 0.3s ease; /* 애니메이션 효과 */
	//overflow: hidden; /* 내용이 넘칠 경우 숨기기 */
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)}; /* 슬라이드 효과를 위한 투명도 조정 */

	max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')}; /* 필요에 따라 높이 조정 */
	overflow: hidden; /* 내용이 넘칠 경우 숨기기 */
`;

const SubMenuItem = styled(Link)`
	color: white; /* 소메뉴 버튼 글자 색상 흰색 */
	display: block; /* 블록 형태로 표시 */
	padding: 10px 20px; /* 패딩 추가 */
	text-decoration: none; /* 기본 링크 스타일 제거 */

	&:hover {
		background-color: rgba(255, 255, 255, 0.1); /* Hover 시 배경색 변경 */
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
	const navigate = useNavigate();

	const [drawerOpen, setDrawerOpen] = useState(false); // Drawer 상태 관리

	const [openSubMenu, setOpenSubMenu] = useState<string | null>(null); // 소메뉴 상태 관리

	useEffect(() => {
		if (!drawerOpen) {
			setOpenSubMenu(null); // 클릭한 메뉴의 소메뉴 열기/닫기
		}
	}, [drawerOpen]);

	const toggleDrawer = (open: boolean) => () => {
		setDrawerOpen(open);
	};

	const handleMenuClick = (menu: string) => {
		setOpenSubMenu(prev => (prev === menu ? null : menu)); // 클릭한 메뉴의 소메뉴 열기/닫기
	};

	return (
		<AppBar position='static'>
			<StyledToolbar>
				<MenuButton onClick={toggleDrawer(true)}>
					<FaBars />
				</MenuButton>
				<LogoContainer>
					<Logo src={logo} alt='압구정1동 청년부 로고' onClick={() => navigate('/')} />
				</LogoContainer>
				<Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
					<DrawerContainer>
						<LogoArea>
							<DrawerLogo
								src={logo}
								alt='압구정1동 청년부 로고'
								//  onClick={() => navigate('/')}
							/>
							<CloseButton onClick={toggleDrawer(false)}>
								<FaTimes />
							</CloseButton>
						</LogoArea>
						<MenuArea>
							<MenuItem isOpen={openSubMenu === 'groups'} onClick={() => handleMenuClick('groups')}>
								단체소개
							</MenuItem>
							{openSubMenu === 'groups' && (
								<SubMenu isOpen={openSubMenu === 'groups'}>
									<SubMenuItem
										to='/groups/sub1'
										onClick={() => {
											setDrawerOpen(false);
										}}
									>
										연합회
									</SubMenuItem>
									<Divider />
									<SubMenuItem
										to='/groups/sub2'
										onClick={() => {
											setDrawerOpen(false);
										}}
									>
										전례단
									</SubMenuItem>
									<Divider />
									<SubMenuItem
										to='/groups/sub3'
										onClick={() => {
											setDrawerOpen(false);
										}}
									>
										성가대
									</SubMenuItem>
									<Divider />
									<SubMenuItem
										to='/groups/sub4'
										onClick={() => {
											setDrawerOpen(false);
										}}
									>
										레지오
									</SubMenuItem>
								</SubMenu>
							)}
							<Divider />
							{/* <MenuItem to='/organization'>단체나눔공간</MenuItem>
							<Divider />
							<MenuItem to='/precedent'>정보나눔</MenuItem>
							<Divider /> */}
							<MenuItem isOpen={openSubMenu === 'gallery'} onClick={() => handleMenuClick('gallery')}>
								사진갤러리
							</MenuItem>
							{openSubMenu === 'gallery' && (
								<SubMenu isOpen={openSubMenu === 'gallery'}>
									<SubMenuItem to='/gallery/sub1'>소메뉴 1</SubMenuItem>
									<Divider />
									<SubMenuItem to='/gallery/sub2'>소메뉴 2</SubMenuItem>
								</SubMenu>
							)}
							<Divider />
							<MenuItem
								isOpen={false}
								//isOpen={openSubMenu === 'location'}
								onClick={() =>
									//  handleMenuClick('location')
									{
										setDrawerOpen(false);
										navigate('/location');
									}
								}
							>
								찾아오시는길
							</MenuItem>
							<Divider />
							<MenuItem
								isOpen={false}
								//isOpen={openSubMenu === 'location'}
								onClick={() =>
									//  handleMenuClick('location')
									{
										setDrawerOpen(false);
										navigate('/');
									}
								}
							>
								Welcome페이지 테스트
							</MenuItem>
							<Divider />
						</MenuArea>
					</DrawerContainer>
				</Drawer>
			</StyledToolbar>
		</AppBar>
	);
};

export default Header;
