import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
	background-color: rgb(85, 85, 85);
	color: white;
	text-align: left; /* 좌측 정렬 */
	padding: 30px; /* 패딩 추가 */
	font-size: 14px; /* 기본 폰트 크기 */
`;

const Title = styled.h1`
	font-size: 15px; /* 제목 글씨 크기 조정 */
	font-weight: 700px;
	margin: 10px 0; /* 기본 여백 제거 */
`;

const Address = styled.p`
	font-size: 11.4px; /* 주소 글씨 크기 조정 */
	font-weight: normal; /* 굵지 않은 글씨 */
	margin: 10px 0; /* 상단 여백 */
`;

const ContactInfo = styled.p`
	font-size: 11.4px; /* 연락처 글씨 크기 조정 */
	margin: 10px 0; /* 여백 */
`;

const CopyrightInfo = styled.p`
	font-size: 7.2px; /* 연락처 글씨 크기 조정 */
	margin-bottom: 15px;
`;

const Footer: React.FC = () => {
	return (
		<FooterContainer data-aos='fade-up' data-aos-duration='800' data-aos-easing='ease-out'>
			<Title>천주교 서울대교구 압구정1동성당 청년부</Title>
			<Address>서울시 강남구 압구정로 167길 27(신사동) 우06023</Address>
			<ContactInfo>TEL: 02-541-9241 | FAX: 02-541-9243</ContactInfo>
			<ContactInfo>ap1youngadults@gmail.com</ContactInfo>
			{/* <ContactInfo>개인정보 취급방침</ContactInfo> */}
			<CopyrightInfo>Copyright © 2022. 한국교회 서울대교구 압구정동성당 All Rights Reserved.</CopyrightInfo>
		</FooterContainer>
	);
};

export default Footer;
