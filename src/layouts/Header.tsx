import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/main/ap1logo.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';

const StyledToolbar = styled(Toolbar)`
	display: flex;
	justify-content: space-between;
	background-color: white;
	color: black;
`;

const Logo = styled.img`
	height: 50px;
	margin: 0 auto;
	display: block;
`;

const MenuButton = styled(IconButton)`
	position: absolute;
	left: 20px;
	top: 10px;
`;

const DrawerContainer = styled.div`
	width: 250px; /* Drawer 너비 설정 */
	background-color: white; /* Drawer 배경색 흰색 */
	height: 100%;
	padding: 20px;
	z-index: 1300; /* 높여서 다른 요소 위에 표시 */
	position: relative; /* Drawer 내부의 요소들에 대한 z-index 처리를 위해 relative 설정 */
`;

const Header: React.FC = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = (open: boolean) => () => {
		setDrawerOpen(open);
	};

	return (
		<AppBar position='static'>
			<StyledToolbar>
				<MenuButton onClick={toggleDrawer(true)}>
					<FaBars />
				</MenuButton>
				<Logo src={logo} alt='압구정1동 청년부 로고' />
				<Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
					<DrawerContainer>
						<IconButton onClick={toggleDrawer(false)}>
							<FaTimes />
						</IconButton>
						<Typography variant='h6'>메뉴</Typography>
						<Link to='/summary' style={{ textDecoration: 'none', color: 'black' }}>
							<Button fullWidth>본당소개</Button>
						</Link>
						<Link to='/organization' style={{ textDecoration: 'none', color: 'black' }}>
							<Button fullWidth>단체나눔공간</Button>
						</Link>
						<Link to='/precedent' style={{ textDecoration: 'none', color: 'black' }}>
							<Button fullWidth>정보나눔</Button>
						</Link>
						<Link to='/gallery' style={{ textDecoration: 'none', color: 'black' }}>
							<Button fullWidth>사진갤러리</Button>
						</Link>
						<Link to='/location' style={{ textDecoration: 'none', color: 'black' }}>
							<Button fullWidth>찾아오시는길</Button>
						</Link>
					</DrawerContainer>
				</Drawer>
			</StyledToolbar>
		</AppBar>
	);
};

export default Header;
