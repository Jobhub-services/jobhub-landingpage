import styled from 'styled-components';
const SvgStyled = styled.svg`
	position: absolute;
	margin-top: 100px;
	bottom: -2px;
`;
export const WaveBg = () => {
	return (
		<SvgStyled width="100%" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M 0,600 C 0,600 0,300 0,300 C 211.06666666666666,314.6666666666667 422.1333333333333,329.33333333333337 568,315 C 713.8666666666667,300.66666666666663 794.5333333333333,257.33333333333337 929,250 C 1063.4666666666667,242.66666666666666 1251.7333333333333,271.3333333333333 1440,300 C 1440,300 1440,600 1440,600 Z"
				stroke="none"
				stroke-width="0"
				fill="#ffffff"
			></path>
		</SvgStyled>
	);
};
export default WaveBg;
