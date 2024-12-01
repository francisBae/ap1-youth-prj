import React from 'react';
import LocationMap from '@/components/LocationMap';
import ContactInfo from '@/components/ContactInfo';

const MainPage: React.FC = () => {
	return (
		<div style={{ marginTop: '-20px' }}>
			<LocationMap />
			<ContactInfo />
		</div>
	);
};

export default MainPage;
