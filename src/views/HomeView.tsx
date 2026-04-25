import HeadPage from '@/components/HomePage/HeadPage';
import Services from '@/components/HomePage/Services';
import Features from '@/components/HomePage/Features';
import Statistics from '@/components/HomePage/Statistics';
import Newsletter from '@/components/HomePage/Newsletter';

const HomeView = () => {
	return (
		<>
			<HeadPage />
			<Services />
			<Features />
			<Statistics />
			<Newsletter />
			{/*<Feedbacks />*/}
			{/*<Partners />*/}
		</>
	);
};

export default HomeView;
