import { Link } from 'react-router-dom';
import { DropDownItem, FlexBox } from 'staak-ui';
import styled, { css } from 'styled-components';

const { STAAK_URL } = STAAK_ENV;

interface NavProps {
	isLight?: boolean;
}
const NavStyled = styled(FlexBox)`
	margin-right: 3em;
	${({ isLight }) =>
		isLight &&
		css`
			color: white;
		`}

	> div {
		margin-right: 10px;
	}
`;

const LinkStyled = styled.a`
	margin-right: 15px;
`;

const NavItems = ({ isLight }: NavProps) => {
	return (
		<NavStyled align="center" isLight={isLight}>
			<LinkStyled href={`${STAAK_URL}/public/jobs`} target="_blank" rel="noreferrer">
				<DropDownItem size="md">Browse Jobs</DropDownItem>
			</LinkStyled>
			<LinkStyled href={`${STAAK_URL}/register/company`} target="_blank" rel="noreferrer">
				<DropDownItem size="md">Find Talent</DropDownItem>
			</LinkStyled>
			<LinkStyled href={`${STAAK_URL}/register/developer`} target="_blank" rel="noreferrer">
				<DropDownItem size="md">Find Company</DropDownItem>
			</LinkStyled>
			{/*<Link to="/about" style={{ marginRight: 10 }}>
				<DropDownItem size="md">About</DropDownItem>
	</Link>*/}
			<Link to="/contact-us">
				<DropDownItem size="md">Contact us</DropDownItem>
			</Link>
		</NavStyled>
	);
};
NavItems.defaultProps = {
	isLight: true,
};

export default NavItems;
