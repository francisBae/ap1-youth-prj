// src/components/ContactInfo.tsx

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	max-width: 600px; /* 최대 너비 600px */
	margin: 30px auto; /* 상하 여백 및 중앙 정렬 */
	padding: 20px; /* 패딩 추가 */
`;

const StyledText = styled.span`
	color: #007bff; /* 파란색 */
	font-weight: bold; /* 글자 두껍게 */
	font-size: 14px;
	margin-right: 4px;
`;

const StyledPlainText = styled.span`
	font-size: 14px;
`;

const ParkingInfo = styled.p`
	color: #c51f45; /* 붉은 톤 */
	margin: 5px 0; /* 여백 조정 */
	font-size: 14px;
`;

const ContactInfo: React.FC = () => {
	return (
		<Container>
			<p>
				<StyledText>주소</StyledText> <StyledPlainText>서울특별시 강남구 언주로 167길 27</StyledPlainText>
			</p>
			<p>
				<StyledText>사무실</StyledText> <StyledPlainText>02-541-9241</StyledPlainText>
			</p>
			<ParkingInfo>주차 공간이 협소하니 대중교통 이용을 권장합니다.</ParkingInfo>
		</Container>
	);
};

export default ContactInfo;
