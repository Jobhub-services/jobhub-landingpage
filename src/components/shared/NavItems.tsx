import { FC } from 'react';
import { DropDownItem, FlexBox } from 'staak-ui';
import styled, { css } from 'styled-components';

interface NavProps {
	isLight?: boolean;
}
const NavStyled = styled(FlexBox)`
	margin-right: 5em;
	${({ isLight }) =>
		isLight &&
		css`
			color: white;
		`}

	> div {
		margin-right: 10px;
	}
`;

const NavItems = ({ isLight }: NavProps) => {
	return (
		<NavStyled align="center" isLight={isLight}>
			<DropDownItem size="md">Find Work</DropDownItem>
			<DropDownItem size="md">Find Talent</DropDownItem>
			<DropDownItem size="md">Browse companies</DropDownItem>
			<DropDownItem size="md">Why staak</DropDownItem>
		</NavStyled>
	);
};
NavItems.defaultProps = {
	isLight: true,
};

export default NavItems;
