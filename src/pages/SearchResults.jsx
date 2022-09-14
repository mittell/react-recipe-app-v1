import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 3rem;
`;

const Card = styled.div`
	img {
		width: 100%;
		border-radius: 2rem;
	}

	a {
		text-decoration: none;
	}

	h4 {
		text-align: center;
		padding: 1rem;
	}
`;

const SearchResults = () => {
	const [results, setResults] = useState([]);
	let params = useParams();

	useEffect(() => {
		getResults(params.search);
	}, [params.search]);

	const getResults = async (search) => {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${search}`
		);
		const data = await api.json();
		setResults(data.results);
	};

	return (
		<Grid>
			{results.map((item) => (
				<Card key={item.id}>
					<Link to={`/recipe/${item.id}`}>
						<img src={item.image} alt={item.title} />
						<h4>{item.title}</h4>
					</Link>
				</Card>
			))}
		</Grid>
	);
};

export default SearchResults;
