import { colors } from '@/assets/theme';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

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
const CardImage = styled.img`
	height: 190px;
	margin-bottom: 20px;
`;

const CardTitle = styled.h3`
	width: 250px;
	margin-bottom: 0;
`;
const CardBody = styled.p``;

const Services = () => {
	return (
		<ServiceContainer>
			<ContainerTitle>Hire the talents that meet the company's needs with the world's leading recruiting platform.</ContainerTitle>
			<FlexBox>
				<CardService flexDirection="column">
					<CardImage src="assets/img/home/post-job.svg" />
					<CardTitle>Post a job and hire a professional</CardTitle>
					<CardBody>
						Create a job post in minutes to tap into a network of over 770 million professionals. Share that you're hiring, with your network and
						beyond.
					</CardBody>
				</CardService>
				<CardService flexDirection="column">
					<CardImage src="assets/img/home/job-time.svg" />
					<CardTitle>Hire the best candidate in half the time</CardTitle>
					<CardBody>
						Create a job post in minutes to tap into a network of over 770 million professionals. Share that you're hiring, with your network and
						beyond.
					</CardBody>
				</CardService>
				<CardService flexDirection="column">
					<CardImage src="assets/img/home/developer-job.svg" />
					<CardTitle>Browse talents and find the right candidates</CardTitle>
					<CardBody>
						Create a job post in minutes to tap into a network of over 770 million professionals. Share that you're hiring, with your network and
						beyond.
					</CardBody>
				</CardService>
			</FlexBox>
		</ServiceContainer>
	);
};
export default Services;
