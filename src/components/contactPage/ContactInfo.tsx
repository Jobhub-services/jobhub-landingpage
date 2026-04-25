import LoadingIcon from '@/assets/icons/LoadingIcon';
import { colors } from '@/assets/theme';
import { actions } from '@/modules/actions/app.actions';
import { useState } from 'react';
import { Button, FlexBox, Input, TextArea } from 'staak-ui';
import styled from 'styled-components';

const RContainer = styled.div`
	background-color: white;
	border-radius: 8px;
	padding: 15px 20px;
	width: 55%;
	color: ${colors.BLACK_2};
	box-shadow: 0px 0px 20px -10px ${colors.PURPLE_1};
	@media only screen and (max-width: 780px) {
		width: 100%;
	}
`;
const SH3 = styled.h3`
	margin: 0;
`;
const SInput = styled.div`
	width: 100%;
	& label {
		display: block;
		margin-bottom: 5px;
	}
`;
const ContactInfo = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<{ email?: string; name?: string; companyName?: string; message?: string }>({});
	const [errors, setErrors] = useState<{ email?: boolean; name?: boolean; companyName?: boolean; message?: boolean }>({
		email: false,
		name: false,
		message: false,
		companyName: false,
	});
	const handleInput = (e: any, val: string, name: string) => {
		const tmp = { ...data, [name]: val };
		const errorTmp = { ...errors, [name]: val === '' };
		setData(tmp);
		setErrors(errorTmp);
	};
	const handleClick = () => {
		const errorTmp = {
			email: !data?.email || data?.email === '',
			message: !data?.message || data?.message === '',
			companyName: !data?.companyName || data?.companyName === '',
			name: !data?.name || data?.name === '',
		};
		setErrors(errorTmp as any);
		if (!(errorTmp?.email || errorTmp?.message || errorTmp?.name || errorTmp?.companyName)) {
			setLoading(true);
			actions.contactUs(data).finally(() => setLoading(false));
		}
	};
	return (
		<RContainer>
			<SH3>Contact Informations</SH3>
			<div className="mt-20">
				<FlexBox flexDirection="column" gap={20} width="100%" align="start" className="mb-20">
					<SInput>
						<label>Name</label>
						<Input name="name" placeholder="Your name" value={data?.name} onDataChange={handleInput} error={errors?.name} />
					</SInput>
					<SInput>
						<label>Company name</label>
						<Input
							name="companyName"
							placeholder="Your company name"
							value={data?.companyName}
							onDataChange={handleInput}
							error={errors?.companyName}
						/>
					</SInput>
					<SInput>
						<label>Email</label>
						<Input name="email" placeholder="Your email" value={data?.email} onDataChange={handleInput} error={errors?.email} />
					</SInput>
					<SInput>
						<label>Message</label>
						<TextArea
							name="message"
							placeholder="Write your message..."
							height="180px"
							value={data?.message}
							onDataChange={handleInput}
							error={errors?.message}
						/>
					</SInput>
				</FlexBox>
				<Button onClick={handleClick} disable={true}>
					{loading ? (
						<FlexBox width="80px">
							<LoadingIcon color={colors.WHITE} width="25px" height="25px" />
						</FlexBox>
					) : (
						'Get in touch'
					)}
				</Button>
			</div>
		</RContainer>
	);
};

export default ContactInfo;
