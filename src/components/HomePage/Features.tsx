import FindJobIcon from '@/assets/icons/FindJobIcon';
import GroupPersonsIcon from '@/assets/icons/GroupPersonsIcon';
import SandboxIcon from '@/assets/icons/SandboxIcon';
import { colors } from '@/assets/theme';
import { JoinButton } from '@/components/shared/AuthButtons';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const FeatureContainer = styled.div`
	padding: 6em 0px;
	background: ${colors.GRAY_2};
`;
const ContainerStyled = styled(FlexBox)`
	width: max-content;
	margin: auto;
`;
const ContentStyled = styled.div`
	width: 520px;
`;
const TitleStyled = styled.h1`
	margin-top: 0px;
`;
const BodyStyled = styled.p`
	margin-bottom: 30px;
`;

const ContainerCard = styled(FlexBox)`
	margin-top: 6em;
`;

const FeatureCard = styled.div`
	background: ${colors.WHITE};
	border: 3px solid ${colors.PURPLE_BASE};
	height: 310px;
	border-radius: 8px;
	width: 350px;
	padding: 40px 20px;
	margin: 0 20px;
	text-align: center;
`;
const CardTitle = styled.h3`
	margin-bottom: 0px;
`;
const CardDescription = styled.p`
	margin-top: 6px;
`;
const Features = () => {
	return (
		<FeatureContainer>
			<ContainerStyled justify="space-between">
				<img src="assets/img/home/carrer_icon.svg" alt="" width={750} />
				<ContentStyled>
					<TitleStyled>Take your career or business to new heights</TitleStyled>
					<BodyStyled>
						You are not able to find jobs , or you can't find the right developer staak is here to help you to pass your business to the next level by
						hiring the best developers in the world
					</BodyStyled>
					<JoinButton>Join Staak now</JoinButton>
				</ContentStyled>
			</ContainerStyled>
			<ContainerCard>
				<FeatureCard>
					<FindJobIcon size={60} />
					<CardTitle>Find opportunities</CardTitle>
					<CardDescription>
						Create a job post in minutes or explore an opening from interesting companies seeking to grow their team and community!
					</CardDescription>
				</FeatureCard>
				<FeatureCard>
					<SandboxIcon size={60} />
					<CardTitle>Improve your skills</CardTitle>
					<CardDescription>
						Join a company and start growing your skills by facing new challenges and problems you have to solve. We never stop learning from new
						experiences!
					</CardDescription>
				</FeatureCard>
				<FeatureCard>
					<GroupPersonsIcon size={60} />
					<CardTitle>Join best companies</CardTitle>
					<CardDescription>
						Companies with passion and eager to scale, grow and innovate are the companies you can find here! So explore the opportunities and choose
						the one most suitable for you!
					</CardDescription>
				</FeatureCard>
			</ContainerCard>
		</FeatureContainer>
	);
};
export default Features;
