import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
// import TopButton from './TopButton';

const Container = styled.div`
	max-width: 600px;
	margin: 0 auto;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	background-color: #fff;
`;
const Layout: React.FC = () => {
	useEffect(() => {
		window.scrollTo({ top: 0 });
	});

	return (
		<Container>
			{/* <div> */}
			<Header />
			{/* <main style={{ padding: '20px' }}> */}
			<Outlet /> {/* 중첩된 라우트를 여기에 렌더링 */}
			{/* </main> */}
			<Footer />
			{/* <TopButton /> */}
		</Container>
	);
};

export default Layout;
