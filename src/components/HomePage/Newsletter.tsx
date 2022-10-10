import { useState } from 'react';
import styled from 'styled-components';
import { Input, Button, FlexBox } from 'staak-ui';
import { colors } from '@/assets/theme';
import { actions as AppActions } from '@/modules/actions/app.actions';

const Container = styled(FlexBox)`
	position: relative;
	width: 100%;
	padding: 7em 0;
	background: ${colors.PURPLE_1};
	gap: 40px;
	@media only screen and (max-width: 1020px) {
		flex-direction: column;
		align-items: flex-start;
		padding: 7em 2em;
		gap: 0px;
	}
`;
const TitleStyled = styled.h1`
	margin: 0;
	font-size: 2em;
`;

const DescriptionStyled = styled.p`
	width: 450px;
`;

const ContactFormStyled = styled.div`
	position: relative;
	padding: 20px;
	width: 500px;
	border-radius: 8px;
	text-align: center;
	background: ${colors.WHITE};
`;
const LabelEmailStyled = styled.label`
	display: block;
	text-align: left;
	margin-bottom: 10px;
`;

const SubmitButton = styled(Button)`
	margin-top: 20px;
`;

const Newsletter = () => {
	const [email, setEmail] = useState('');
	const [isSubmiting, setIsSubmiting] = useState(false);

	const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const value = event.target.value;
		setEmail(value);
	};
	function handleSubscribe() {
		if (!email) return;
		setIsSubmiting(true);
		AppActions.subscribeToNewsletter(email).finally(() => {
			setIsSubmiting(false);
		});
	}
	return (
		<Container>
			<div>
				<TitleStyled>Subscribe to staak now</TitleStyled>
				<DescriptionStyled>Stay up to date and be the first who enjoy the latest staak updates</DescriptionStyled>
			</div>
			<ContactFormStyled>
				<LabelEmailStyled>Professional email</LabelEmailStyled>
				<Input
					onChange={handleChangeEmail}
					disabled={isSubmiting}
					width="100%"
					name="Professional email"
					type="email"
					placeholder="Professional email"
					value={email}
				/>
				<SubmitButton disabled={isSubmiting} onClick={handleSubscribe}>
					Subscribe now
				</SubmitButton>
			</ContactFormStyled>
		</Container>
	);
};
export default Newsletter;
