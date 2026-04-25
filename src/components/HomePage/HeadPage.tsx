import { FC } from 'react';
import { FlexBox, Button } from 'staak-ui';
import { colors } from '@/assets/theme';
import WaveBg from '@/components/HomePage/WaveBg';
import styled from 'styled-components';

const { STAAK_URL } = STAAK_ENV;

const Container = styled.div`
	position: relative;
	width: 100%;
	background-color: ${colors.PURPLE_BASE};
	padding: 60px 0px;
`;

const SubGlobalContainer = styled(FlexBox)`
	flex-direction: row-reverse;
	height: 450px !important;
	@media only screen and (max-width: 1000px) {
		flex-direction: column !important;
		gap: 100px;
		height: 700px;
	}
`;
const HeadPageStyled = styled.div`
	position: relative;
	z-index: 1;
	width: 85%;
	margin: 0 auto 430px auto;
	color: ${colors.WHITE};
`;
const TitleStyled = styled.h1`
	margin-top: 0em;
	font-size: 2.5em;
`;
const SubContainer = styled.div`
	margin-top: -3em;
	width: 600px;
	@media only screen and (max-width: 660px) {
		width: 500px;
	}
	@media only screen and (max-width: 560px) {
		width: 450px;
	}
	@media only screen and (max-width: 480px) {
		width: 330px;
	}
`;
const SImg = styled.img`
	width: 600px;
	@media only screen and (max-width: 660px) {
		width: 500px;
	}
	@media only screen and (max-width: 560px) {
		width: 450px;
	}
	@media only screen and (max-width: 480px) {
		width: 300px;
	}
`;
const BlockBodyStyled = styled.p`
	margin-bottom: 3em;
`;

const HeadPage: FC = () => {
	return (
		<Container>
			<HeadPageStyled>
				<SubGlobalContainer justify="space-between">
					<SImg src="assets/img/home/head-page-icon.svg" alt="" />
					<SubContainer>
						<TitleStyled>Find your next development talent on staak</TitleStyled>
						<BlockBodyStyled>
							staak the easiest way to recruit software developers If you're an employer in need of top-notch talent? Or a job seeker looking for
							work? staak is your best software to get matched
						</BlockBodyStyled>
						<FlexBox justify="flex-start">
							<a target="_blank" href={`${STAAK_URL}/register/company`} style={{ marginRight: '15px' }} rel="noreferrer">
								<Button color="white" variant="outlined">
									Start Hiring
								</Button>
							</a>
							<a target="_blank" href={`${STAAK_URL}/register/developer`} rel="noreferrer">
								<Button color="white">Join staak & Code</Button>
							</a>
						</FlexBox>
					</SubContainer>
				</SubGlobalContainer>
			</HeadPageStyled>
			<WaveBg />
		</Container>
	);
};

export default HeadPage;
