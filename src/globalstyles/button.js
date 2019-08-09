import styled from 'styled-components';

const Button = styled.div`
  background-color: #527ab4;
  border-radius: 2px;
  color: #fff;
	padding: 8px;
	max-width: 150px;
	margin: 1rem auto;
	font-size: 2rem;
	transition: 0.3s;

	&:hover {
		background-color: #012c6a;
		cursor: pointer;
	}
`;

export default Button;