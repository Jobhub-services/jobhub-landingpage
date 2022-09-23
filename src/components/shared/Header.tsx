import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FlexBox, Button } from 'staak-ui';
import NavItems from '@/components/shared/NavItems';
import { colors } from '@/assets/theme';
import StaakLogo from '@/assets/theme/StaakLogo';
import { APP_HEADER_HEIGHT } from '@/constants/app.constants';
import { VariantType } from '@/models/theme/staakLogo.interface';
import { FC } from 'react';
import { MasterLayoutContext } from '@/views/MasterLayout';

const { STAAK_URL } = STAAK_ENV;

const StyledHeader = styled(FlexBox)`
	position: sticky;
	top: 0;
	left: 0;
	height: ${APP_HEADER_HEIGHT}px;
	width: 100%;
	padding: 0 50px;
	background-color: ${(props) => (props.scrolled ? colors.WHITE : colors.PURPLE_BASE)};
	transition: 0.1s ease;
	z-index: 100;
	${(props) =>
		props.scrolled &&
		css`
			box-shadow: 1px 1px 30px #00000042;
		`}
`;
const Header: FC = () => {
	return (
		<MasterLayoutContext.Consumer>
			{(scrolled) => {
				const loginBtnProps: any = {
					variant: 'text',
				};
				loginBtnProps.variant = 'outlined';
				if (!scrolled) {
					loginBtnProps.color = 'white';
				}
				const joinBtnProps: any = {};
				if (!scrolled) {
					joinBtnProps.color = 'white';
					joinBtnProps.noBg = true;
				}
				return (
					<StyledHeader justify="space-between" scrolled={scrolled} align="center" size="lg">
						<Link to="/">
							<StaakLogo variant={scrolled ? VariantType.PRIMARY : VariantType.LIGHT} size={140} />
						</Link>
						<FlexBox align="center">
							<NavItems isLight={!scrolled} />
							<a target="_blank" href={`${STAAK_URL}/login`} style={{ marginRight: 15 }} rel="noreferrer">
								<Button {...loginBtnProps}>Login</Button>
							</a>
							<a target="_blank" href={`${STAAK_URL}/register/company`} rel="noreferrer">
								<Button {...joinBtnProps}>Join Staak</Button>
							</a>
						</FlexBox>
					</StyledHeader>
				);
			}}
		</MasterLayoutContext.Consumer>
	);
};

export default Header;
