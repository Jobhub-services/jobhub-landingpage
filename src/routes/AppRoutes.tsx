import { Routes, Route, Navigate } from 'react-router-dom';
import MasterLayout from '@/views/MasterLayout';
import HomeView from '@/views/HomeView';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<MasterLayout />}>
				<Route path="/" element={<HomeView />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
