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
	@media only screen and (max-width: 1450px) {
		margin-top: -170px;
	}
	@media only screen and (max-width: 1280px) {
		margin-top: -130px;
	}
	@media only screen and (max-width: 1000px) {
		margin-top: 10px;
	}
	@media only screen and (max-width: 780px) {
		margin-top: 50px;
	}
`;

const ContainerTitle = styled.h1`
	text-align: center;
	font-size: 2em;
	margin: 0 auto 3em auto;
	color: ${colors.PURPLE_BASE};
	width: 900px;
	@media only screen and (max-width: 1000px) {
		width: 800px;
	}
	@media only screen and (max-width: 800px) {
		width: 700px;
	}
	@media only screen and (max-width: 700px) {
		width: 600px;
	}
	@media only screen and (max-width: 600px) {
		width: 500px;
	}
`;

const CardContainer = styled(FlexBox)`
	@media only screen and (max-width: 970px) {
		flex-direction: column;
	}
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
	margin-bottom: 10px;
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
			<CardContainer>
				<CardService flexDirection="column">
					<CardIcon>
						<JobIcon size={50} color="#ffffff" />
					</CardIcon>
					<CardTitle>Spend less time worrying about finding the perfect candidate</CardTitle>
					<CardBody>
						Staak will help you to create job in one minute and receive a thousand of application from professionals around the world.
					</CardBody>
				</CardService>
				<CardService flexDirection="column">
					<CardIcon>
						<IconHalfTime size={50} color="#ffffff" />
					</CardIcon>
					<CardTitle>Hire efficiently and effectively</CardTitle>
					<CardBody>Hiring process with Staak is easy and fast , and you can hire the best candidate in only one click.</CardBody>
				</CardService>
				<CardService flexDirection="column">
					<CardIcon>
						<IconDeveloper size={50} color="#ffffff" />
					</CardIcon>
					<CardTitle>Get access to the right talents</CardTitle>
					<CardBody>
						You can find the right talent for your requirements by browsing our pool of available professionals and have direct access to the talent
					</CardBody>
				</CardService>
			</CardContainer>
		</ServiceContainer>
	);
};
export default Services;
