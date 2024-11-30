import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledToolbar = styled(Toolbar)`
	display: flex;
	justify-content: space-between;
`;

const Header: React.FC = () => {
	return (
		<AppBar position='static'>
			<StyledToolbar>
				<Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
					<Typography variant='h6'>압구정1동 청년부</Typography>
				</Link>
				<div>
					<Link to='/summary' style={{ textDecoration: 'none' }}>
						<Button color='inherit'>본당소개</Button>
					</Link>
					<Link to='/organization' style={{ textDecoration: 'none' }}>
						<Button color='inherit'>단체나눔공간</Button>
					</Link>
					<Link to='/precedent' style={{ textDecoration: 'none' }}>
						<Button color='inherit'>정보나눔</Button>
					</Link>
					<Link to='/gallery' style={{ textDecoration: 'none' }}>
						<Button color='inherit'>사진갤러리</Button>
					</Link>
					<Link to='/location' style={{ textDecoration: 'none' }}>
						<Button color='inherit'>찾아오시는길</Button>
					</Link>
				</div>
			</StyledToolbar>
		</AppBar>
	);
};

export default Header;
