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

const Cuisine = () => {
	const [cuisine, setCuisine] = useState([]);
	let params = useParams();

	useEffect(() => {
		getCuisine(params.type);
	}, [params.type]);

	const getCuisine = async (name) => {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}`
		);
		const data = await api.json();
		setCuisine(data.results);
	};

	return (
		<Grid>
			{cuisine.map((item) => (
				<Card key={item.id}>
					<img src={item.image} alt={item.title} />
					<h4>{item.title}</h4>
				</Card>
			))}
		</Grid>
	);
};

export default Cuisine;
