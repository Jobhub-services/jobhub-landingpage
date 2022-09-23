import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
/*import CandidateIcon from '@/assets/icons/CandidateIcon';
import GroupPersonsIcon from '@/assets/icons/GroupPersonsIcon';
import HireIcon from '@/assets/icons/HireIcon';
import TestIcon from '@/assets/icons/TestIcon';
import { colors } from '@/assets/theme';*/

const ContainerStyled = styled(FlexBox)`
	padding: 6em 0;
`;
const SectionContent = styled.div`
	width: 500px;
	margin-left: 6em;
`;
const TitleSection = styled.h1`
	margin-top: 0;
`;
const SubTitleSection = styled.p`
	font-size: 1.1em;
	margin-bottom: 40px;
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
			<img src="assets/img/home/world-chart.svg" alt="" width={600} />
			<SectionContent>
				<TitleSection>Where great companies hire great people.</TitleSection>
				<SubTitleSection>
					Staak is the company where hiring and finding Jobs will be easy in the arab world, we are buidling solid and great software to make all
					companies and start-up in the arabic world find the right talent, and staak also provide great experience to talents to find thier dream
					company
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
