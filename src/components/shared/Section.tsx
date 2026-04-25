import { StandardProps } from '@/models/component/app.interface';
import { FC } from 'react';
import styled from 'styled-components';
const SectionStyled = styled.section`
	width: 100%;
	margin: auto;
	padding: 60px 0px;
`;
const Section: FC = (props: StandardProps) => {
	return <SectionStyled>{props.children}</SectionStyled>;
};
export default Section;
