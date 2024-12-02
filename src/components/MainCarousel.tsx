import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 이미지 import
// import main001 from '../assets/images/main/main001.jpg';
// import main002 from '../assets/images/main/main002.jpg';
// import main003 from '../assets/images/main/main003.jpg';
// import main004 from '../assets/images/main/main004.jpg';
// import main005 from '../assets/images/main/main005.jpg';

const images = [
	'https://res.cloudinary.com/dtwnsrsz5/image/upload/w_600/v1733134060/ap1youth/images/main/dcrzatamo2i5vub2ojbc.jpg',
	'https://res.cloudinary.com/dtwnsrsz5/image/upload/w_600/v1733134060/ap1youth/images/main/kibwdfn0qltmjeftammk.jpg',
	'https://res.cloudinary.com/dtwnsrsz5/image/upload/w_600/v1733134060/ap1youth/images/main/e6uqxzdhjq4wglfuwc6k.jpg',
	'https://res.cloudinary.com/dtwnsrsz5/image/upload/w_600/v1733134060/ap1youth/images/main/uuuu1yuforc0ovdptt2u.jpg',
	'https://res.cloudinary.com/dtwnsrsz5/image/upload/w_600/v1733134061/ap1youth/images/main/mkpgqujzew7yv5e7aryy.jpg'
];

const CarouselContainer = styled.div`
	margin: 20px auto;
	width: 100%;
	max-width: 1200px;
	padding: 0;
	position: relative; /* z-index 사용을 위한 relative 설정 */
	z-index: 1; /* Drawer 아래에 위치 */
`;

const CarouselImage = styled.img`
	width: 100%;
	height: auto;
	display: block;
	object-fit: cover;
`;

const MainCarousel: React.FC = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000
	};

	return (
		<CarouselContainer data-aos='fade-up' data-aos-duration='800' data-aos-easing='ease-out'>
			<Slider {...settings}>
				{images.map((img, idx) => (
					<div key={idx}>
						<CarouselImage key={idx} src={img} alt={`Slide ${idx}`} loading='eager' />
					</div>
				))}
				{/* <div>
					<CarouselImage src={main001} alt='Slide 1' />
				</div>
				<div>
					<CarouselImage src={main002} alt='Slide 2' />
				</div>
				<div>
					<CarouselImage src={main003} alt='Slide 3' />
				</div>
				<div>
					<CarouselImage src={main004} alt='Slide 4' />
				</div>
				<div>
					<CarouselImage src={main005} alt='Slide 5' />
				</div> */}
			</Slider>
		</CarouselContainer>
	);
};

export default MainCarousel;
