import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	padding: 3em 0;
`;
const TitleStyled = styled.h1`
	margin-top: 0;
	margin-bottom: 1.2em;
	font-size: 2em;
	text-align: center;
`;

const ImageStyled = styled.img`
	height: 40px;
	margin: 0 25px;
`;
const Partners = () => {
	return (
		<Container>
			<TitleStyled>Trusted by</TitleStyled>
			<FlexBox>
				<ImageStyled src="assets/img/home/aim_dark.svg" />
			</FlexBox>
		</Container>
	);
};
export default Partners;
