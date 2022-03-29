import { FC } from 'react';
import { Button, FlexBox, Headline } from 'staak-ui';
import { colors } from '@/assets/theme';
import WaveBg from '@/components/HomePage/WaveBg';
import styled from 'styled-components';
import { JoinButton } from '../shared/AuthButtons';

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
	margin: 0 auto 500px auto;
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
						<TitleStyled>Hire with the best and easier recruiting software</TitleStyled>
						<BlockBodyStyled>
							You're an employer in need of top-notch talent, or a developer looking for work , staak is your best software to get matched
						</BlockBodyStyled>
						<FlexBox justify="flex-start">
							<JoinButton variant="contained" style={{ marginRight: '10px' }}>
								Start Hiring
							</JoinButton>
							<JoinButton color="white" variant="outlined">
								Join Staak & Code
							</JoinButton>
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
