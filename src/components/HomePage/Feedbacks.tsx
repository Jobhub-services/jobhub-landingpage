import { colors } from '@/assets/theme';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	padding: 4em 0;
	background: ${colors.PURPLE_1};
`;
const TitleStyled = styled.h1`
	margin-top: 0;
	font-size: 2.5em;
	text-align: center;
`;
const Feedbacks = () => {
	return (
		<Container>
			<TitleStyled>Testimonials</TitleStyled>
		</Container>
	);
};
export default Feedbacks;
