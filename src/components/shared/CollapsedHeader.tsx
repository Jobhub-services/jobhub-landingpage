import ListIcon from '@/assets/icons/ListIcon';
import { colors } from '@/assets/theme';
import styled, { css, keyframes } from 'styled-components';
import StaakLogo from '@/assets/theme/StaakLogo';
import { Link } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import { MasterLayoutContext } from '@/views/MasterLayout';
import { VariantType } from '@/models/theme/staakLogo.interface';
import { DropDownItem, FlexBox } from 'staak-ui';
import { APP_HEADER_HEIGHT } from '@/constants/app.constants';
import CloseIcon from '@/assets/icons/CloseIcon';

const { STAAK_URL } = STAAK_ENV;

const kFullWidth = keyframes`
	from {
		width: 0;
	} 
	to{
		width: 300px;
	}
`;
const StyledHeader = styled(FlexBox)`
	position: sticky;
	top: 0;
	left: 0;
	height: ${APP_HEADER_HEIGHT}px;
	width: 100%;
	padding: 0 50px;
	background-color: ${(props) => (props.scrolled ? colors.WHITE : colors.PURPLE_BASE)};
	transition: 0.1s ease;
	z-index: 3;
	${(props) =>
		props.scrolled &&
		css`
			box-shadow: 1px 1px 30px #00000042;
		`}
`;

const Container = styled.div<any>`
	position: fixed;
	top: 0;
	right: 0;
	//background-color: ${colors.BLACK_11};
	//opacity: 0.5;
	width: 100%;
	//height: 100%;
	z-index: 2;
`;

/*const MainContainer = styled.div<any>`
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	background-color: #2c2c2c3b;
	z-index: 3;
`;*/
const SList = styled.div<any>`
	position: absolute;
	top: 0;
	right: 0;
	background-color: white;
	width: ${(props) => (props.collapse ? '300px' : '0')};
	display: ${(props) => (props.collapse ? 'flex' : 'none')};
	animation: ${kFullWidth} 0.2s ease-in-out;
	height: 650px;
	z-index: 4;
`;
const SHeader = styled(FlexBox)`
	padding: 0 20px;
	border-bottom: 1px solid ${colors.BLACK_12};
`;
const SLink = styled(Link)`
	width: 100%;
`;
const CollapsedHeader = () => {
	const context = useContext(MasterLayoutContext);
	const [collapse, setCollapse] = useState(false);
	const handleCollapse = () => {
		setCollapse(!collapse);
	};
	return (
		<Container>
			<StyledHeader justify="space-between" scrolled={context?.scrolled} align="center" size="lg">
				<Link to="/">
					<StaakLogo variant={context?.scrolled ? VariantType.PRIMARY : VariantType.LIGHT} size={140} />
				</Link>

				<span onClick={handleCollapse}>
					<ListIcon width="30px" height="30px" color={context?.scrolled ? colors.PURPLE_BASE : colors.WHITE} />
				</span>
			</StyledHeader>
			<SList collapse={collapse}>
				<SHeader height={`${APP_HEADER_HEIGHT}px`} justify="start">
					<span onClick={handleCollapse}>
						<CloseIcon color={colors.PURPLE_BASE} />
					</span>
				</SHeader>
				<FlexBox flexDirection="column" align="start" justify="start" gap={20} style={{ marginTop: '15px', padding: '0 10px' }}>
					<SLink to={`${STAAK_URL}/public/jobs`} target="_blank" rel="noreferrer">
						<DropDownItem size="md">Browse Jobs</DropDownItem>
					</SLink>
					<SLink to={`${STAAK_URL}/register/company`} target="_blank" rel="noreferrer">
						<DropDownItem size="md">Find Talent</DropDownItem>
					</SLink>
					<SLink to={`${STAAK_URL}/register/developer`} target="_blank" rel="noreferrer">
						<DropDownItem size="md">Find Company</DropDownItem>
					</SLink>
					<SLink to="/contact-us">
						<DropDownItem size="md">Contact us</DropDownItem>
					</SLink>
				</FlexBox>
			</SList>
		</Container>
	);
};

export default CollapsedHeader;
