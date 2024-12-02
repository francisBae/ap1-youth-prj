import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage'; // MainPage import 추가
import Layout from './layouts/Layout';
import LocationPage from './pages/LocationPage';

import AOS from 'aos';
import 'aos/dist/aos.css';
import WelcomePage from './pages/WelcomePage';

// 각 페이지 컴포넌트 생성 (빈 컴포넌트로 시작)
const GroupsSub1 = () => <div>연합회</div>;
const GroupsSub2 = () => <div>전례단</div>;
const GroupsSub3 = () => <div>성가대</div>;
const GroupsSub4 = () => <div>레지오</div>;
// const Organization = () => <div>단체나눔공간 페이지</div>;
// const Precedent = () => <div>정보나눔 페이지</div>;
const Gallery = () => <div>사진갤러리 페이지</div>;
// const Location = () => <div>찾아오시는길 페이지</div>;

const App: React.FC = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000 // 애니메이션 지속 시간
		});
	}, []);

	return (
		<Router>
			{/* <Header /> */}
			<Routes>
				<Route path='/' element={<WelcomePage />} />
				<Route path='/' element={<Layout />}>
					<Route path='/main' element={<MainPage />} /> {/* MainPage 렌더링 */}
					<Route path='/groups/sub1' element={<GroupsSub1 />} />
					<Route path='/groups/sub2' element={<GroupsSub2 />} />
					<Route path='/groups/sub3' element={<GroupsSub3 />} />
					<Route path='/groups/sub4' element={<GroupsSub4 />} />
					{/* <Route path='/organization' element={<Organization />} /> */}
					{/* <Route path='/precedent' element={<Precedent />} /> */}
					<Route path='/gallery' element={<Gallery />} />
					<Route path='/location' element={<LocationPage />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
