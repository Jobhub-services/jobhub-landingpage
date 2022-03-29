import styled, { css } from 'styled-components';
import { FlexBox } from 'staak-ui';
import NavItems from '@/components/shared/NavItems';
import { colors } from '@/assets/theme';
import StaakLogo from '@/assets/theme/StaakLogo';
import { APP_HEADER_HEIGHT } from '@/constants/app.constants';
import { VariantType } from '@/models/theme/staakLogo.interface';
import { JoinButton, LoginButton } from '@/components/shared/AuthButtons';
import { FC } from 'react';
import { MasterLayoutContext } from '@/views/MasterLayout';

const StyledHeader = styled(FlexBox)`
	position: sticky;
	top: 0;
	left: 0;
	height: ${APP_HEADER_HEIGHT}px;
	width: 100%;
	padding: 0 50px;
	background-color: ${(props) => (props.scrolled ? colors.WHITE : colors.PURPLE_BASE)};
	transition: 0.2s ease;
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
				if (!scrolled) {
					loginBtnProps.color = 'white';
					loginBtnProps.noBg = true;
				}
				const joinBtnProps: any = {};
				if (!scrolled) {
					joinBtnProps.variant = 'outlined';
					joinBtnProps.color = 'white';
					joinBtnProps.noBg = true;
				}
				return (
					<StyledHeader justify="space-between" scrolled={scrolled} align="center" size="lg">
						<StaakLogo variant={scrolled ? VariantType.PRIMARY : VariantType.LIGHT} size={140} />
						<FlexBox align="center">
							<NavItems isLight={!scrolled} />
							<LoginButton {...loginBtnProps} />
							<JoinButton {...joinBtnProps} />
						</FlexBox>
					</StyledHeader>
				);
			}}
		</MasterLayoutContext.Consumer>
	);
};

export default Header;
