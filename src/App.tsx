import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layouts/Header';
import MainCarousel from './components/MainCarousel';

// 각 페이지 컴포넌트 생성 (빈 컴포넌트로 시작)
const Summary = () => <div>본당소개 페이지</div>;
const Organization = () => <div>단체나눔공간 페이지</div>;
const Precedent = () => <div>정보나눔 페이지</div>;
const Gallery = () => <div>사진갤러리 페이지</div>;
const Location = () => <div>찾아오시는길 페이지</div>;

const App: React.FC = () => {
	return (
		<Router>
			<Header />
			<MainCarousel />
			<Routes>
				<Route path='/' element={<div>메인 페이지</div>} />
				<Route path='/summary' element={<Summary />} />
				<Route path='/organization' element={<Organization />} />
				<Route path='/precedent' element={<Precedent />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/location' element={<Location />} />
			</Routes>
		</Router>
	);
};

export default App;
