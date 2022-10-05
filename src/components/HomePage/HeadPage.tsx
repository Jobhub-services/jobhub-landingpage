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
`;

const BlockBodyStyled = styled.p`
	margin-bottom: 3em;
`;

const HeadPage: FC = () => {
	return (
		<Container>
			<HeadPageStyled>
				<FlexBox justify="space-between" style={{ height: '450px' }}>
					<SubContainer>
						<TitleStyled>Find your next development talent on Staak</TitleStyled>
						<BlockBodyStyled>
							Staak the easiest way to recruit software developers If you're an employer in need of top-notch talent? Or a job seeker looking for
							work? Staak is your best software to get matched
						</BlockBodyStyled>
						<FlexBox justify="flex-start">
							<a target="_blank" href={`${STAAK_URL}/register/company`} style={{ marginRight: '15px' }} rel="noreferrer">
								<Button color="white" variant="outlined">
									Start Hiring
								</Button>
							</a>
							<a target="_blank" href={`${STAAK_URL}/register/developer`} rel="noreferrer">
								<Button color="white">Join Staak & Code</Button>
							</a>
						</FlexBox>
					</SubContainer>
					<img src="assets/img/home/head-page-icon.svg" alt="" width={600} />
				</FlexBox>
			</HeadPageStyled>
			<WaveBg />
		</Container>
	);
};

export default HeadPage;
