import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { FlexBox, LinkTag, Button } from 'staak-ui';
import { FaceBookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'staak-ui';
import StaakLogo from '@/assets/theme/StaakLogo';
import { VariantType } from '@/models/theme/staakLogo.interface';
import { Link } from 'react-router-dom';
import { FACEBOOK_PAGE_URL, INSTAGRAM_PAGE_URL, LINKEDIN_PAGE_URL, TWITTER_PAGE_URL } from '@/constants/app.constants';

const { STAAK_URL } = STAAK_ENV;

const StyledDiv = styled(FlexBox)`
	padding-top: 3em;
	color: ${colors.WHITE};
	background-color: #292929;
`;

const StyledIcon = styled.span`
	cursor: pointer;
	margin-left: 15px;
`;
const StyledDivider = styled.div`
	border-bottom: 1px solid white;
	padding: 20px 0px;
	width: 100%;
	opacity: 0.5;
`;
const StyledFlexBox = styled(FlexBox)`
	padding: 20px 10px;
	width: 100%;
`;
const H1Styled = styled.h1`
	margin: 0 0 20px 0;
	font-size: 1.2em;
`;
const CopyrightStyled = styled(FlexBox)`
	height: 50px;
	padding: 0 15%;
	background-color: ${colors.GRAY_BASE};
	width: 100%;
`;
const LinkStyled = styled(Link)`
	margin-left: 15px;
`;

const Footer = () => {
	return (
		<>
			<StyledDiv>
				<FlexBox flexDirection="column" width="70%">
					<FlexBox justify="space-between" align="flex-start" width="100%">
						<FlexBox flexDirection="column" align="flex-start" height="350px" justify="space-between">
							<StaakLogo variant={VariantType.LIGHT} size={130} />
							<FlexBox justify="space-between">
								<a target="_blank" href={`${STAAK_URL}/register/company`} style={{ marginRight: '15px' }} rel="noreferrer">
									<Button color="white" variant="outlined">
										Start Hiring
									</Button>
								</a>
								<a target="_blank" href={`${STAAK_URL}/register/developer`} rel="noreferrer">
									<Button>Join Staak & Code</Button>
								</a>
							</FlexBox>
						</FlexBox>
						<FlexBox flexDirection="column" align="flex-start">
							<H1Styled>For Companies</H1Styled>
							<FlexBox flexDirection="column" align="flex-start">
								<LinkTag>Post jobs</LinkTag>
								<LinkTag>Browser talents</LinkTag>
								<LinkTag>Contact talents</LinkTag>
								<LinkTag>Track applications</LinkTag>
								<LinkTag>Customize profile</LinkTag>
							</FlexBox>
						</FlexBox>
						<FlexBox flexDirection="column" align="flex-start">
							<H1Styled>For Talents</H1Styled>
							<FlexBox flexDirection="column" align="flex-start">
								<LinkTag>Browser companies</LinkTag>
								<LinkTag>Browser jobs</LinkTag>
								<LinkTag>Easy application</LinkTag>
								<LinkTag>Customize profile</LinkTag>
							</FlexBox>
						</FlexBox>
						<FlexBox flexDirection="column" align="flex-start">
							<H1Styled>For us</H1Styled>
							<FlexBox flexDirection="column" align="flex-start">
								<Link to="/contact-us">
									<LinkTag>Contact us</LinkTag>
								</Link>

								<Link to="/about">
									<LinkTag>About us</LinkTag>
								</Link>
								<a href={`${STAAK_URL}/login`} target="_blank" rel="noreferrer">
									<LinkTag>Join us</LinkTag>
								</a>
							</FlexBox>
						</FlexBox>
					</FlexBox>
					<StyledDivider />
					<StyledFlexBox justify="space-between">
						<div>
							<span>Bahrain: +1 857 990 9675</span>
							<br />
							<span>Europe & Rest of World: +44 203 826 8149</span>
						</div>
						<FlexBox justify="space-between">
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
					</StyledFlexBox>
				</FlexBox>
			</StyledDiv>
			<CopyrightStyled justify="space-between">
				<span>© Staak services 2022</span>
				<div>
					<LinkStyled to="/terms-conditions">Terms & Conditions</LinkStyled>
					<LinkStyled to="/privacy-policy">Privacy Policy</LinkStyled>
				</div>
			</CopyrightStyled>
		</>
	);
};
export default Footer;
