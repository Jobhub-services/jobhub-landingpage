import styled from 'styled-components';
import { Button } from 'staak-ui';

const { STAAK_URL } = STAAK_ENV;

const JoinButton = (
	{ variant, color, noBg, children, style }: { variant?: string; color?: string; noBg?: boolean; children?: any; style?: any } = { noBg: false }
) => {
	const onSignUp = (e: MouseEvent) => {
		window.location.replace(`${STAAK_URL}`);
	};
	return (
		<Button variant={variant} style={style} color={color} noBg={noBg} onClick={onSignUp}>
			{children ? children : 'Join Staak'}
		</Button>
	);
};
const ButtonStyled = styled(Button)`
	margin-right: 20px;
`;
const LoginButton = ({ variant, color, noBg }: { variant: string; color?: string; noBg?: boolean } = { variant: 'text', noBg: false }) => {
	const onLogin = (e: MouseEvent) => {
		window.location.replace(`${STAAK_URL}`);
	};
	return (
		<ButtonStyled variant={variant} color={color} noBg={noBg} onClick={onLogin}>
			Log In
		</ButtonStyled>
	);
};

export { JoinButton, LoginButton };
