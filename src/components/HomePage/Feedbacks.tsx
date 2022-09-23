import styled from 'styled-components';
import { colors } from '@/assets/theme';
import Carousel from '@/components/carousel/Carousel';

const Container = styled.div`
	position: relative;
	padding: 3em 0;
	background: ${colors.PURPLE_1};
`;
const TitleStyled = styled.h1`
	margin-top: 0;
	margin-bottom: 35px;
	font-size: 2em;
	text-align: center;
`;
const Feedbacks = () => {
	return (
		<Container>
			<TitleStyled>Testimonials</TitleStyled>
			<Carousel
				items={[
					{
						img: 'assets/img/home/post-job.svg',
						headName: 'Edward jones 0',
						description: 'Staak is one of the best companies in the world of recruitment and our company it had lot of benifict form Staak',
					},
					{
						img: 'assets/img/home/job-time.svg',
						headName: 'Edward jones 1',
						description:
							'Staak is one of the best companies in the world of recruitment and our company it had lot of benifict form Staak gshjdg ahsjg dhjsag hjdasggjdshagjdgs ajgdj asgdhjgsa hjdghjasg jhd',
					},
					{
						img: 'assets/img/home/developer-job.svg',
						headName: 'Edward jones 2',
						description: 'Staak is one of the best companies in the world of recruitment and our company it had lot of benifict form Staak',
					},
					{
						img: 'assets/img/home/post-job.svg',
						headName: 'Edward jones 3',
						description: 'Staak is one of the best companies in the world of recruitment and our company it had lot of benifict form Staak',
					},
					{
						img: 'assets/img/home/job-time.svg',
						headName: 'Edward jones 4',
						description: 'Staak is one of the best companies in the world of recruitment and our company it had lot of benifict form Staak',
					},
					{
						img: 'assets/img/home/job-time.svg',
						headName: 'Edward jones 5',
						description:
							'Staak is one of the best companies in the world of recruitment and our company it had lot of benifict form Staak gshjdg ahsjg dhjsag hjdasggjdshagjdgs ajgdj asgdhjgsa hjdghjasg jhd',
					},
					{
						img: 'assets/img/home/developer-job.svg',
						headName: 'Edward jones 6',
						description: 'Staak is one of the best companies in the world of recruitment and our company it had lot of benifict form Staak',
					},
					{
						img: 'assets/img/home/post-job.svg',
						headName: 'Edward jones 7',
						description: 'Staak is one of the best companies in the world of recruitment and our company it had lot of benifict form Staak',
					},
					{
						img: 'assets/img/home/job-time.svg',
						headName: 'Edward jones 8',
						description: 'Staak is one of the best companies in the world of recruitment and our company it had lot of benifict form Staak',
					},
				]}
			></Carousel>
		</Container>
	);
};
export default Feedbacks;
