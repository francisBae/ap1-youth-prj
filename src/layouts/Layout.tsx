import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
	return (
		<div>
			<Header />
			{/* <main style={{ padding: '20px' }}> */}
			<Outlet /> {/* 중첩된 라우트를 여기에 렌더링 */}
			{/* </main> */}
			<Footer />
		</div>
	);
};

export default Layout;
