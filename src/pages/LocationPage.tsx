import React from 'react';
import LocationMap from '@/components/LocationMap';

const MainPage: React.FC = () => {
	return (
		<div style={{ marginTop: '-20px' }}>
			<LocationMap />
			{/* 추가적인 콘텐츠를 여기에 추가할 수 있습니다. */}
		</div>
	);
};

export default MainPage;
