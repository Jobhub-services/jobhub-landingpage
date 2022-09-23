import { Routes, Route, Navigate } from 'react-router-dom';
import MasterLayout from '@/views/MasterLayout';
import HomeView from '@/views/HomeView';
import ContactUS from '@/views/ContactUS';
import AboutPage from '@/views/AboutPage';
import Terms from '@/views/Terms';
import Privacy from '@/views/Privacy';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<MasterLayout />}>
				<Route path="/" element={<HomeView />} />
				<Route path="/contact-us" element={<ContactUS />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/terms-conditions" element={<Terms />} />
				<Route path="/privacy-policy" element={<Privacy />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
