import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cuisine from './Cuisine';
import SearchResults from './SearchResults';
import Recipe from './Recipe';

const Pages = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/cuisine/:type' element={<Cuisine />} />
			<Route path='/search/:search' element={<SearchResults />} />
			<Route path='/recipe/:id' element={<Recipe />} />
			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	);
};

export default Pages;
