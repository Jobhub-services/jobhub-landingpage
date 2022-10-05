import FindJobIcon from '@/assets/icons/FindJobIcon';
import GroupPersonsIcon from '@/assets/icons/GroupPersonsIcon';
import SandboxIcon from '@/assets/icons/SandboxIcon';
import { colors } from '@/assets/theme';
import { FlexBox, Button } from 'staak-ui';
import styled from 'styled-components';

const { STAAK_URL } = STAAK_ENV;

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
						You are not able to find jobs?. You can't find the right talent?. Staak helps you take your business to the next level by hiring talents
						who are among the best in their field
					</BodyStyled>
					<a href={`${STAAK_URL}/register/company`} target="_blank" rel="noreferrer">
						<Button>Join Staak now</Button>
					</a>
				</ContentStyled>
			</ContainerStyled>
			<ContainerCard>
				<FeatureCard>
					<FindJobIcon size={60} />
					<CardTitle>Land your dream job</CardTitle>
					<CardDescription>
						Create a job post in minutes or explore an opening from the best companies seeking to grow their team and community!
					</CardDescription>
				</FeatureCard>
				<FeatureCard>
					<SandboxIcon size={60} />
					<CardTitle>Grow your skillset </CardTitle>
					<CardDescription>
						Join a company and start growing your skills by facing new challenges and problems you have to solve. We never stop learning from new
						experiences!
					</CardDescription>
				</FeatureCard>
				<FeatureCard>
					<GroupPersonsIcon size={60} />
					<CardTitle>Hire the best talents</CardTitle>
					<CardDescription>
						Hire the best talent you can find. A good hire is not just someone with experience or skills, but also one who will work hard and be
						creative in their approach to solving problems
					</CardDescription>
				</FeatureCard>
			</ContainerCard>
		</FeatureContainer>
	);
};
export default Features;
