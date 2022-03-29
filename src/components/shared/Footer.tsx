import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { FlexBox, LinkTag } from 'staak-ui';
import { FaceBookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'staak-ui';
import StaakLogo from '@/assets/theme/StaakLogo';
import { VariantType } from '@/models/theme/staakLogo.interface';
import { JoinButton, LoginButton } from '@/components/shared/AuthButtons';
import { Link } from 'react-router-dom';

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
								<LoginButton noBg={true} color="white" variant="text" />
								<JoinButton noBg={true} color="white" variant="outlined" />
							</FlexBox>
						</FlexBox>
						<FlexBox flexDirection="column" align="flex-start">
							<H1Styled>Companies</H1Styled>
							<FlexBox flexDirection="column" align="flex-start">
								<LinkTag>Source & Attract</LinkTag>
								<LinkTag>Language options</LinkTag>
								<LinkTag>Careers pages</LinkTag>
								<LinkTag>Source & Attract</LinkTag>
								<LinkTag>Source & Attract</LinkTag>
								<LinkTag>Source & Attract</LinkTag>
							</FlexBox>
						</FlexBox>
						<FlexBox flexDirection="column" align="flex-start">
							<H1Styled>Developers</H1Styled>
							<FlexBox flexDirection="column" align="flex-start">
								<LinkTag>Video Interviews</LinkTag>
								<LinkTag>Source & Attract</LinkTag>
								<LinkTag>Source & Attract</LinkTag>
								<LinkTag>Source & Attract</LinkTag>
								<LinkTag>Source & Attract</LinkTag>
							</FlexBox>
						</FlexBox>
						<FlexBox flexDirection="column" align="flex-start">
							<H1Styled>Features</H1Styled>
							<FlexBox flexDirection="column" align="flex-start">
								<LinkTag>Help & Support</LinkTag>
								<LinkTag>Applicant Tracking</LinkTag>
								<LinkTag>Hiring Tutoriels</LinkTag>
								<LinkTag>Job Description</LinkTag>
								<LinkTag>Blog</LinkTag>
								<LinkTag>Community</LinkTag>
								<LinkTag>Affiliate Program</LinkTag>
								<LinkTag>Source & Attract</LinkTag>
							</FlexBox>
						</FlexBox>
						<FlexBox flexDirection="column" align="flex-start">
							<H1Styled>Company</H1Styled>
							<FlexBox flexDirection="column" align="flex-start">
								<LinkTag>Contact</LinkTag>
								<LinkTag>BackStage</LinkTag>
								<LinkTag>Careers</LinkTag>
								<LinkTag>Press</LinkTag>
								<LinkTag>About</LinkTag>
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
							<StyledIcon>
								<FaceBookIcon color="white" width="28px" />
							</StyledIcon>
							<StyledIcon>
								<InstagramIcon color="white" width="28px" />
							</StyledIcon>
							<StyledIcon>
								<LinkedinIcon color="white" width="28px" />
							</StyledIcon>
							<StyledIcon>
								<TwitterIcon color="white" width="28px" />
							</StyledIcon>
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
