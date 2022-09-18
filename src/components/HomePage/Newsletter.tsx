import { Input, Button } from 'staak-ui';
import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { useState } from 'react';
const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 7em 0;
	background: ${colors.PURPLE_1};
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
	margin-left: 30px;
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

	const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const value = event.target.value;
		setEmail(value);
	};
	function handleSubscribe() {
		alert(email);
	}
	return (
		<Container>
			<div>
				<TitleStyled>Subscribe to staak now</TitleStyled>
				<DescriptionStyled>
					We have big news to the recruitment world, don't miss email subscription to stay up to date, and be the first who enjoy the staak news
				</DescriptionStyled>
			</div>
			<ContactFormStyled>
				<LabelEmailStyled>Professional email</LabelEmailStyled>
				<Input onChange={handleChangeEmail} width="100%" name="Professional email" type="email" placeholder="Professional email" value={email} />
				<SubmitButton onClick={handleSubscribe}>Subscribe now</SubmitButton>
			</ContactFormStyled>
		</Container>
	);
};
export default Newsletter;
