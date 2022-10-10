import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
/*import CandidateIcon from '@/assets/icons/CandidateIcon';
import GroupPersonsIcon from '@/assets/icons/GroupPersonsIcon';
import HireIcon from '@/assets/icons/HireIcon';
import TestIcon from '@/assets/icons/TestIcon';
import { colors } from '@/assets/theme';*/

const ContainerStyled = styled(FlexBox)`
	padding: 6em 0;
	@media only screen and (max-width: 1020px) {
		flex-direction: column;
		gap: 20px;
	}
`;
const SectionContent = styled.div`
	width: 500px;
	margin-left: 6em;
	@media only screen and (max-width: 580px) {
		width: 430px;
		margin-left: 0em;
	}
`;
const TitleSection = styled.h1`
	margin-top: 0;
`;
const SubTitleSection = styled.p`
	font-size: 1.1em;
	margin-bottom: 40px;
`;
const SImg = styled.img`
	width: 600px;
	@media only screen and (max-width: 720px) {
		width: 500px;
	}
	@media only screen and (max-width: 520px) {
		width: 430px;
	}
`;
/*
const CardStyled = styled(FlexBox)`
	margin-bottom: 25px;
	color: ${colors.BLACK_3};
`;
const CardSDetailStyled = styled.div`
	margin-left: 15px;
`;
const CardValue = styled.h1`
	margin: 0;
	line-height: 26px;
`;
const CardLabel = styled.h4`
	margin: 0;
`;*/
const Statistics = () => {
	return (
		<ContainerStyled>
			<SImg src="assets/img/home/world-chart.svg" alt="" />
			<SectionContent>
				<TitleSection>Where great companies hire great people.</TitleSection>
				<SubTitleSection>
					Staak is creating an efficient and effective solution for any company that is looking to hire or any talent is looking for a job. Paving the
					way for new development hires and transforming the industry one feature at a time.
				</SubTitleSection>
				{/*<CardStyled justify="flex-start">
					<GroupPersonsIcon size={48} />
					<CardSDetailStyled>
						<CardValue>10,000</CardValue>
						<CardLabel>COMPANIES</CardLabel>
					</CardSDetailStyled>
				</CardStyled>
				<CardStyled justify="flex-start">
					<CandidateIcon size={48} />
					<CardSDetailStyled>
						<CardValue>50,000</CardValue>
						<CardLabel>CANDIDATES</CardLabel>
					</CardSDetailStyled>
				</CardStyled>
				<CardStyled justify="flex-start">
					<HireIcon size={48} />
					<CardSDetailStyled>
						<CardValue>20,000</CardValue>
						<CardLabel>HIRES</CardLabel>
					</CardSDetailStyled>
				</CardStyled>
				<CardStyled justify="flex-start">
					<TestIcon size={48} />
					<CardSDetailStyled>
						<CardValue>2000</CardValue>
						<CardLabel>ASSESMENTS</CardLabel>
					</CardSDetailStyled>
				</CardStyled>*/}
			</SectionContent>
		</ContainerStyled>
	);
};
export default Statistics;
