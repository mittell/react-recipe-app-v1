import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cuisine from './Cuisine';
import SearchResults from './SearchResults';

const Pages = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/cuisine/:type' element={<Cuisine />} />
			<Route path='/search/:search' element={<SearchResults />} />
		</Routes>
	);
};

export default Pages;
