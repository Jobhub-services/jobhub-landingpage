import React, { FC, useEffect, useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { MasterContextProps } from '@/models/component/app.interface';
import CollapsedHeader from '@/components/shared/CollapsedHeader';

const StyledHomeView = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
`;
const masterContext: MasterContextProps = {
	collapsed: false,
	scrolled: false,
};
export const MasterLayoutContext = createContext<MasterContextProps>(masterContext);

const MasterLayout: FC = () => {
	const [scrollStart, setScrollStart] = useState(false);
	const [isCollapsed, setIsCollapsed] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		setIsCollapsed(window.innerWidth <= 1180);
		return function cleanUp() {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleResize = () => {
		setIsCollapsed(window.innerWidth <= 1180);
	};
	const handleScroll = (e) => {
		const scrollElement: HTMLElement = e.target;
		const scrollTop = scrollElement.scrollTop;
		if (scrollTop > 50 && !scrollStart) setScrollStart(true);
		else if (scrollTop < 50 && scrollStart) setScrollStart(false);
	};
	return (
		<MasterLayoutContext.Provider value={{ scrolled: scrollStart, collapsed: isCollapsed }}>
			<StyledHomeView onScroll={handleScroll}>
				{isCollapsed ? <CollapsedHeader /> : <Header />}
				<Outlet />
				<Footer />
			</StyledHomeView>
		</MasterLayoutContext.Provider>
	);
};

export default MasterLayout;
