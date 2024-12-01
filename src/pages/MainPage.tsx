import React from 'react';
import MainCarousel from '../components/MainCarousel';
import MainIntro from '@/components/MainIntro';

const MainPage: React.FC = () => {
	return (
		<div style={{ marginTop: '-20px' }}>
			<MainCarousel />
			<MainIntro />
			{/* 추가적인 콘텐츠를 여기에 추가할 수 있습니다. */}
		</div>
	);
};

export default MainPage;
