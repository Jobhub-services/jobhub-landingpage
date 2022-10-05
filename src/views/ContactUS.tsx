import LocationFillIcon from '@/assets/icons/LocationFillIcon';
import MailIcon from '@/assets/icons/MailIcon';
import PhoneIcon from '@/assets/icons/PhoneIcon';
import { colors } from '@/assets/theme';
import { FaceBookIcon, FlexBox, Headline, InstagramIcon, LinkedinIcon, TwitterIcon } from 'staak-ui';
import styled from 'styled-components';
import {
	FACEBOOK_PAGE_URL,
	INSTAGRAM_PAGE_URL,
	LINKEDIN_PAGE_URL,
	STAAK_ADDRESS,
	STAAK_EMAIL,
	STAAK_NUMBER,
	TWITTER_PAGE_URL,
} from '@/constants/app.constants';
import ContactInfo from '@/components/contactPage/ContactInfo';

const MainContainer = styled(FlexBox)`
	background-color: ${colors.PURPLE_2};
	width: 60%;
	border-radius: 8px;
	color: white;
	margin-top: 60px;
	padding: 30px 30px;
	height: 690px;
`;
const LContainer = styled(FlexBox)`
	width: 45%;
`;
const StyledIcon = styled.span`
	cursor: pointer;
`;
const SH2 = styled.h2`
	margin: 0 0 10px 0;
`;
const ContactUS = (props) => {
	return (
		<FlexBox flexDirection="column" style={{ marginTop: '70px', marginBottom: '70px' }}>
			<FlexBox flexDirection="column">
				<Headline style={{ margin: '10px 0 10px 0' }}>Contact us</Headline>
				<div>Any questions, remarks or need help? just wirte us a message</div>
			</FlexBox>
			<MainContainer align="start" gap={20}>
				<LContainer flexDirection="column" align="start" justify="space-between" height="100%">
					<div>
						<div style={{ marginBottom: '50px' }}>
							<SH2>Let's create progress together</SH2>
							<div>Contact our support team to know more about how STAAK can change and improve your hiring process</div>
						</div>
						<FlexBox flexDirection="column" align="start" className="mt-20" gap={30}>
							<FlexBox gap={7}>
								<FlexBox>
									<PhoneIcon color="white" />
								</FlexBox>
								<span>{STAAK_NUMBER}</span>
							</FlexBox>
							<FlexBox gap={7}>
								<FlexBox>
									<MailIcon color="white" />
								</FlexBox>
								<span>{STAAK_EMAIL}</span>
							</FlexBox>
							<FlexBox gap={7} align="start">
								<FlexBox>
									<LocationFillIcon color="white" />
								</FlexBox>
								<span>{STAAK_ADDRESS}</span>
							</FlexBox>
						</FlexBox>
					</div>
					<FlexBox justify="start" gap={20}>
						<a href={FACEBOOK_PAGE_URL} target="_blank" rel="noreferrer">
							<StyledIcon>
								<FaceBookIcon color="white" width="28px" />
							</StyledIcon>
						</a>
						<a href={INSTAGRAM_PAGE_URL} target="_blank" rel="noreferrer">
							<StyledIcon>
								<InstagramIcon color="white" width="28px" />
							</StyledIcon>
						</a>
						<a href={LINKEDIN_PAGE_URL} target="_blank" rel="noreferrer">
							<StyledIcon>
								<LinkedinIcon color="white" width="28px" />
							</StyledIcon>
						</a>
						<a href={TWITTER_PAGE_URL} target="_blank" rel="noreferrer">
							<StyledIcon>
								<TwitterIcon color="white" width="28px" />
							</StyledIcon>
						</a>
					</FlexBox>
				</LContainer>
				<ContactInfo />
			</MainContainer>
		</FlexBox>
	);
};
export default ContactUS;
