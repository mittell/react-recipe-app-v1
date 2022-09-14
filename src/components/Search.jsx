import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FormStyled = styled.form`
	margin-left: 20rem;
	margin-right: 20rem;
	margin-top: 5rem;

	div {
		width: 100%;
		position: relative;
	}

	input {
		border: none;
		background: linear-gradient(35deg, #494949, #313131);
		font-size: 1.5rem;
		color: white;
		padding: 1rem 3rem;
		border: none;
		border-radius: 1rem;
		outline: none;
		width: 100%;
	}

	svg {
		position: absolute;
		top: 25%;
		left: 0%;
		transform: translate(100%, 50%);
		color: white;
	}
`;

const Search = () => {
	const [input, setInput] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/search/${input}`);
	};

	return (
		<FormStyled onSubmit={handleSubmit}>
			<div>
				<FaSearch />
				<input
					type='text'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</div>
		</FormStyled>
	);
};

export default Search;
