import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	padding: 3em 0;
`;
const TitleStyled = styled.h1`
	margin-top: 0;
	margin-bottom: 1.2em;
	font-size: 2.5em;
	text-align: center;
`;

const ImageStyled = styled.img`
	height: 40px;
	margin: 0 25px;
`;
const Partners = () => {
	return (
		<Container>
			<TitleStyled>Partners</TitleStyled>
			<FlexBox>
				<ImageStyled src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" />
				<ImageStyled src="https://upload.wikimedia.org/wikipedia/fr/thumb/7/7f/TikTok_Logo.svg/1280px-TikTok_Logo.svg.png" />
				<ImageStyled src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png" />
			</FlexBox>
		</Container>
	);
};
export default Partners;
