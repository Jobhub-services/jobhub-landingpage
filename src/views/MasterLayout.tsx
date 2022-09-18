import React, { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
const StyledHomeView = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
`;
export const MasterLayoutContext = React.createContext(false);

const MasterLayout: FC = () => {
	const [scrollStart, setScrollStart] = useState(false);
	const handleScroll = (e) => {
		const scrollElement: HTMLElement = e.target;
		const scrollTop = scrollElement.scrollTop;
		if (scrollTop > 50 && !scrollStart) setScrollStart(true);
		else if (scrollTop < 50 && scrollStart) setScrollStart(false);
	};
	return (
		<MasterLayoutContext.Provider value={scrollStart}>
			<StyledHomeView onScroll={handleScroll}>
				<Header />
				<Outlet />
				<Footer />
			</StyledHomeView>
		</MasterLayoutContext.Provider>
	);
};

export default MasterLayout;
