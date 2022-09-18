import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
import { colors } from '@/assets/theme';
import JobIcon from '@/assets/icons/JobIcon';
import IconHalfTime from '@/assets/icons/IconHalfTime';
import IconDeveloper from '@/assets/icons/IconDeveloper';

const ServiceContainer = styled.div`
	position: relative;
	padding-bottom: 6em;
	margin-top: -220px;
	z-index: 1;
`;

const ContainerTitle = styled.h1`
	text-align: center;
	font-size: 2em;
	margin: 0 auto 3em auto;
	color: ${colors.PURPLE_BASE};
	width: 900px;
`;

const CardService = styled(FlexBox)`
	width: 400px;
	height: 400px;
	margin: 0 20px;
	color: ${colors.BLACK_3};
	border-radius: 6px;
	padding: 10px 20px;
	text-align: center;
`;
const CardIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	width: 90px;
	height: 90px;
	background: ${colors.PURPLE_BASE};
`;

const CardTitle = styled.h3`
	width: 250px;
	margin-bottom: 0;
`;
const CardBody = styled.p``;

const Services = () => {
	return (
		<ServiceContainer>
			<ContainerTitle>Hire talents that meet your company's needs with the world's leading recruitment platform</ContainerTitle>
			<FlexBox>
				<CardService flexDirection="column">
					<CardIcon>
						<JobIcon size={50} color="#ffffff" />
					</CardIcon>
					<CardTitle>Post a job and hire a professional</CardTitle>
					<CardBody>
						Staak will help you to create job in one minute and receive a thousand of application from professionals around the world.
					</CardBody>
				</CardService>
				<CardService flexDirection="column">
					<CardIcon>
						<IconHalfTime size={50} color="#ffffff" />
					</CardIcon>
					<CardTitle>Hire the best candidate in half the time</CardTitle>
					<CardBody>Hiring process with staak is easy and fast , and you can hire the best candidate in only one click.</CardBody>
				</CardService>
				<CardService flexDirection="column">
					<CardIcon>
						<IconDeveloper size={50} color="#ffffff" />
					</CardIcon>
					<CardTitle>Browse talents and find the right candidates</CardTitle>
					<CardBody>
						Browser list of talents and find the right talent who fit your requirement and you can create direct communication all of this is
						available in steak
					</CardBody>
				</CardService>
			</FlexBox>
		</ServiceContainer>
	);
};
export default Services;
