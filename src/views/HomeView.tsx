import React, { Component } from 'react';
import HeadPage from '@/components/HomePage/HeadPage';
import Services from '@/components/HomePage/Services';
import Features from '@/components/HomePage/Features';
import Partners from '@/components/HomePage/Partners';
import Statistics from '@/components/HomePage/Statistics';
import Feedbacks from '@/components/HomePage/Feedbacks';

const HomeView = () => {
	return (
		<>
			<HeadPage />
			<Services />
			<Features />
			<Statistics />
			<Feedbacks />
			<Partners />
		</>
	);
};

export default HomeView;
