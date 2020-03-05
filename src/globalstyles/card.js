import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 2px;
  color: #000;
  padding: 2rem;
  font-size: 2rem;
  opacity: 0.9;
  text-align: center;


  .heading {
    display: block;
    font-size: 3rem;
    color: #000;
    &:hover {
        text-decoration: underline;
    }  
  }
  .description {
    color: #000;
    font-size: 1.5rem;
    display: block;
  }
  .image {

  }
`;

export default Card;