import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const CarouselContainer = styled.div`
	margin: 20px 0;
`;

const Carousel: React.FC = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	return (
		<CarouselContainer>
			<Slider {...settings}>
				<div>
					<img src='/path/to/image1.jpg' alt='Slide 1' />
				</div>
				<div>
					<img src='/path/to/image2.jpg' alt='Slide 2' />
				</div>
				<div>
					<img src='/path/to/image3.jpg' alt='Slide 3' />
				</div>
			</Slider>
		</CarouselContainer>
	);
};

export default Carousel;
