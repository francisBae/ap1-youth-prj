import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	background-color: #fff;
`;
const Layout: React.FC = () => {
	return (
		<Container>
			{/* <div> */}
			<Header />
			{/* <main style={{ padding: '20px' }}> */}
			<Outlet /> {/* 중첩된 라우트를 여기에 렌더링 */}
			{/* </main> */}
			<Footer />
			{/* </div> */}
		</Container>
	);
};

export default Layout;
