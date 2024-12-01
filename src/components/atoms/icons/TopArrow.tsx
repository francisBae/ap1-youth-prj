// src/components/TopArrow.tsx

import React from 'react';

const TopArrow: React.FC<React.SVGProps<SVGSVGElement>> = props => (
	<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
		<path d='M12 2L12 22M12 2L4 10M12 2L20 10' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
	</svg>
);

export default TopArrow;
