import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Cuisine from './Cuisine';
import SearchResults from './SearchResults';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';

const Pages = () => {
	const location = useLocation();

	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Home />} />
				<Route path='/cuisine/:type' element={<Cuisine />} />
				<Route path='/search/:search' element={<SearchResults />} />
				<Route path='/recipe/:id' element={<Recipe />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</AnimatePresence>
	);
};

export default Pages;
